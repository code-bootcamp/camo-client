import { gql } from "@apollo/client";

export const FETCH_CAFE_LIST = gql`
  query fetchCafeList($cafeListId: String!) {
    fetchCafeList(cafeListId: $cafeListId) {
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
      cafeListTag {
        id
        name
      }
      cafeListImage {
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

export const DELETE_CAFE_LIST = gql`
  mutation deleteCafeList($cafeListId: String!) {
    deleteCafeList(cafeListId: $cafeListId)
  }
`;

export const TOGGLE_FAVORITE_CAFES = gql`
  mutation toggleFavoriteCafes($cafeListId: String!) {
    toggleFavoriteCafes(cafeListId: $cafeListId)
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
