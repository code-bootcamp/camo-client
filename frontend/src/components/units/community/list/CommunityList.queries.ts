import { gql } from "@apollo/client";

export const FETCH_BOARDS_CREATED_AT = gql`
  query fetchBoardsCreatedAt($page: Float = 1, $sortBy: String = "DESC") {
    fetchBoardsCreatedAt(page: $page, sortBy: $sortBy) {
      id
      title
      likeCount
      createdAt
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

export const FETCH_BOARDS_LIKE_COUNT = gql`
  query fetchBoardsLikeCount($page: Float = 1, $sortBy: String = "DESC") {
    fetchBoardsLikeCount(page: $page, sortBy: $sortBy) {
      id
      title
      likeCount
      createdAt
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

export const SEARCH_BOARDS = gql`
  query searchBoards($search_board: String) {
    searchBoards(search_board: $search_board)
  }
`;
