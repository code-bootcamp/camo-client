import { gql } from "@apollo/client";

export const CREATE_CAFE_LIST = gql`
  mutation createCafeList($createCafeListInput: CreateCafeListInput!) {
    createCafeList(createCafeListInput: $createCafeListInput) {
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

export const UPDATE_CAFE_LIST = gql`
  mutation updateCafeList($cafeListId: String!, $updateCafeListInput: UpdateCafeListInput!) {
    updateCafeList(cafeListId: $cafeListId, updateCafeListInput: $updateCafeListInput) {
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
      updatedAt
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
