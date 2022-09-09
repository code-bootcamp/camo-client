import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchCommentsArgs } from "../../../../commons/types/generated/types";
import CommentListUI from "./CommentList.presenter";
import { FETCH_COMMENTS } from "./CommentList.queries";

export default function CommentList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchComments">, IQueryFetchCommentsArgs>(
    FETCH_COMMENTS,
    {
      variables: {
        boardId: String(router.query.communityId),
      },
    }
  );

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchComments.length / 10) + 1 },
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
