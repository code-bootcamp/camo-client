import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";

// import { getDate } from "../../../../commons/libraries/utils";
// import NestedCommentListContainer from "../../nestedComment/list/NestedCommentList.container";
// import NestedCommentWrite from "../../nestedComment/write/NestedCommentWrite.container";
import CommentWrite from "../write/CommentWrite.container";
import {
  DELETE_COMMENT,
  // FETCH_BOARD,
  FETCH_COMMENTS,
} from "./CommentList.queries";
import * as S from "./CommentListItem.styles";
import { ICommentListItemProps } from "./CommentList.types";

export default function CommentListItem(props: ICommentListItemProps) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const [deleteComment] = useMutation(DELETE_COMMENT);
  // const [isNested, setIsNested] = useState(false);

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
            // variables: { boardID: String(router.query._id) },
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

  const onErrorImg = (e: SyntheticEvent<HTMLImageElement>) => {
    (e.target as HTMLImageElement).src = "/user_icon.png";
  };

  return (
    <>
      {!isEdit && (
        <S.Wrapper>
          <S.WrapperUserInfo>
            <S.WrapInfo>
              {props.el.user?.images ? (
                <S.ProfileIcon src={props.el.images[0]} onError={onErrorImg} />
              ) : (
                <></>
              )}
              <S.WrapCommentInfo>
                <S.CommentWrap>
                  <S.Comment>{props.el?.comment}</S.Comment>
                </S.CommentWrap>

                <S.WrapUserInfo>
                  <S.Name>{props.el?.user?.nickName}</S.Name>

                  {/* <S.Date>{getDate(props.el?.createAt)}</S.Date> */}
                  <S.Date>{props.el?.createAt}</S.Date>

                  {props.el.user?.id === props.UserData?.fetchLoginedUser.id ? (
                    <S.WrapIcon>
                      <S.EditIcon
                        title="수정하기"
                        // src="/comment/create.png"
                        onClick={onClickUpdate}
                      />
                      <S.DeleteIcon
                        title="삭제하기"
                        // src="/comment/Trash.png"
                        onClick={onClickDelete}
                      />

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
                </S.WrapUserInfo>
              </S.WrapCommentInfo>
            </S.WrapInfo>
          </S.WrapperUserInfo>
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
        {/* {isNested && (
          <>
            <NestedCommentWrite isNested={true} el={props.el} setIsNested={setIsNested} />
          </>
        )} */}

        {/* <NestedCommentListContainer el={props.el} CommentData={props.CommentData} isEdit={false} /> */}
      </S.FooterWrapper>
    </>
  );
}
