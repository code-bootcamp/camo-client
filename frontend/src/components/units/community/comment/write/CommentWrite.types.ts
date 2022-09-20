import { ChangeEventHandler, MouseEventHandler } from "react";
import { IComment } from "../../../../../commons/types/generated/types";

export interface ICommentWriteProps {
  // isAnswerEdit: any;
  // isAnswer: any;
  isEdit: boolean;
  setIsEdit: any;
  el: IComment;
}

export interface ICommentWriteUIProps {
  handleSubmit(
    onClickUpdateComment: MouseEventHandler<HTMLButtonElement> | undefined
  ): import("react").FormEventHandler<HTMLFormElement> | undefined;
  onClickComment: MouseEventHandler<HTMLButtonElement> | undefined;
  onClickUpdateComment: MouseEventHandler<HTMLButtonElement> | undefined;
  onClickCancel: MouseEventHandler<HTMLButtonElement> | undefined;
  comment: any;
  el: any;
  onChangeContents: ChangeEventHandler<HTMLInputElement> | undefined;
  isEdit: boolean;
  // isAnswer: any;
  // isAnswerEdit: any;
}

export interface IUpdateCommentInput {
  comment?: string;
}
