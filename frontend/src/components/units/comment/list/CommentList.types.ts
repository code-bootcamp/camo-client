import { Dispatch, SetStateAction } from "react";
import { IComment, IQuery } from "../../../../commons/types/generated/types";

export interface ICommentListUIProps {
  data?: Pick<IQuery, "fetchComments">;
  onLoadMore: () => void;
}

export interface ICommentListItemProps {
  el: IComment;
  data: Pick<IQuery, "fetchLoginedUser">;
}

export interface ICommentListItemUIProps {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isOpenModal: boolean;
  el: IComment;
  onClickUpdate: () => void;
  onClickDelete: () => void;
}
