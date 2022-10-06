import { gql } from "@apollo/client";

export const FETCH_FREE_BOARDS_CREATED_AT = gql`
  query fetchFreeBoardsCreatedAt($page: Float = 1, $sortBy: String = "DESC") {
    fetchFreeBoardsCreatedAt(page: $page, sortBy: $sortBy) {
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

export const FETCH_FREE_BOARDS_LIKE_COUNT = gql`
  query fetchFreeBoardsLikeCount($page: Float = 1, $sortBy: String = "DESC") {
    fetchFreeBoardsLikeCount(page: $page, sortBy: $sortBy) {
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

export const FETCH_FREE_BOARDS_NUMBER = gql`
  query fetchFreeBoardsNumber {
    fetchFreeBoardsNumber
  }
`;

export const SEARCH_FREE_BOARDS = gql`
  query searchFreeBoards($search_board: String) {
    searchFreeBoards(search_board: $search_board) {
      id
      title
    }
  }
`;

export const FETCH_FREE_BOARDS = gql`
  query fetchFreeBoards($page: Float = 1) {
    fetchFreeBoards(page: $page) {
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
