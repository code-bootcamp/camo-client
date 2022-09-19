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

export const FETCH_USER_MY_BOARD_NUMBER = gql`
  query fetchUsermyBoardNumber($userId: String!) {
    fetchUsermyBoardNumber(userId: $userId)
  }
`;

export const FETCH_USER_MY_BOARD = gql`
  query fetchUserMyBoard($userId: String!, $page: Float = 1) {
    fetchUserMyBoard(userId: $userId, page: $page) {
      id
      board {
        id
        title
        contents
      }
    }
  }
`;
