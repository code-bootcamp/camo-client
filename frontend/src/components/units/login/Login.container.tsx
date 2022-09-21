import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LoginUI from "./Login.presenter";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./Login.queries";
import { ILoginType } from "./Login.types";
import { accessTokenState } from "../../../commons/store";
import { useRecoilState } from "recoil";
// import { IMutation, IMutationLoginUserArgs } from "../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { Modal } from "antd";

const schema = yup.object({
  email: yup
    .string()
    .required("이메일(아이디)을 입력해주세요.")
    .matches(/^\w+@\w+\.\w+$/, "이메일(아이디) 형식에 알맞지 않습니다."),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,15}$/,
      "영문, 숫자, 특수문자를 포함한 8자리 이상 15자리 이하의 비밀번호여야 합니다."
    ),
});

export default function Login() {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  // const [loginUser] = useMutation<Pick<IMutation, "loginUser">, IMutationLoginUserArgs>(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async (data: ILoginType) => {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
      });
      console.log(result);
      const accessToken = result?.data?.loginUser;
      if (!accessToken) return;
      setAccessToken(accessToken);
      console.log(accessToken);

      router.push("/");
    } catch (error) {
      Modal.error({ content: error });
      console.log(error);
    }
  };
  return (
    <LoginUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickLogin={onClickLogin}
    />
  );
}
