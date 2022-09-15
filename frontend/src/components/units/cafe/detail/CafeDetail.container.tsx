import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { message } from "antd";

import { FETCH_CAFE_LISTS_CREATED_AT } from "../list/CafeList.queries";
import CafeDetailUI from "./CafeDetail.presenter";
import { DELETE_CAFE_LIST, FETCH_CAFE_LIST } from "./CafeDetail.queries";

export default function CafeDetail() {
  const router = useRouter();

  const [deleteCafeList] = useMutation(DELETE_CAFE_LIST);

  const { data } = useQuery(FETCH_CAFE_LIST, {
    variables: { cafeListId: router.query.cafeId },
  });
  console.log(data);
  console.log(`데이타"${data}`);

  const onClickDelete = async () => {
    try {
      await deleteCafeList({
        variables: {
          cafeListId: router.query.cafeId as string,
        },

        refetchQueries: [
          {
            query: FETCH_CAFE_LISTS_CREATED_AT,
          },
        ],
      });

      router.push("/cafe");
      alert("삭제 완료");
    } catch (error) {
      message.error("삭제에 실패했습니다!");
    }
  };
  return <CafeDetailUI data={data} onClickDelete={onClickDelete} />;
}
