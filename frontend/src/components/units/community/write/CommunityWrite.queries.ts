import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      id
      title
      contents
      likeCount
      zipcode
      address
      addressDetail
      tags {
        id
        name
      }
      user {
        # id
        nickName
      }
      images {
        id
        url
      }
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $boardId: String!
    $nickName: String!
    $updateBoardInput: UpdateBoardInput!
  ) {
    updateBoard(boardId: $boardId, nickName: $nickName, updateBoardInput: $updateBoardInput) {
      id
      title
      contents
      likeCount
      zipcode
      address
      addressDetail
      tags {
        id
        name
      }
      user {
        id
        nickName
      }
      images {
        id
        url
      }
    }
  }
`;
