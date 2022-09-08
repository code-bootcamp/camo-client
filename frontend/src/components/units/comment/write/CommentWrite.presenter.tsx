import { ICommentWriteUIPros } from "./CommentWrite.types";
import * as S from "./CommentWrite.styles";

export default function CommentWriteUI(props: ICommentWriteUIPros) {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>댓글</S.Title>
      </S.TitleWrapper>
      <S.BodyWrapper>
        <S.Comment
          maxLength={100}
          onChange={props.onChangeComment}
          placeholder="댓글 작성"
          value={props.isEdit ? props.comment || props.el?.comment : props.comment}
        />
        <S.CommentLength>
          {(props.comment ? props.comment.length : props.el?.comment.length) || 0}
          /100
        </S.CommentLength>
        <S.Btn onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}>
          {props.isEdit ? "수정" : "등록"}
        </S.Btn>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
