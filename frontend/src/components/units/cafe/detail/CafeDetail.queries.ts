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
      cafeListImage {
        id
        url
      }
    }
  }
`;

export const DELETE_CAFE_LIST = gql`
  mutation deleteCafeList($cafeListId: String!) {
    deleteCafeList(cafeListId: $cafeListId)
  }
`;
