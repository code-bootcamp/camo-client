import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { message } from "antd";

import { FETCH_CAFE_LISTS_CREATED_AT } from "../list/CafeList.queries";
import CafeDetailUI from "./CafeDetail.presenter";
import { DELETE_CAFE_LIST, FETCH_CAFE_LIST, TOGGLE_FAVORITE_CAFES } from "./CafeDetail.queries";
import { useState } from "react";

export default function CafeDetail() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [deleteCafeList] = useMutation(DELETE_CAFE_LIST);
  const [toggleFavoriteCafes] = useMutation(TOGGLE_FAVORITE_CAFES);

  const { data } = useQuery(FETCH_CAFE_LIST, {
    variables: { cafeListId: router.query.cafeId },
  });
  console.log(data);
  console.log(`데이타"${data}`);

  //
  // 이미지클릭시 보기
  // const [content, setContent] = useState();
  // const handleClickButton = (e: any) => {
  //   const { name } = e.target;
  //   setContent(name);
  //   console.log("네임은", name);
  // };

  // const selectComponent = {
  //   first: data?.fetchCafeList.cafeListImage[0]?.url,
  //   second: data?.fetchCafeList.cafeListImage[1]?.url,
  //   third: data?.fetchCafeList.cafeListImage[2]?.url,
  // };
  // console.log(content);
  //

  // 선호작 등록하기
  // const { data: likeData, refetch } = useQuery(FETCH_CAFE_LIST);
  // const HeartList = likeData?.fetchNovelLikeInUser.map(
  //   (el: Iel) => el.novel.id
  // );
  // const NovelId = router.query._id;
  // const Heart = HeartList?.includes(NovelId);

  // const [isSubmitting, setIsSubmitting] = useState(false);

  const onClickFavorite = async () => {
    try {
      await toggleFavoriteCafes({
        variables: {
          cafeListId: router.query.cafeId as string,
        },
        refetchQueries: [{ query: FETCH_CAFE_LISTS_CREATED_AT }],
      });
      message.success("찜 성공");
    } catch (error) {
      message.error("찜하기 실패");
    }
    setIsActive((prev) => !prev);
  };

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
  return (
    <CafeDetailUI
      data={data}
      isActive={isActive}
      onClickFavorite={onClickFavorite}
      onClickDelete={onClickDelete}
      // handleClickButton={handleClickButton}
      // name={name}
      // content={content}
      // selectComponent={selectComponent}
    />
  );
}
