import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { message } from "antd";

import { FETCH_CAFE_LISTS_CREATED_AT } from "../list/CafeList.queries";
import CafeDetailUI from "./CafeDetail.presenter";
import {
  DELETE_CAFE_LIST,
  FETCH_CAFE_LIST,
  FETCH_LOGINED_USER,
  TOGGLE_FAVORITE_CAFES,
} from "./CafeDetail.queries";
import { MouseEvent, SyntheticEvent, useState } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export default function CafeDetail(props: any) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  // const [like, setLike] = useState(false);

  const [deleteCafeList] = useMutation(DELETE_CAFE_LIST);
  const [toggleFavoriteCafes] = useMutation(TOGGLE_FAVORITE_CAFES);
  const { data: userData } = useQuery<Pick<IQuery, "fetchLoginedUser">>(FETCH_LOGINED_USER);

  const onClickUpdate = () => {
    router.push(`/cafe/${router.query.cafeId}/edit`);
  };

  // refetch 추가
  const { data, refetch } = useQuery(FETCH_CAFE_LIST, {
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

  const onClickFavorite = async (event: MouseEvent<HTMLElement>) => {
    try {
      const result = await toggleFavoriteCafes({
        variables: {
          cafeListId: event.currentTarget.id,
          // cafeListId: router.query.cafeId as string,
        },
        // 리패치 퀘리랑 리패치 차이?
        refetchQueries: [{ query: FETCH_CAFE_LISTS_CREATED_AT }],
      });
      console.log("리저트", result);

      refetch();
      console.log("toggleFavoriteCafes", result.data?.toggleFavoriteCafes);
      setIsActive((prev) => !prev);
      message.success("찜 성공");
    } catch (error) {
      // message.error("찜하기 실패");
    }
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

  const onErrorImg = (e: SyntheticEvent<HTMLImageElement>) => {
    (e.target as HTMLImageElement).src =
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  };

  return (
    <CafeDetailUI
      data={data}
      userData={userData}
      isActive={isActive}
      onClickFavorite={onClickFavorite}
      onClickDelete={onClickDelete}
      onErrorImg={onErrorImg}
      onClickUpdate={onClickUpdate}
      // handleClickButton={handleClickButton}
      // name={name}
      // content={content}
      // selectComponent={selectComponent}
    />
  );
}
