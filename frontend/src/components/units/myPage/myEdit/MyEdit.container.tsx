import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteLoginUserArgs,
  IMutationUpdateLoginUserArgs,
  IQuery,
  IQueryFetchUserArgs,
  IUser,
} from "../../../../commons/types/generated/types";
import useAuth from "../../../commons/hooks";
import MyEditUI from "./MyEdit.presenter";
import { DELETE_LOGIN_USER, FETCH_USER, UPDATE_LOGIN_USER } from "./MyEdit.queries";
import { IDelete, IUpdate } from "./MyEdit.types";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  nickName: yup
    .string()
    .required("닉네임을 입력해주세요")
    .max(20, "닉네임이 20자를 넘어서는 안됩니다."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .matches(
      /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,15}$/,
      "영문, 숫자, 특수문자를 포함한 8자리 이상 15자리 이하의 비밀번호여야 합니다."
    ),
  passwordConfirm: yup.string().oneOf([yup.ref("password"), null], "패스워드와 일치하지 않습니다."),
});

export default function MyEdit() {
  useAuth();

  const { data: userData } = useQuery<Pick<IQuery, "fetchLoginedUser">>(FETCH_USER);
  const [updateLoginUser] = useMutation<
    Pick<IMutation, "updateLoginUser">,
    IMutationUpdateLoginUserArgs
  >(UPDATE_LOGIN_USER);

  const [deleteLoginUser] = useMutation<
    Pick<IMutation, "deleteLoginUser">,
    IMutationDeleteLoginUserArgs
  >(DELETE_LOGIN_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // const onClickUpdate = async (data: IUpdate) => {
  const onClickUpdate = async (data: any) => {
    try {
      const result2 = await updateLoginUser({
        variables: { updateUserInput: { ...data } },
      });
      console.log(result2);
    } catch (error) {
      console.log(error);
    }
  };

  // 모달로 삭제 보류 -> 페이지로 변경 (0911)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");

  const onClickOpenDeleteModal = () => {
    setIsOpenDeleteModal((prev) => !prev);
  };

  const onChangeDeleteUser = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickDelete = async () => {
    try {
      await deleteLoginUser({
        variables: { password },
      });
    } catch (error) {
      // 확인용
      console.log(error);
      alert(error);
    }
  };
  return (
    <MyEditUI
      isOpenDeleteModal={isOpenDeleteModal}
      onClickDelete={onClickDelete}
      onClickOpenDeleteModal={onClickOpenDeleteModal}
      onChangeDeleteUser={onChangeDeleteUser}
      onClickUpdate={onClickUpdate}
      userData={userData}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
