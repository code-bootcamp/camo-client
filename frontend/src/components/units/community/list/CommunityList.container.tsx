import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommunityListUI from "./CommunityList.presenter";
import { FETCH_BOARDS } from "./CommunityList.queries";

export default function CommunityList() {
  const router = useRouter();

  // const [isActive, setIsActive] = useRecoilState(isWatchActiveState)

  const { data, fetchMore } = useQuery(FETCH_BOARDS);

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

  return <CommunityListUI data={data} onFetchMore={onFetchMore} onClickDetail={onClickDetail} />;
}
