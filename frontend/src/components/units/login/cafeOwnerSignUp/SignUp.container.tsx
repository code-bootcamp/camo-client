import { useRouter } from "next/router";
import CafeSignUpUI from "./SignUp.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useApolloClient, useMutation } from "@apollo/client";
import { CHECK_SMS, CHECK_USER_EMAIL, CREATE_USER, SEND_SMS } from "./SignUp.queries";
import { useState } from "react";
import { IMutation, IMutationCreateCafeOwnerArgs } from "../../../../commons/types/generated/types";

const schema = yup.object({
  name: yup.string().required("이름을 입력해 주세요."),
  nickName: yup.string().required("닉네임을 입력해주세요."),
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
  cafeName: yup.string().required("카페 이름은 필수입니다."),
});

export default function CafeOwnerSignUp() {
  const router = useRouter();
  const [createCafeOwner] = useMutation<
    Pick<IMutation, "createCafeOwner">,
    IMutationCreateCafeOwnerArgs
  >(CREATE_USER);
  const [sendNumber] = useMutation(SEND_SMS);
  const [checkSMSTokenValid] = useMutation(CHECK_SMS);
  const [checkSMSToken, setCheckSMSToken] = useState(false);
  // const [count, setCount] = useState("03:00");

  const { register, handleSubmit, formState, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const phoneNumber = watch("phoneNumber");
  const SMSToken = watch("phoneNumberCheck");
  const email = watch("email");

  const onClickSendAuthNumber = async () => {
    try {
      await sendNumber({
        variables: { phoneNumber },
      });
      if (!phoneNumber) return;
      alert("인증번호가 전송되었습니다.");
    } catch (error) {
      alert("휴대폰 번호를 입력해주세요");
    }
  };

  const onClickNumberConfirm = async () => {
    try {
      const result = await checkSMSTokenValid({
        variables: { phoneNumber, SMSToken },
      });
      const checkPhoneToken = result?.data?.checkSMSTokenValid;
      if (checkPhoneToken) alert("인증이 완료되었습니다.");
      setCheckSMSToken(true);
      console.log(result);
      console.log(checkPhoneToken);
    } catch (error) {
      console.log(error);
    }
  };

  const client = useApolloClient();
  const onClickEmailCheck = async () => {
    try {
      const result2 = await client.query({
        query: CHECK_USER_EMAIL,
        variables: { email },
      });
      alert("사용가능한 아이디 입니다.");
      console.log(result2);
    } catch (error) {
      alert("이미 사용되고 있는 아이디입니다.");
      console.log(error);
    }
  };

  // const onClickSubmit = async (data: IFormSignUp) => {
  const onClickSubmit = async (data: any) => {
    // console.log({ ...data });
    const { passwordConfirm, phoneNumberCheck, ...dataCheck } = data;
    if (!checkSMSToken) return alert("휴대폰 인증을 해야합니다");
    try {
      const result = await createCafeOwner({
        variables: { CreateCafeOwnerInput: { ...dataCheck } },
      });
      // 콘솔로그 지우기
      console.log(result);
      // router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const onClickCancel = () => {
    router.push("/");
  };

  return (
    <CafeSignUpUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      onClickCancel={onClickCancel}
      onClickEmailCheck={onClickEmailCheck}
      onClickSendAuthNumber={onClickSendAuthNumber}
      onClickNumberConfirm={onClickNumberConfirm}
    />
  );
}
