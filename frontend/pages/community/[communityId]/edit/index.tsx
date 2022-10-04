import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardArgs } from "../../../../src/commons/types/generated/types";
import CommunityWrite from "../../../../src/components/units/community/write/CommunityWrite.container";

export const FETCH_FREE_BOARD = gql`
  query fetchFreeBoard($freeBoardId: String!) {
    fetchFreeBoard(freeBoardId: $freeBoardId) {
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
      like {
        id
        isLike
        user {
          id
          nickName
        }
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

  const { data } = useQuery<Pick<IQuery, "fetchFreeBoard">, IQueryFetchBoardArgs>(
    FETCH_FREE_BOARD,
    {
      variables: { freeBoardId: String(router.query.communityId) },
    }
  );

  return <CommunityWrite isEdit={true} data={data} />;
}
