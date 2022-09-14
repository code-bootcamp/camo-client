import {
  // Dispatch,
  MouseEventHandler,
  // SetStateAction
} from "react";

export interface ICommentListUIProps {
  UserData: any;
  CommentData: any;
  data: any;
  // onLoadMore: (page: number) => void;
}

export interface ICommentListItemProps {
  UserData: any;
  CommentData: any;
  data: any;
  onClickLikeComment: MouseEventHandler<HTMLImageElement> | undefined;
  el: any;
  // setIsNested?: Dispatch<SetStateAction<boolean>>;
  // isNested?: boolean;
}
