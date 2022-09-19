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

// export const FETCH_CAFE_LISTS = gql`
//   query fetchCafeLists($page: Float = 1) {
//     fetchCafeLists(page: $page) {
//       id
//       title
//       zipcode
//       address
//       addressDetail
//       phone
//       startTime
//       endTime
//       homepage
//       deposit
//       contents
//       createdAt
//       remarks
//       cafeListTag {
//         id
//         name
//       }
//       cafeListImage {
//         id
//         url
//       }
//     }
//   }
// `;

export const FETCH_CAFE_LIST_NUMBER = gql`
  query fetchCafeListNumber {
    fetchCafeListNumber
  }
`;

export const SEARCH_CAFE_LIST = gql`
  query searchCafeList($search_cafelist: String) {
    searchCafeList(search_cafelist: $search_cafelist) {
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
      remarks
      createdAt
      cafeListTag {
        id
        name
      }
    }
  }
`;
