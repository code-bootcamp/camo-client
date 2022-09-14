import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import CommentListUI from "./CommentList.presenter";
import { FETCH_COMMENTS, FETCH_LOGINED_USER } from "./CommentList.queries";

export default function CommentList() {
  const router = useRouter();
  const { data: UserData } = useQuery(FETCH_LOGINED_USER);
  const { data: CommentData } = useQuery(FETCH_COMMENTS, {
    variables: { boardId: router.query.communityId },
  });

  return (
    <CommentListUI
      CommentData={CommentData}
      UserData={UserData}
      // onLoadMore={function (page: number) {
      //   throw new Error("Function not implemented.");
      // }}
      data={undefined}
    />
  );
}
