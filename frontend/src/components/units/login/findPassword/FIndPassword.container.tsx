import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { CHECK_SMS, SEND_SMS, UPDATE_USER_PASSWORD } from "./FindPassword.queries";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { useRouter } from "next/router";
import FindPasswordUI from "./FindPassword.presenter";
import {
  IMutation,
  IMutationUpdateUserPasswordArgs,
} from "../../../../commons/types/generated/types";
import { IFormPasswordUpdate } from "./FindPassword.types";
import { useState } from "react";
import { Modal } from "antd";

const schema = yup.object({
  email: yup
    .string()
    .required("이메일(아이디)을 입력해주세요.")
    .matches(/^\w+@\w+\.\w+$/, "이메일(아이디) 형식에 알맞지 않습니다."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .matches(
      /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,15}$/,
      "영문, 숫자, 특수문자를 포함한 8자리 이상 15자리 이하의 비밀번호여야 합니다."
    ),
  passwordConfirm: yup.string().oneOf([yup.ref("password"), null], "패스워드와 일치하지 않습니다."),
  phoneNumber: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(/^\d{3}\d{3,4}\d{4}$/, "휴대폰 형식에 알맞지 않습니다."),
  phoneNumberCheck: yup.string().required("휴대폰 인증 번호가 필요합니다."),
});

export default function FindPassword() {
  const router = useRouter();
  const [updateUserPassword] = useMutation<
    Pick<IMutation, "updateUserPassword">,
    IMutationUpdateUserPasswordArgs
  >(UPDATE_USER_PASSWORD);

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
    } catch (error) {}
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
  const onClickSubmit = async (data: IFormPasswordUpdate) => {
    const { passwordConfirm, phoneNumberCheck, ...dataCheck } = data;
    if (!checkSMSToken) {
      Modal.error({ content: "휴대폰 인증을 해야합니다." });
      return;
    }
    try {
      await updateUserPassword({
        variables: { ...dataCheck },
      });
      Modal.success({ content: "비밀번호가 변경되었습니다." });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FindPasswordUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      onClickSendAuthNumber={onClickSendAuthNumber}
      onClickNumberConfirm={onClickNumberConfirm}
    />
  );
}
