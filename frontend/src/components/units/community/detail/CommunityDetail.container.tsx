import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";
import { FETCH_BOARDS } from "../list/CommunityList.queries";
import CommunityDetailUI from "./CommunityDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./CommunityDetail.queries";

export default function CommunityDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: String(router.query.communityId) },
  });
  console.log(`데이타"${data}`);

  //   const onClickUpdate = () => {
  //     router.push(`/product/${router.query.detail}/edit`)
  // }

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: router.query.communityId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
          },
        ],
      });
      router.push("/community");
      alert("삭제 완료");
    } catch (error) {
      alert("삭제 실패");
    }
  };
  return <CommunityDetailUI data={data} onClickDelete={onClickDelete} />;
}
