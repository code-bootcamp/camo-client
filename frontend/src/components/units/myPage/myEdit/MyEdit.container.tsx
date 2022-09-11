import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteLoginUserArgs,
  IMutationUpdateLoginUserArgs,
} from "../../../../commons/types/generated/types";
import useAuth from "../../../commons/hooks";
import MyEditUI from "./MyEdit.presenter";
import { DELETE_LOGIN_USER, UPDATE_LOGIN_USER } from "./MyEdit.queries";
import { IDelete } from "./MyEdit.types";

export default function MyEdit() {
  useAuth();
  const router = useRouter();
  const [updateLoginUser] = useMutation<
    Pick<IMutation, "updateLoginUser">,
    IMutationUpdateLoginUserArgs
  >(UPDATE_LOGIN_USER);
  const [deleteLoginUser] = useMutation<
    Pick<IMutation, "deleteLoginUser">,
    IMutationDeleteLoginUserArgs
  >(DELETE_LOGIN_USER);

  const onClickUpdate = async (data) => {};

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [email, setEmail] = useState("");

  const onClickOpenDeleteModal = () => {
    // setIsOpenDeleteModal(true);
    setIsOpenDeleteModal((prev) => !prev);
  };

  const onChangeDeleteUser = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onClickDelete = async () => {
    try {
      await deleteLoginUser({
        variables: { email },
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
    />
  );
}
