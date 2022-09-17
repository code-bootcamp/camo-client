import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  SyntheticEvent,
  // useEffect,
  useState,
} from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationToggleLikeFeedArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARDS_CREATED_AT } from "../list/CommunityList.queries";
import CommunityDetailUI from "./CommunityDetail.presenter";
import {
  DELETE_BOARD,
  FETCH_BOARD,
  FETCH_LOGINED_USER,
  TOGGLE_LIKE_FEED,
} from "./CommunityDetail.queries";

export default function CommunityDetail() {
  const router = useRouter();

  const [like, setLike] = useState(false);
  // console.log(like, setLike);

  const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">, IMutationDeleteBoardArgs>(
    DELETE_BOARD
  );

  const [toggleLikeFeed] = useMutation<
    Pick<IMutation, "toggleLikeFeed">,
    IMutationToggleLikeFeedArgs
  >(TOGGLE_LIKE_FEED);

  const { data: UserData } = useQuery<Pick<IQuery, "fetchLoginedUser">>(FETCH_LOGINED_USER);

  const { data: BoardData, refetch } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.communityId },
  });

  const onClickLike = async () => {
    console.log("likeCount", BoardData?.fetchBoard.likeCount);
    try {
      const result = await toggleLikeFeed({
        variables: {
          boardId: String(router.query.communityId),
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_BOARD,
        //     variables: {
        //       boardId: String(router.query.communityId),
        //     },
        //   },
        // ],
      });
      refetch();
      console.log("toggleLikeFeed", result.data?.toggleLikeFeed);
      setLike((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
        console.log(error.message);
      }
    }
  };

  const onClickLike2 = async () => {
    // refetch();
    await setLike((prev) => !prev);
  };

  // useEffect(() => {
  //   BoardData?.fetchBoard.favoriteBoard.user.filter((el: IFetchBoardEl) => el.id === UserData?.fetchLoginedUser.id )
  //     ? setLike(true)
  //     : setLike(false);
  // }, [BoardData?.fetchBoard.favoriteBoard.user]);

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
      BoardData={BoardData}
      UserData={UserData}
      onClickDelete={onClickDelete}
      onErrorImg={onErrorImg}
      onClickUpdate={onClickUpdate}
      onClickLike={onClickLike}
      onClickLike2={onClickLike2}
    />
  );
}
