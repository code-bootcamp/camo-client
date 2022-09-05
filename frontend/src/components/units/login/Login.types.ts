import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form/dist/types";

export interface ILoginUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickLogin: (data: any) => Promise<void>;
}

export interface ILoginType {
  email?: string;
  password?: string;
}
