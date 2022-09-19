import { gql } from "@apollo/client";

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

export const FETCH_LOGINED_USER = gql`
  query fetchLoginedUser {
    fetchLoginedUser {
      id
      nickName
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: String!) {
    deleteBoard(boardId: $boardId)
  }
`;

export const TOGGLE_LIKE_FEED = gql`
  mutation toggleLikeFeed($boardId: String!) {
    toggleLikeFeed(boardId: $boardId)
  }
`;

export const FETCH_FAVORITE_USER = gql`
  query fetchFavoriteUser($boardId: String!) {
    fetchFavoriteUser(boardId: $boardId) {
      id
      isLike
      user {
        id
      }
      board {
        id
        likeCount
      }
    }
  }
`;
