import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import useSearch from "../../../commons/hooks/useSearch";
import { TOGGLE_FAVORITE_CAFES } from "../detail/CafeDetail.queries";
import CafeListUI from "./CafeList.presenter";
import { FETCH_CAFE_LISTS_CREATED_AT, FETCH_CAFE_LIST_NUMBER } from "./CafeList.queries";
import { message } from "antd";

export default function CafeList() {
  const router = useRouter();
  const { keyword, onChangeKeyword } = useSearch();
  const { data, fetchMore, refetch } = useQuery(FETCH_CAFE_LISTS_CREATED_AT);
  const [toggleFavoriteCafes] = useMutation(TOGGLE_FAVORITE_CAFES);

  const { data: dataCafeListNumber, refetch: refetchCafeListNumber } =
    useQuery(FETCH_CAFE_LIST_NUMBER);

  const onClickFavorite = async (event: MouseEvent<HTMLElement>) => {
    try {
      const result = await toggleFavoriteCafes({
        variables: {
          cafeListId: event.currentTarget.id,
          // cafeListId: router.query.cafeId as string,
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
    />
  );
}
