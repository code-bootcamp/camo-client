import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import CafeListUI from "./CafeList.presenter";
import { FETCH_CAFE_LISTS } from "./CafeList.queries";

export default function CafeList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_CAFE_LISTS);

  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchCafeLists.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchCafeLists) {
          return {
            fetchCafeLists: [...prev.fetchCafeLists],
          };
        }
        return {
          fetchCafeLists: [...prev.fetchCafeLists, ...fetchMoreResult.fetchCafeLists],
        };
      },
    });
  };

  const onClickDetail = (el: any) => (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/cafe/${el.id}`);
  };

  return <CafeListUI data={data} onFetchMore={onFetchMore} onClickDetail={onClickDetail} />;
}
