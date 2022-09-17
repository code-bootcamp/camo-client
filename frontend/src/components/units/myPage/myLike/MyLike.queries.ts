import { gql } from "@apollo/client";

export const FETCH_USER_FAVORITE_CAFE = gql`
  query fetchUserFavoriteCafe {
    fetchUserFavoriteCafe {
      id
      isLike
      cafeList {
        id
        title
        address
      }
    }
  }
`;
