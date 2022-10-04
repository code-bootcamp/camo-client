import { gql } from "@apollo/client";

export const FETCH_FREE_BOARD = gql`
  query fetchFreeBoard($freeBoardId: String!) {
    fetchBoard(freeBoardId: $freeBoardId) {
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

export const DELETE_FREE_BOARD = gql`
  mutation deleteFreeBoard($freeBoardId: String!) {
    deleteFreeBoard(freeBoardId: $freeBoardId)
  }
`;

export const TOGGLE_LIKE_FEED = gql`
  mutation toggleLikeFeed($freeBoardId: String!) {
    toggleLikeFeed(freeBoardId: $freeBoardId)
  }
`;

export const FETCH_FAVORITE_USER = gql`
  query fetchFavoriteUser($freeBoardId: String!) {
    fetchFavoriteUser(freeBoardId: $freeBoardId) {
      id
      isLike
      user {
        id
      }
      freeBoard {
        id
        likeCount
      }
    }
  }
`;
