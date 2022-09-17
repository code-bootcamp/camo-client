import React from "react";
import CommentListItem from "./CommentListItem";
import { ICommentListUIProps } from "./CommentList.types";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 3rem;
`;

export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
