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
