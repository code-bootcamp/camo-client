import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form/dist/types";

export interface IFindIdUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickSubmit: (data: any) => void;
  onClickSendAuthNumber: () => void;
  onClickNumberConfirm: () => void;
}
