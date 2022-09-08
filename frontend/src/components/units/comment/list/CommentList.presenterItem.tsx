import { useRouter } from "next/router";
import { useState } from "react";
import { ICommentListUIItemProps } from "./CommentList.types";

export default function CommentListUIItem(props: ICommentListUIItemProps) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
}
