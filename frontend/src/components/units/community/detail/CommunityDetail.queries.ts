import { gql } from "@apollo/client";

export const FETCH_FREE_BOARD = gql`
  query fetchFreeBoard($freeBoardId: String!) {
    fetchFreeBoard(freeBoardId: $freeBoardId) {
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
  mutation deleteFreeBoard($BoardId: String!) {
    deleteFreeBoard(BoardId: $BoardId)
  }
`;

export const TOGGLE_FREE_BOARD_LIKE = gql`
  mutation toggleFreeBoardLike($freeBoardId: String!) {
    toggleFreeBoardLike(freeBoardId: $freeBoardId)
  }
`;

export const FETCH_FREE_BOARD_LIKE = gql`
  query fetchFreeBoardLike($freeBoardId: String!) {
    fetchFreeBoardLike(freeBoardId: $freeBoardId) {
      id
      like
      user {
        id
      }
    }
  }
`;
