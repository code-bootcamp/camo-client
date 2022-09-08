import { IComment } from "../../../../commons/types/generated/types";

export interface ICommentListUIProps {
  data?: Array<IComment>;
  onLoadMore: () => void;
}

export interface ICommentListUIItemProps {
  el: IComment;
}
