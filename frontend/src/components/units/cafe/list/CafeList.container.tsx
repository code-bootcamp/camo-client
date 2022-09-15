import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import useSearch from "../../../commons/hooks/useSearch";
import CafeListUI from "./CafeList.presenter";
import { FETCH_CAFE_LISTS_CREATED_AT, FETCH_CAFE_LIST_NUMBER } from "./CafeList.queries";

export default function CafeList() {
  const router = useRouter();
  const { keyword, onChangeKeyword } = useSearch();
  const { data, fetchMore, refetch } = useQuery(FETCH_CAFE_LISTS_CREATED_AT);

  const { data: dataCafeListNumber, refetch: refetchCafeListNumber } =
    useQuery(FETCH_CAFE_LIST_NUMBER);

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
      refetch={refetch}
      onFetchMore={onFetchMore}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      dataCafeListNumber={dataCafeListNumber}
      refetchCafeListNumber={refetchCafeListNumber}
      count={dataCafeListNumber?.fetchCafeListNumber}
      onClickDetail={onClickDetail}
    />
  );
}
