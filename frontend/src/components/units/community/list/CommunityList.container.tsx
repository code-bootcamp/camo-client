import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommunityListUI from "./CommunityList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_NUMBERS } from "./CommunityList.queries";

export default function CommunityList() {
  const router = useRouter();

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_NUMBERS);
  const lastPage = dataBoardsCount ? Math.ceil(dataBoardsCount?.fetchBoardsNumber / 10) : 0;

  const { data, fetchMore, refetch } = useQuery(FETCH_BOARDS);

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };

  const onFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  const onClickDetail = (el: any) => (event) => {
    router.push(`/community/${el.communityId}`);
  };

  return (
    <CommunityListUI
      data={data}
      refetch={refetch}
      dataBoardsCount={dataBoardsCount}
      lastPage={lastPage}
      onClickPage={onClickPage}
      onFetchMore={onFetchMore}
      onClickDetail={onClickDetail}
    />
  );
}
