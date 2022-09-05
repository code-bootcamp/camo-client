import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  query createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      id
      title
      contents
      address
      likeCount
      deletedAt
      updatedAt
      createdAt
      tag
      comment
      user
      cafeList
      image
    }
  }
`;

export const UPDATE_USED_ITEM = gql`
  mutation updateBoard(
    $boardId: String!
    $userId: String!
    $nickName: String!
    $updateBoardInput: UpdateBoardInput!
  ) {
    updateBoard(
      boardId: $boardId
      userId: $userId
      nickName: $nickName
      updateBoardInput: $updateBoardInput
    ) {
      id
      title
      contents
      address
      likeCount
    }
  }
`;
