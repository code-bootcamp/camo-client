import { useQuery } from "@apollo/client";
import { useEffect } from "react";
// import { useRouter } from "next/router";
import { IQuery, IQueryFetchCommentsArgs } from "../../../../commons/types/generated/types";
import CommentListUI from "./CommentList.presenter";
import { FETCH_COMMENTS } from "./CommentList.queries";

export default function CommentList() {
  // const router = useRouter();

  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchComments">,
    IQueryFetchCommentsArgs
  >(FETCH_COMMENTS, {
    variables: {
      // boardId: String(router.query.communityId),
      boardId: String("fb3fc446-ea4e-4b5d-ab69-cb0d3a2271f4"),
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      // variables: { page: Math.ceil(data?.fetchComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchComments) return { fetchComments: [...prev.fetchComments] };
        return {
          fetchComments: [...prev.fetchComments, ...fetchMoreResult.fetchComments],
        };
      },
    });
  };

  return (
    <>
      <CommentListUI data={data} onLoadMore={onLoadMore} />
    </>
  );
}
