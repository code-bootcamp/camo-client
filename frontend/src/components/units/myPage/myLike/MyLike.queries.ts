import { gql } from "@apollo/client";

export const FETCH_USER_FAVORITE_CAFE = gql`
  query fetchUserFavoriteCafe($userId: String!, $page: Float = 1) {
    fetchUserFavoriteCafe(userId: $userId, page: $page) {
      id
      isLike
      cafeList {
        id
        title
        address
        cafeListImage {
          id
          url
        }
      }
    }
  }
`;

export const FETCH_FAVORITE_CAFE_NUMBER = gql`
  query fetchFavoriteCafeNumber($userId: String!) {
    fetchFavoriteCafeNumber(userId: $userId)
  }
`;
