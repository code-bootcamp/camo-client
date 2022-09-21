import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import React, { FormEventHandler, MouseEventHandler, useState } from "react";
import CommentWriteUI from "./CommentWrite.presenter";
import {
  CREATE_COMMENT,
  // FETCH_BOARD,
  FETCH_COMMENTS,
  FETCH_LOGINED_USER,
  UPDATE_COMMENT,
} from "./CommentWrite.queries";
import {
  // ICommentWriteProps,
  IUpdateCommentInput,
} from "./CommentWrite.types";
// import { ICommentWriteProps } from "./CommentWrite.types";

export default function CommentWrite(props: any) {
  const router = useRouter();
  const [comment, setComment] = useState("");
  const onChangeContents = (event: any) => {
    setComment(event.target.value);
  };

  const { data } = useQuery(FETCH_LOGINED_USER);

  // 등록
  const [createComment] = useMutation(CREATE_COMMENT);
  const onClickComment = async () => {
    if (!comment) return;
    if (!data?.fetchLoginedUser.id) Modal.error({ content: "로그인 해주세요🔒" });
    if (comment) {
      try {
        await createComment({
          variables: {
            createCommentInput: {
              comment,
              boardId: router.query.communityId,
            },
          },

          refetchQueries: [
            {
              // query: FETCH_BOARD,
              query: FETCH_COMMENTS,
              variables: { boardId: String(router.query.communityId) },
            },
          ],
        });

        // alert("댓글을 등록했습니다.");
        // Modal.success({ content: "댓글을 등록했습니다✏️" });
      } catch (error) {
        // alert(`댓글 등록에 실패했습니다 ${error.message}`);
        if (error instanceof Error) {
          // Modal.error({ content: error.message })
          // console.log(error.message);
        }
      }
    }
    setComment("");
  };

  // 수정
  const [updateComment] = useMutation(UPDATE_COMMENT);
  const onClickUpdateComment = async () => {
    if (!comment) {
      Modal.error({ content: "내용이 수정되지 않았습니다🔏" });
      return;
    }
    try {
      const updateCommentInput: IUpdateCommentInput = {};
      if (comment) updateCommentInput.comment = comment;

      await updateComment({
        variables: {
          userId: String(props.el.user?.id),
          commentId: String(props.el?.id),
          updateCommentInput,
          // : {
          //   comment,
          //   id: props.el?.id,
          // },
        },

        refetchQueries: [
          {
            // query: FETCH_BOARD,
            query: FETCH_COMMENTS,
            variables: { boardId: router.query.communityId },
          },
        ],
      });
      props.setIsEdit?.(false);
      // Modal.success({ content: "댓글을 수정합니다📝" });
    } catch (error: any) {
      Modal.error({ content: "댓글 수정에 실패했습니다🔏" });
    }
  };
  const onClickCancel = () => {
    props.setIsEdit?.(false);
  };

  return (
    <CommentWriteUI
      onClickComment={onClickComment}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      el={props.el}
      comment={comment}
      onClickUpdateComment={onClickUpdateComment}
      onClickCancel={onClickCancel}
      // isAnswer={props.isAnswer}
      // isAnswerEdit={props.isAnswerEdit}
      handleSubmit={function (
        onClickUpdateComment: MouseEventHandler<HTMLDivElement> | undefined
      ): FormEventHandler<HTMLFormElement> | undefined {
        throw new Error("Function not implemented.");
      }}
    />
  );
}
