import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
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

export const FETCH_BOARDS = gql`
  query fetchBoards($search: String) {
    fetchBoards(search: $search) {
      id
      title
      contents
      address
      likeCount
      tag
      createdAt
      comment
      user {
        id
        email
        name
      }
      image
    }
  }
`;
