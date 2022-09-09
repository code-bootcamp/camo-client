import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { DELETE_COMMENT, FETCH_COMMENTS } from "./CommentList.queries";
import { ICommentListItemProps } from "./CommentList.types";
import CommentListItemUI from "./CommentListItem.presenter";

export default function CommentListItem(props: ICommentListItemProps) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [deleteComment] = useMutation(DELETE_COMMENT);

  const onClickUpdate = () => {
    if (props.el.user?.id !== props.data.fetchLoginedUser.id) {
      setIsOpenModal(true);
    }
    if (props.el.user?.id === props.data.fetchLoginedUser.id) {
      setIsEdit(true);
    }
  };
  const onClickDelete = async () => {
    if (props.el.user?.id !== props.data.fetchLoginedUser.id) {
      setIsOpenModal(true);
    }
    if (props.el.user?.id === props.data.fetchLoginedUser.id) {
      try {
        await deleteComment({
          variables: {
            commentId: props.el?.id,
          },
          refetchQueries: [
            {
              query: FETCH_COMMENTS,
              variables: { boardId: router.query.communityId },
            },
          ],
        });
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    }
  };

  // const onClickCancel = () => {
  //   setIsOpenModal(false);
  // };

  return (
    <>
      <CommentListItemUI
        isEdit={isEdit}
        isOpenModal={isOpenModal}
        onClickUpdate={onClickUpdate}
        onClickDelete={onClickDelete}
      />
    </>
  );
}
