import { gql } from "@apollo/client";

export const FETCH_USER_BY_ID = gql`
  query fetchUserById($userId: String!) {
    fetchUserbyId(userId: $userId) {
      id
      email
      name
      cafeName
      board {
        id
        title
        contents
      }
    }
  }
`;

export const FETCH_USER_FREE_BOARD_NUMBER = gql`
  query fetchUserFreeBoardNumber($userId: String!) {
    fetchUserFreeBoardNumber(userId: $userId)
  }
`;

export const FETCH_USER_MY_FREE_BOARD = gql`
  query fetchMyFreeBoard($userId: String!, $page: Float = 1) {
    fetchMyFreeBoard(userId: $userId, page: $page) {
      id
      title
      contents
      createdAt
    }
  }
`;
