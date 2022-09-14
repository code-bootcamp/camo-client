import React from "react";
import CommentListItem from "./CommentListItem";
import { ICommentListUIProps } from "./CommentList.types";
export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <>
      {props.CommentData?.fetchComments?.map((el: { id: React.Key | null | undefined }) => (
        <CommentListItem
          key={el.id}
          el={el}
          CommentData={props.CommentData}
          UserData={props.UserData}
          onClickLikeComment={undefined}
          data={undefined}
        />
      ))}
    </>
  );
}
