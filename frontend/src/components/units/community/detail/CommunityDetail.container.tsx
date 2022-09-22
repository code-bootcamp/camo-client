import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { SyntheticEvent, useEffect, useState } from "react";
// import { useRecoilState } from "recoil";
// import { userInfoState } from "../../../../commons/store";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationToggleLikeFeedArgs,
  IQuery,
  IQueryFetchFavoriteUserArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARDS_CREATED_AT } from "../list/CommunityList.queries";
import CommunityDetailUI from "./CommunityDetail.presenter";
import {
  DELETE_BOARD,
  FETCH_BOARD,
  FETCH_FAVORITE_USER,
  FETCH_LOGINED_USER,
  TOGGLE_LIKE_FEED,
} from "./CommunityDetail.queries";

export default function CommunityDetail() {
  // const [userInfo] = useRecoilState(userInfoState);
  const router = useRouter();

  const [like, setLike] = useState(false);
  // const [like, setLike] = useRecoilState(likeState);

  // console.log("좋아요", like);

  const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">, IMutationDeleteBoardArgs>(
    DELETE_BOARD
  );

  const [toggleLikeFeed] = useMutation<
    Pick<IMutation, "toggleLikeFeed">,
    IMutationToggleLikeFeedArgs
  >(TOGGLE_LIKE_FEED);

  const { data: dataFavoriteUser } = useQuery<
    Pick<IQuery, "fetchFavoriteUser">,
    IQueryFetchFavoriteUserArgs
  >(FETCH_FAVORITE_USER, {
    variables: { boardId: String(router.query.communityId) },
  });

  const { data: dataUser } = useQuery<Pick<IQuery, "fetchLoginedUser">>(FETCH_LOGINED_USER);

  const { data: dataBoard, refetch } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.communityId) },
  });

  console.log("fetchLoginedUser", dataUser?.fetchLoginedUser.id);
  console.log("User", dataFavoriteUser?.fetchFavoriteUser[0]?.user?.id);
  // console.log("User.id", dataFavoriteUser?.fetchFavoriteUser.user?.id);

  const onClickLike = async () => {
    try {
      const result = await toggleLikeFeed({
        variables: {
          boardId: String(router.query.communityId),
        },
      });
      refetch();
      setLike(Boolean(result.data?.toggleLikeFeed));

      if (!result.data?.toggleLikeFeed) {
        Modal.success({ content: "좋아요를 취소합니다🥲" });
      } else {
        Modal.success({ content: "이 게시글 좋네요😊" });
      }
      console.log(like);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    dataFavoriteUser?.fetchFavoriteUser?.filter(
      (el) => el.user?.id === dataUser?.fetchLoginedUser.id
    ).length === 1
      ? // .map((el) => true)
        setLike(true)
      : setLike(false);
  }, [dataUser?.fetchLoginedUser]);

  // const onClickLike = async () => {
  //   try {
  //     const result = await toggleLikeFeed({
  //       variables: {
  //         boardId: String(router.query.communityId),
  //       },
  //     });
  //     // setLike(Boolean(result.data?.toggleLikeFeed));
  //     // refetch();
  //     if (result.data?.toggleLikeFeed === true) {
  //       Modal.success({ content: "이 게시글 좋네요😊" });
  //       setLike((prev) => !prev);
  //       refetch();
  //     }
  //     if (result.data?.toggleLikeFeed === false) {
  //       Modal.success({ content: "좋아요를 취소합니다🥲" });
  //       setLike((prev) => !prev);
  //       refetch();
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       Modal.error({ content: error.message });
  //     }
  //   }
  // };

  // const wpswkd = dataFavoriteUser?.fetchFavoriteUser.user
  //   ?.filter((el: any) => el.id === dataUser?.fetchLoginedUser.id)
  //   .map((el: any) => true);

  // useEffect(() => {
  //   dataFavoriteUser?.fetchFavoriteUser.user?.filter(
  //     (el: any) => el.id === dataUser?.fetchLoginedUser.id
  //   )
  //     ? setLike(true)
  //     : setLike(false);
  // }, [dataFavoriteUser?.fetchFavoriteUser.user]);

  // useEffect(() => {
  //   dataFavoriteUser?.fetchFavoriteUser[0]?.user?.id === dataUser?.fetchLoginedUser.id && !undefined
  //     ? setLike(true)
  //     : setLike(false);
  // }, [dataBoard]);

  // useEffect(() => {
  //   console.log(dataFavoriteUser?.fetchFavoriteUser.map((el) => el.id));
  //   if (
  //     dataFavoriteUser?.fetchFavoriteUser
  //       .map((el) => el.id)
  //       .includes(router.query.communityId as string)
  //   )
  //     setLike(true);
  // }, [dataFavoriteUser]);

  const onClickUpdate = () => {
    router.push(`/community/${router.query.communityId}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: String(router.query.communityId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS_CREATED_AT,
          },
        ],
      });
      Modal.success({ content: "게시글이 삭제되었습니다" });
      router.push("/community");
    } catch (error) {
      Modal.error({ content: (error as Error).message });
    }
  };

  const onErrorImg = (e: SyntheticEvent<HTMLImageElement>) => {
    (e.target as HTMLImageElement).src =
      "https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYwfHxjYWZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";
  };

  return (
    <CommunityDetailUI
      like={like}
      dataBoard={dataBoard}
      dataUser={dataUser}
      onClickDelete={onClickDelete}
      onErrorImg={onErrorImg}
      onClickUpdate={onClickUpdate}
      onClickLike={onClickLike}
      dataFavoriteUser={dataFavoriteUser}
    />
  );
}
