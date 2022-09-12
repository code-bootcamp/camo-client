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
      images {
        id
        url
      }
    }
  }
`;

export const FETCH_BOARDS_NUMBERS = gql`
  query fetchBoardsNumber {
    fetchBoardsNumber
  }
`;
