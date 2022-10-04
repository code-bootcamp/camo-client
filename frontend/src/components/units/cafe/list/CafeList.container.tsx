import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import useSearch from "../../../commons/hooks/useSearch";
import { TOGGLE_FAVORITE_CAFES } from "../detail/CafeDetail.queries";
import CafeListUI from "./CafeList.presenter";
import {
  FETCH_CAFE_LISTS_CREATED_AT,
  FETCH_CAFE_LISTS_FAVORITE_CAFE,
  FETCH_CAFE_LIST_NUMBER,
} from "./CafeList.queries";
import { message } from "antd";
import {
  IQuery,
  IQueryFetchCafeListsCreatedAtArgs,
  IQueryFetchCafeListsFavoriteCafeArgs,
} from "../../../../commons/types/generated/types";

export default function CafeList() {
  const router = useRouter();
  const { keyword, onChangeKeyword } = useSearch();
  const { data, fetchMore, refetch } = useQuery(FETCH_CAFE_LISTS_CREATED_AT);
  const [toggleFavoriteCafes] = useMutation(TOGGLE_FAVORITE_CAFES);

  const { data: dataCafeListNumber, refetch: refetchCafeListNumber } =
    useQuery(FETCH_CAFE_LIST_NUMBER);

  const [alignment, setAlignment] = useState("createdAt");

  const { refetch: refetchCreatedAt } = useQuery<
    Pick<IQuery, "fetchBoardsCreatedAt">,
    IQueryFetchCafeListsCreatedAtArgs
  >(FETCH_CAFE_LISTS_CREATED_AT, {
    fetchPolicy: "network-only",
  });

  const { refetch: refetchLikeCount } = useQuery<
    Pick<IQuery, "fetchBoardsLikeCount">,
    IQueryFetchCafeListsFavoriteCafeArgs
  >(FETCH_CAFE_LISTS_FAVORITE_CAFE, {
    fetchPolicy: "network-only",
  });
  const handleChange = async (event: MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  const onClickPage = (event: any) => {
    if (alignment === "createdAt") {
      refetchCreatedAt({ page: Number(event.target.id) });
    }
    if (alignment !== "createdAt") {
      refetchLikeCount({ page: Number(event.target.id) });
    }
  };

  const onClickFavorite = async (event: MouseEvent<HTMLElement>) => {
    try {
      const result = await toggleFavoriteCafes({
        variables: {
          cafeBoardId: event.currentTarget.id,
          // cafeBoardId: router.query.cafeId as string,
        },
        refetchQueries: [{ query: FETCH_CAFE_LISTS_CREATED_AT }],
      });
      console.log("리저트", result);
      message.success("찜 성공");
    } catch (error) {
      // message.error("찜하기 실패");
    }
  };

  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      // variables: { page: Math.ceil(data.fetchCafeListsCreatedAt.page / 10) + 1 },

      variables: { page: Math.ceil(data.fetchCafeListsCreatedAt.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchCafeListsCreatedAt) {
          return {
            fetchCafeListsCreatedAt: [...prev.fetchCafeListsCreatedAt],
          };
        }
        return {
          fetchCafeListsCreatedAt: [
            ...prev.fetchCafeListsCreatedAt,
            ...fetchMoreResult.fetchCafeListsCreatedAt,
          ],
        };
      },
    });
  };

  const onClickDetail = (el: any) => (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/cafe/${el.id}`);
  };

  return (
    <CafeListUI
      data={data}
      onFetchMore={onFetchMore}
      onClickDetail={onClickDetail}
      //
      refetch={refetch}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      dataCafeListNumber={dataCafeListNumber}
      refetchCafeListNumber={refetchCafeListNumber}
      count={dataCafeListNumber?.fetchCafeListNumber}
      onClickFavorite={onClickFavorite}
      //
      refetchCreatedAt={refetchCreatedAt}
      refetchLikeCount={refetchLikeCount}
      onClickPage={onClickPage}
      alignment={alignment}
      handleChange={handleChange}
    />
  );
}
