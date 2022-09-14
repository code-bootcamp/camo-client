import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form/dist/types";

export interface IFindPasswordUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickSubmit: (data: any) => Promise<void>;
  onClickSendAuthNumber: () => Promise<void>;
  onClickNumberConfirm: () => Promise<void>;
}

export interface IFormPasswordUpdate {
  email: string;
  password: string;
  passwordConfirm: string;
  phoneNumberCheck: string;
}
