import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_CAFE_LISTS_CREATED_AT } from "../list/CafeList.queries";
import { UPDATE_CAFE_LIST } from "../write/CafeWrite.queries";
import CafeDetailUI from "./CafeDetail.presenter";
import { DELETE_CAFE_LIST, FETCH_CAFE_LIST } from "./CafeDetail.queries";

export default function CafeDetail() {
  const router = useRouter();

  const [updateCafeList] = useMutation(UPDATE_CAFE_LIST);
  const [deleteCafeList] = useMutation(DELETE_CAFE_LIST);

  const { data } = useQuery(FETCH_CAFE_LIST, {
    variables: { cafeListId: router.query.cafeId },
  });
  console.log(data);
  console.log(`데이타"${data}`);

  const onClickUpdate = async (data: any) => {
    try {
      const result = await updateCafeList({
        variables: {
          cafeListId: router.query.cafeId as string,
          updateCafeListInput: {
            title: data.title,
            zipcode: data.zipcode,
            address: data.address,
            addressDetail: data.addressDetail,
            phone: data.phone,
            startTime: data.startTime,
            endtTime: data.endTime,
            homepage: data.homepage,
            deposit: Number(data.deposit),
            contents: data.contents,
            images: [...fileUrls],
            tags: data.tags.split(","),
          },
        },
      });
      router.push(`/product/${result.data?.updateCafeList.cafeListId}`);
      alert("수정 성공");
    } catch (error) {}
  };

  const onClickDelete = async () => {
    try {
      await deleteCafeList({
        variables: {
          cafeListId: router.query.cafeId,
        },
        refetchQueries: [
          {
            query: FETCH_CAFE_LISTS_CREATED_AT,
          },
        ],
      });
      router.push("/community");
      alert("삭제 완료");
    } catch (error) {
      alert("삭제 실패");
    }
  };
  return <CafeDetailUI data={data} onClickUpdate={onClickUpdate} onClickDelete={onClickDelete} />;
}
