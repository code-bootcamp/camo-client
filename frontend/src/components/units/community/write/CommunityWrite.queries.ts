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
        nickName
      }
      images {
        id
        url
      }
    }
  }
`;

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
