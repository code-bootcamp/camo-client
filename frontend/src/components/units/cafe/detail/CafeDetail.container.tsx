import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_CAFE_LISTS } from "../list/CafeList.queries";
import CafeDetailUI from "./CafeDetail.presenter";
import { DELETE_CAFE_LIST, FETCH_CAFE_LIST } from "./CafeDetail.queries";

export default function CafeDetail() {
  const router = useRouter();
  const [deleteCafeList] = useMutation(DELETE_CAFE_LIST);

  const { data } = useQuery(FETCH_CAFE_LIST, {
    variables: { boardId: router.query.cafeId },
  });
  console.log(data);
  console.log(`데이타"${data}`);

  //   const onClickUpdate = () => {
  //     router.push(`/product/${router.query.detail}/edit`)
  // }

  const onClickDelete = async () => {
    try {
      await deleteCafeList({
        variables: {
          boardId: router.query.cafeId,
        },
        refetchQueries: [
          {
            query: FETCH_CAFE_LISTS,
          },
        ],
      });
      router.push("/community");
      alert("삭제 완료");
    } catch (error) {
      alert("삭제 실패");
    }
  };
  return <CafeDetailUI data={data} onClickDelete={onClickDelete} />;
}
