import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { SyntheticEvent } from "react";
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

  const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">, IMutationDeleteBoardArgs>(
    DELETE_BOARD
  );

  const [toggleLikeFeed] = useMutation<
    Pick<IMutation, "toggleLikeFeed">,
    IMutationToggleLikeFeedArgs
  >(TOGGLE_LIKE_FEED);

  const { data: UserData } = useQuery<Pick<IQuery, "fetchLoginedUser">>(FETCH_LOGINED_USER);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.communityId },
  });

  const onClickLike = async () => {
    console.log(data?.fetchBoard.likeCount);
    try {
      await toggleLikeFeed({
        variables: {
          boardId: String(router.query.communityId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: String(router.query.communityId),
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
        console.log(error.message);
      }
    }
  };

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
      data={data}
      UserData={UserData}
      onClickDelete={onClickDelete}
      onErrorImg={onErrorImg}
      onClickUpdate={onClickUpdate}
      onClickLike={onClickLike}
    />
  );
}
