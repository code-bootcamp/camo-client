import CommunityListUI from "./CommunityList.presenter";
import {
  FETCH_BOARDS_CREATED_AT,
  FETCH_BOARDS_LIKE_COUNT,
  FETCH_BOARDS_NUMBER,
  SEARCH_BOARDS,
} from "./CommunityList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsCreatedAtArgs,
  IQueryFetchBoardsLikeCountArgs,
  IQuerySearchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent, useState } from "react";

export default function CommunityList() {
  const router = useRouter();

  const onClickMoveToNew = () => {
    router.push("/community/new");
  };

  const { refetch: refetchCreatedAt } = useQuery<
    Pick<IQuery, "fetchBoardsCreatedAt">,
    IQueryFetchBoardsCreatedAtArgs
  >(FETCH_BOARDS_CREATED_AT, {
    fetchPolicy: "network-only",
  });

  const { refetch: refetchLikeCount } = useQuery<
    Pick<IQuery, "fetchBoardsLikeCount">,
    IQueryFetchBoardsLikeCountArgs
  >(FETCH_BOARDS_LIKE_COUNT, {
    fetchPolicy: "network-only",
  });

  const { data: dataBoardsNumber, refetch: refetchBoardsNumber } = useQuery(FETCH_BOARDS_NUMBER);

  const lastPage = dataBoardsNumber ? Math.ceil(dataBoardsNumber?.fetchBoardsNumber / 10) : 0;

  const onClickPage = (event: any) => {
    if (alignment === "createdAt") {
      refetchCreatedAt({ page: Number(event.target.id) });
    }
    if (alignment !== "createdAt") {
      refetchLikeCount({ page: Number(event.target.id) });
    }
  };

  const { data: dataSearch, refetch: refetchSearch } = useQuery<
    Pick<IQuery, "searchBoards">,
    IQuerySearchBoardsArgs
  >(SEARCH_BOARDS);

  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  const [alignment, setAlignment] = useState("createdAt");

  const handleChange = async (event: MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <CommunityListUI
      onClickMoveToNew={onClickMoveToNew}
      refetchCreatedAt={refetchCreatedAt}
      refetchLikeCount={refetchLikeCount}
      dataBoardsNumber={dataBoardsNumber}
      refetchBoardsNumber={refetchBoardsNumber}
      boardsNumber={dataBoardsNumber}
      onClickPage={onClickPage}
      lastPage={lastPage}
      dataSearch={dataSearch}
      refetchSearch={refetchSearch}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      alignment={alignment}
      handleChange={handleChange}
    />
  );
}
