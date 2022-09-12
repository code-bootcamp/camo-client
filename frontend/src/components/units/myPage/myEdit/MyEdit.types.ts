import { ChangeEvent } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form/dist/types";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IDelete {
  email: string;
}

export interface IUpdate {
  nickName: string;
  password: string;
}

export interface IMyEditUI {
  isOpenDeleteModal: boolean;
  // onClickDelete: (data: IDelete) => Promise<void>;
  onClickDelete: () => Promise<void>;
  onClickOpenDeleteModal: () => void;
  onChangeDeleteUser: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdate: (data: any) => Promise<void>;
  userData: Pick<IQuery, "fetchLoginedUser"> | undefined;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
}
