import React from "react";
import * as S from "./CommentWrite.styles";
import { ICommentWriteUIProps } from "./CommentWrite.types";
export default function CommentWriteUI(props: ICommentWriteUIProps) {
  return (
    // <form
    //   onSubmit={
    //     props.isEdit
    //       ? props.handleSubmit(props.onClickUpdateComment)
    //       : props.handleSubmit(props.onClickRegisterComment)
    //   }
    // >
    <S.Wrapper>
      <S.WrapTitle>
        <S.CommentIcon src="/comment/insert_comment.png" />
        <S.CommentTitle>{props.isEdit ? "댓글 수정" : "댓글"}</S.CommentTitle>
      </S.WrapTitle>
      <S.WrapContents>
        {props.isEdit ? (
          <S.ContentsInput
            type="textArea"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
            defaultValue={props.isEdit ? props.comment || props.el?.comment : props.comment}
            maxLength={100}
          />
        ) : (
          <S.ContentsInput
            type="textArea"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
            value={props.isEdit ? props.comment || props.el?.comment : props.comment}
            maxLength={100}
          />
        )}
        <S.Wraplength>
          <S.Length>{props.comment.length}/100</S.Length>

          <S.CommentButton
            onClick={props.isEdit ? props.onClickUpdateComment : props.onClickComment}
          >
            {props.isEdit ? "수정" : "등록"}
          </S.CommentButton>
          {props.isEdit && <S.CommentButton onClick={props.onClickCancel}>취소</S.CommentButton>}
        </S.Wraplength>
      </S.WrapContents>
    </S.Wrapper>
    // </form>
  );
}
