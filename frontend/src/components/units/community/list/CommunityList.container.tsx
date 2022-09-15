import CommunityListUI from "./CommunityList.presenter";
import {
  // FETCH_BOARDS,
  FETCH_BOARDS_CREATED_AT,
  FETCH_BOARDS_NUMBER,
} from "./CommunityList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  // IQueryFetchBoardsArgs,
  IQueryFetchBoardsCreatedAtArgs,
} from "../../../../commons/types/generated/types";
import { SyntheticEvent, useState } from "react";

export default function CommunityList() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");

  // const { data, refetch, fetchMore } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
  //   FETCH_BOARDS
  // );
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardsCreatedAt">,
    IQueryFetchBoardsCreatedAtArgs
  >(FETCH_BOARDS_CREATED_AT);

  const { data: dataBoardsNumber, refetch: refetchBoardsNumber } = useQuery(FETCH_BOARDS_NUMBER);

  const lastPage = dataBoardsNumber ? Math.ceil(dataBoardsNumber?.fetchBoardsNumber / 10) : 0;

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };

  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchBoardsCreatedAt.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardsCreatedAt) {
          return {
            fetchBoardsCreatedAt: [...prev.fetchBoardsCreatedAt],
          };
        }
        return {
          fetchBoardsCreatedAt: [
            ...prev.fetchBoardsCreatedAt,
            ...fetchMoreResult.fetchBoardsCreatedAt,
          ],
        };
      },
    });
  };

  const onClickMoveToNew = () => {
    router.push("/community/new");
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
      dataBoardsNumber={dataBoardsNumber}
      onClickMoveToNew={onClickMoveToNew}
      onClickMoveToDetail={onClickMoveToDetail}
      refetchBoardsNumber={refetchBoardsNumber}
      boardsNumber={dataBoardsNumber?.fetchBoardsNumber}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      lastPage={lastPage}
      onClickPage={onClickPage}
      onFetchMore={onFetchMore}
      onErrorImg={onErrorImg}
      refetch={refetch}
    />
  );
}
