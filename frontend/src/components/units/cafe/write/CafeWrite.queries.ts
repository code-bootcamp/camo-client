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
      deposit
      contents
      homepage
      remarks
      cafeListTag {
        id
        name
      }
      cafeListImage {
        id
        url
        isMain
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
      deposit
      contents
      homepage
      remarks
      createdAt
      updatedAt
      cafeListTag {
        id
        name
      }
      cafeListImage {
        id
        url
        isMain
      }
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]!) {
    uploadFile(files: $files)
  }
`;
