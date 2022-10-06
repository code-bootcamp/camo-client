import { gql } from "@apollo/client";

export const CREATE_FREE_BOARD = gql`
  mutation createFreeBoard($createFreeBoardInput: createFreeBoardInput!) {
    createFreeBoard(createFreeBoardInput: $createFreeBoardInput) {
      id
      title
      contents
      likeCount
      zipcode
      address
      addressDetail
      tags {
        id
        name
      }
      user {
        nickName
      }
      images {
        id
        url
      }
    }
  }
`;

export const UPDATE_FREE_BOARD = gql`
  mutation updateFreeBoard(
    $freeBoardId: String!
    $nickName: String!
    $updateFreeBoardInput: updateFreeBoardInput!
  ) {
    updateFreeBoard(
      freeBoardId: $freeBoardId
      nickName: $nickName
      updateFreeBoardInput: $updateFreeBoardInput
    ) {
      id
      title
      contents
      zipcode
      address
      addressDetail
      # tags {
      #   id
      #   name
      # }
      images {
        id
        url
      }
    }
  }
`;

export const FETCH_FREE_BOARD = gql`
  query fetchFreeBoard($freeBoardId: String!) {
    fetchFreeBoard(freeBoardId: $freeBoardId) {
      id
      title
      contents
      likeCount
      createdAt
      zipcode
      address
      addressDetail
      tags {
        id
        name
      }
      user {
        id
        name
        nickName
      }
      images {
        id
        url
      }
      comment {
        id
        comment
        createdAt
      }
    }
  }
`;
