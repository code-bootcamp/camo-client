import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IComment } from "../../../../commons/types/generated/types";

export interface ICommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IComment;
}

export interface ICommentWriteUIPros {
  onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWrite: () => void;
  onClickUpdate: () => void;
  onClickCancel: () => void;
  comment: string;
  isEdit?: boolean;
  el?: IComment;
}

export interface IUpdateCommentInput {
  comment?: string;
}
