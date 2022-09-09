import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { FETCH_COMMENTS } from "../list/CommentList.queries";
import CommentWriteUI from "./CommentWrite.presenter";
import { CREATE_COMMENT, UPDATE_COMMENT } from "./CommentWrite.queries";
import { ICommentWriteProps, IUpdateCommentInput } from "./CommentWrite.types";

export default function CommentWrite(props: ICommentWriteProps) {
  const router = useRouter();

  const [comment, setComment] = useState("");

  const [createComment] = useMutation(CREATE_COMMENT);
  const [updateComment] = useMutation(UPDATE_COMMENT);

  const onChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event?.target.value);
  };
  const onClickWrite = async () => {
    if (typeof router.query.communityId !== "string" || !comment) {
      return;
    }

    try {
      await createComment({
        variables: {
          createCommentInput: {
            comment,
            boardId: String(router.query.communityId),
            // userId: String(어디서 가져와야하지?),
          },
          refetchQueries: [
            {
              query: FETCH_COMMENTS,
              variables: { boardId: router.query.communityId },
            },
          ],
        },
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
    setComment("");
  };

  const onClickUpdate = async () => {
    if (!comment) {
      alert("내용이 수정되지 않았습니다");
      return;
    }

    try {
      const updateCommentInput: IUpdateCommentInput = {};
      if (comment) updateCommentInput.comment = comment;

      if (typeof props.el?.id !== "string") return;
      await updateComment({
        variables: {
          commentId: String(props.el?.id),
          updateCommentInput,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            variables: { boardId: router.query.communityId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickCancel = () => {
    props.setIsEdit?.(false);
  };

  return (
    <CommentWriteUI
      onChangeComment={onChangeComment}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      onClickCancel={onClickCancel}
      comment={comment}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
