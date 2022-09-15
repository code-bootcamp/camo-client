import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Float = 1) {
    fetchBoards(page: $page) {
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
        nickName
      }
      images {
        url
        id
      }
    }
  }
`;

export const FETCH_BOARDS_NUMBER = gql`
  query fetchBoardsNumber {
    fetchBoardsNumber
  }
`;
