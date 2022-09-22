import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { IQuery, IQueryCheckUserEmailArgs } from "../../../../commons/types/generated/types";
import FindIdUI from "./FindId.presenter";
import { CHECK_SMS, FETCH_USER_BY_EMAIL, SEND_SMS } from "./FindId.queries";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IFormEmailCheck } from "./FindId.types";
import { useRouter } from "next/router";
import { Modal } from "antd";

const schema = yup.object({
  phoneNumber: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(/^\d{3}\d{3,4}\d{4}$/, "휴대폰 형식에 알맞지 않습니다."),
  phoneNumberCheck: yup.string().required("휴대폰 인증 번호가 필요합니다."),
});

export default function FindId() {
  const client = useApolloClient();
  const router = useRouter();
  const { data: userEmailData } = useQuery<
    Pick<IQuery, "fetchUserByEmail">,
    IQueryCheckUserEmailArgs
  >(FETCH_USER_BY_EMAIL);
  const { register, handleSubmit, formState, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [sendNumber] = useMutation(SEND_SMS);
  const [checkSMSTokenValid] = useMutation(CHECK_SMS);
  const [checkSMSToken, setCheckSMSToken] = useState(false);

  const phoneNumber = watch("phoneNumber");
  const SMSToken = watch("phoneNumberCheck");

  const onClickSendAuthNumber = async () => {
    try {
      await sendNumber({
        variables: { phoneNumber },
      });
      if (!phoneNumber) return;
      Modal.success({ content: "인증번호가 전송되었습니다." });
    } catch (error) {
      Modal.error({ content: "인증번호가 전송되지 않았습니다." });
    }
  };

  const onClickNumberConfirm = async () => {
    try {
      const result = await checkSMSTokenValid({
        variables: { phoneNumber, SMSToken },
      });
      const checkPhoneToken = result?.data?.checkSMSTokenValid;
      if (checkPhoneToken) Modal.success({ content: "인증이 완료되었습니다." });
      setCheckSMSToken(true);
      console.log(result);
      console.log(checkPhoneToken);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickSubmit = async (data: IFormEmailCheck) => {
    const { phoneNumberCheck, ...dataCheck } = data;
    // if (!checkSMSToken) return;
    // Modal.error({ content: "휴대폰 인증을 해야합니다" });
    try {
      const result = await client.query({
        query: FETCH_USER_BY_EMAIL,
        variables: {
          // phoneNumber: data.phoneNumber,
          ...dataCheck,
        },
      });
      console.log(result);
      console.log(userEmailData?.fetchUserByEmail);
      console.log(result.data.fetchUserByEmail.email);
      Modal.info({ content: `고객님의 아이디는 ${result.data.fetchUserByEmail.email} 입니다.` });
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FindIdUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSendAuthNumber={onClickSendAuthNumber}
      onClickNumberConfirm={onClickNumberConfirm}
      onClickSubmit={onClickSubmit}
    />
  );
}
