import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  // SyntheticEvent,
  useState,
} from "react";
import CommentWrite from "../write/CommentWrite.container";
import {
  DELETE_COMMENT,
  // FETCH_BOARD,
  FETCH_COMMENTS,
} from "./CommentList.queries";
import * as S from "./CommentListItem.styles";
import { ICommentListItemProps } from "./CommentList.types";
import { getDate } from "../../../../../commons/libraries/utils";

export default function CommentListItem(props: ICommentListItemProps) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const [deleteComment] = useMutation(DELETE_COMMENT);

  // const onWriteAnswer = () => {
  //   setIsNested((prev) => !prev);
  // };

  const onClickUpdate = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickDelete = async () => {
    try {
      await deleteComment({
        variables: {
          commentId: props.el?.id,
        },

        refetchQueries: [
          {
            // query: FETCH_BOARD,
            // variables: { boardID: String(router.query.communityId) },
            query: FETCH_COMMENTS,
            variables: { boardId: String(router.query.communityId) },
          },
        ],
      });

      Modal.success({ content: "댓글이 삭제되었습니다" });
    } catch (error) {
      Modal.error({ content: (error as Error).message });
    }
  };

  // const onErrorImg = (e: SyntheticEvent<HTMLImageElement>) => {
  //   (e.target as HTMLImageElement).src = "/user_icon.png";
  // };

  return (
    <>
      {!isEdit && (
        <S.Wrapper>
          <S.BodyWrapper>
            {/* {props.el.user?.images ? (
              <S.ProfileIcon src={props.el.images[0]} onError={onErrorImg} />
            ) : (
              <></>
            )} */}

            <S.WrapUserInfo>
              <S.Name>{props.el?.user?.nickName}</S.Name>
              <S.Date>{getDate(props.el?.createdAt)}</S.Date>
            </S.WrapUserInfo>

            <S.CommentWrap>
              <S.Comment>{props.el?.comment}</S.Comment>
            </S.CommentWrap>

            {props.el.user?.id === props.UserData?.fetchLoginedUser.id ? (
              <S.WrapIcon>
                <S.EditIcon title="수정하기" onClick={onClickUpdate} />
                <S.DeleteIcon title="삭제하기" onClick={onClickDelete} />

                {/* <S.AnswerIcon
                      title="대댓글 달기"
                      src="/comment/insert_comment.png"
                      onClick={onWriteAnswer}
                    /> */}
              </S.WrapIcon>
            ) : (
              <S.WrapIcon>
                {/* <S.AnswerIcon
                      title="대댓글 달기"
                      src="/comment/insert_comment.png"
                      onClick={onWriteAnswer}
                    /> */}
              </S.WrapIcon>
            )}
          </S.BodyWrapper>
        </S.Wrapper>
      )}

      <S.FooterWrapper>
        {isEdit && (
          <CommentWrite
            isEdit={true}
            setIsEdit={setIsEdit}
            el={props.el}
            // isAnswerEdit={undefined}
            // isAnswer={undefined}
          />
        )}
      </S.FooterWrapper>
    </>
  );
}
