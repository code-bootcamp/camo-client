import { gql } from "@apollo/client";

export const CREATE_CAFE_BOARD = gql`
  mutation createCafeBoard($createCafeBoardInput: CreateCafeBoardInput!) {
    createCafeBoard(createCafeBoardInput: $createCafeBoardInput) {
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
      tags {
        id
        name
      }
      images {
        id
        url
        isMain
      }
    }
  }
`;

export const UPDATE_CAFE_BOARD = gql`
  mutation updateCafeBoard($cafeBoardId: String!, $updateCafeBoardInput: UpdateCafeBoardInput!) {
    updateCafeBoard(cafeBoardId: $cafeBoardId, updateCafeBoardInput: $updateCafeBoardInput) {
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
      tags {
        id
        name
      }
      images {
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
