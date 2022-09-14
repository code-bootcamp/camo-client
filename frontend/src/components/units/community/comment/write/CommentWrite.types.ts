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
    onClickUpdateComment: MouseEventHandler<HTMLDivElement> | undefined
  ): import("react").FormEventHandler<HTMLFormElement> | undefined;
  onClickComment: MouseEventHandler<HTMLDivElement> | undefined;
  onClickUpdateComment: MouseEventHandler<HTMLDivElement> | undefined;
  onClickCancel: MouseEventHandler<HTMLDivElement> | undefined;
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
