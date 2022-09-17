import CommunityListUI from "./CommunityList.presenter";
import {
  FETCH_BOARDS_CREATED_AT,
  FETCH_BOARDS_LIKE_COUNT,
  FETCH_BOARDS_NUMBER,
} from "./CommunityList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsCreatedAtArgs,
  IQueryFetchBoardsLikeCountArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent, useState } from "react";

export default function CommunityList() {
  const router = useRouter();

  const onClickMoveToNew = () => {
    router.push("/community/new");
  };

  const { refetch: CreatedAtRefetch } = useQuery<
    Pick<IQuery, "fetchBoardsCreatedAt">,
    IQueryFetchBoardsCreatedAtArgs
  >(FETCH_BOARDS_CREATED_AT, {
    fetchPolicy: "network-only",
  });

  const { refetch: LikeCountRefetch } = useQuery<
    Pick<IQuery, "fetchBoardsLikeCount">,
    IQueryFetchBoardsLikeCountArgs
  >(FETCH_BOARDS_LIKE_COUNT, {
    fetchPolicy: "network-only",
  });

  const { data: dataBoardsNumber, refetch: refetchBoardsNumber } = useQuery(FETCH_BOARDS_NUMBER);

  const lastPage = dataBoardsNumber ? Math.ceil(dataBoardsNumber?.fetchBoardsNumber / 10) : 0;

  const onClickPage = (event: any) => {
    if (alignment === "createdAt") {
      CreatedAtRefetch({ page: Number(event.target.id) });
    }
    if (alignment === "createdAt") {
      LikeCountRefetch({ page: Number(event.target.id) });
    }
  };

  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  const [alignment, setAlignment] = useState("createdAt");

  const handleChange = async (event: MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
    // console.log(typeof newAlignment);
  };

  return (
    <CommunityListUI
      onClickMoveToNew={onClickMoveToNew}
      CreatedAtRefetch={CreatedAtRefetch}
      LikeCountRefetch={LikeCountRefetch}
      dataBoardsNumber={dataBoardsNumber}
      refetchBoardsNumber={refetchBoardsNumber}
      boardsNumber={dataBoardsNumber?.fetchBoardsNumber}
      onClickPage={onClickPage}
      lastPage={lastPage}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      alignment={alignment}
      handleChange={handleChange}
    />
  );
}
