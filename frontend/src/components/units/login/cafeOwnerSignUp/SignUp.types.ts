import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form/dist/types";

export interface IFormSignUp {
  email?: string;
  name?: string;
  nickname?: string;
  password?: string;
  passwordConfirm?: string;
  phone?: string;
  phoneNumberCheck?: string;
}

export interface ISignUpUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickSubmit: (data: any) => void;
  onClickCancel: () => void;
  onClickEmailCheck: () => void;
  onClickSendAuthNumber: () => void;
  onClickNumberConfirm: () => void;
}
