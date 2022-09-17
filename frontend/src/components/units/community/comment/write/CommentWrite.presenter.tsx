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
      <S.BodyWrapper>
        <S.WrapTitle>
          {props.isEdit ? (
            <></>
          ) : (
            <>
              <S.CommentIcon src="/comment/insert_comment.png" />
              <S.CommentTitle>댓글</S.CommentTitle>
            </>
          )}
        </S.WrapTitle>
        <S.WrapContents>
          {props.isEdit ? (
            <S.ContentsInput
              type="textArea"
              placeholder="댓글을 입력하세요"
              onChange={props.onChangeContents}
              defaultValue={props.isEdit ? props.comment || props.el?.comment : props.comment}
              maxLength={100}
            />
          ) : (
            <S.ContentsInput
              type="textArea"
              placeholder="댓글을 입력하세요"
              onChange={props.onChangeContents}
              value={props.isEdit ? props.comment || props.el?.comment : props.comment}
              maxLength={100}
            />
          )}
          <S.WrapLength>
            <S.Length>{props.comment.length}/100</S.Length>

            <S.CommentButton
              onClick={props.isEdit ? props.onClickUpdateComment : props.onClickComment}
            >
              {props.isEdit ? "수정" : "댓글 남기기"}
            </S.CommentButton>
            {props.isEdit && <S.CancelButton onClick={props.onClickCancel}>취소</S.CancelButton>}
          </S.WrapLength>
        </S.WrapContents>
      </S.BodyWrapper>
    </S.Wrapper>
    // </form>
  );
}
