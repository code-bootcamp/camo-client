import CommunityListUI from "./CommunityLikeCountList.presenter";
import { FETCH_BOARDS_LIKE_COUNT } from "../CommunityList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsLikeCountArgs,
} from "../../../../../commons/types/generated/types";
import { SyntheticEvent, useState } from "react";

export default function CommunityLikeCountList() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardsLikeCount">,
    IQueryFetchBoardsLikeCountArgs
  >(FETCH_BOARDS_LIKE_COUNT, {
    fetchPolicy: "network-only",
  });

  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchBoardsLikeCount.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardsLikeCount) {
          return {
            fetchBoardsLikeCount: [...prev.fetchBoardsLikeCount],
          };
        }
        return {
          fetchBoardsLikeCount: [
            ...prev.fetchBoardsLikeCount,
            ...fetchMoreResult.fetchBoardsLikeCount,
          ],
        };
      },
    });
  };

  const onClickMoveToDetail = (el: any) => (event: any) => {
    router.push(`/community/${el.id}`);
  };

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  const onErrorImg = (e: SyntheticEvent<HTMLImageElement>) => {
    (e.target as HTMLImageElement).src =
      "https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYwfHxjYWZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";
  };

  return (
    <CommunityListUI
      data={data}
      onClickMoveToDetail={onClickMoveToDetail}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      onFetchMore={onFetchMore}
      onErrorImg={onErrorImg}
    />
  );
}
