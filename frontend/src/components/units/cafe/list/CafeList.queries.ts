import { gql } from "@apollo/client";

export const FETCH_CAFE_LISTS = gql`
  query fetchCafeLists($page: Float = 1) {
    fetchCafeLists(page: $page) {
      id
      title
      zipcode
      address
      addressDetail
      phone
      startTime
      endTime
      homepage
      deposit
      contents
      createdAt
      cafeListImage {
        id
        url
      }
    }
  }
`;

export const FETCH_CAFE_LIST_NUMBERS = gql`
  query fetchCafeListNumber {
    fetchCafeListNumber
  }
`;
