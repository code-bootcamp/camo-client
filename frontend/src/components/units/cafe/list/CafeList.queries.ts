import { gql } from "@apollo/client";

export const FETCH_CAFE_LISTS_CREATED_AT = gql`
  query fetchCafeListsCreatedAt($page: Float = 1, $sortBy: String = "DESC") {
    fetchCafeListsCreatedAt(page: $page, sortBy: $sortBy) {
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
      cafeListTag {
        id
        name
      }
      cafeListImage {
        id
        url
      }
    }
  }
`;

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
      cafeListTag {
        id
        name
      }
      cafeListImage {
        id
        url
      }
    }
  }
`;

export const FETCH_CAFE_LIST_NUMBER = gql`
  query fetchCafeListNumber {
    fetchCafeListNumber
  }
`;
