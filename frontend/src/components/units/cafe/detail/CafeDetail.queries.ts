import { gql } from "@apollo/client";

export const FETCH_CAFE_BOARD = gql`
  query fetchCafeBoard($cafeBoardId: String!) {
    fetchCafeBoard(cafeBoardId: $cafeBoardId) {
      id
      title
      contents
      zipcode
      address
      addressDetail
      phone
      startTime
      endTime
      homepage
      deposit
      createdAt
      remarks
      tags {
        id
        name
      }
      images {
        id
        url
      }
      user {
        id
        name
      }
    }
  }
`;

export const DELETE_CAFE_BOARD = gql`
  mutation deleteCafeBoard($cafeBoardId: String!) {
    deleteCafeBoard(cafeBoardId: $cafeBoardId)
  }
`;

export const TOGGLE_FAVORITE_CAFES = gql`
  mutation toggleFavoriteCafes($cafeBoardId: String!) {
    toggleFavoriteCafes(cafeBoardId: $cafeBoardId)
  }
`;

export const FETCH_USER_FAVORITE_CAFE = gql`
  mutation fetchUserFavoriteCafe {
    id
    isLike
    user
    cafeList
  }
`;

export const FETCH_LOGINED_USER = gql`
  query fetchLoginedUser {
    fetchLoginedUser {
      id
    }
  }
`;
