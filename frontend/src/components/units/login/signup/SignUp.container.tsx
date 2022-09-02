import { useRouter } from "next/router";
import SignUpUI from "./SignUp.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./SignUp.queries";
import { IFormSignUp } from "./SignUp.types";
import { Modal } from "antd";

const schema = yup.object({
  name: yup.string().required("이름을 입력해 주세요."),
  nickName: yup.string().required("닉네임을 입력해주세요."),
  email: yup
    .string()
    .required("이메일을 입력해주세요.")
    .matches(/^\w+@\w+\.\w+$/, "이메일 형식에 알맞지 않습니다."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .matches(
      /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,15}$/,
      "영문, 숫자, 특수문자를 포함한 8자리 이상 15자리 이하의 비밀번호여야 합니다."
    ),
  // passwordConfirm: yup.string().oneOf([yup.ref("password"), null], "패스워드와 일치하지 않습니다."),
  phoneNumber: yup
    .string()
    .required("휴대폰 번호를 입력해주세요.")
    .matches(/^\d{3}\d{3,4}\d{4}$/, "휴대폰 형식에 알맞지 않습니다."),
  phoneNumberCheck: yup.string().required("휴대폰 번호를 인증해주세요."),
});

export default function SignUp() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickEmailCheck = () => {};
  const onClickSendAuthNumber = () => {};
  const onClickNumberConfirm = () => {};

  const onClickSubmit = async (data: any) => {
    try {
      await createUser({
        variables: {
          ...data,
        },
      });
      // 콘솔로그 지우기
      console.log(data);
      router.push("/");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickCancel = () => {
    router.push("/");
  };

  return (
    <SignUpUI
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
