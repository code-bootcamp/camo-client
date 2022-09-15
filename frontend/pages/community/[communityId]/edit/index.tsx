import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardArgs } from "../../../../src/commons/types/generated/types";
import BoardWrite from "../../../../src/components/units/community/write/CommunityWrite.container";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      title
      contents
      likeCount
      createdAt
      zipcode
      address
      addressDetail
      tags {
        id
        name
      }
      favoriteBoard {
        id
        isLike
      }
      user {
        id
        name
        nickName
      }
      images {
        id
        url
      }
      comment {
        id
        comment
        createdAt
      }
    }
  }
`;

export default function BoardsEditPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: String(router.query.communityId) },
  });

  return <BoardWrite isEdit={true} data={data} />;
}
