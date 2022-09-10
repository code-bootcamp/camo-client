import { ChangeEvent } from "react";

export interface IDelete {
  email: string;
}

export interface IMyEditUI {
  isOpenDeleteModal: boolean;
  // onClickDelete: (data: IDelete) => Promise<void>;
  onClickDelete: () => Promise<void>;
  onClickOpenDeleteModal: () => void;
  onChangeDeleteUser: (event: ChangeEvent<HTMLInputElement>) => void;
}
