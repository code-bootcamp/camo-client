import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      id
      title
      contents
      likeCount
      createdAt
      deletedAt
      updatedAt
      zipcode
      address
      addressDetail
      tags {
        id
        name
      }
      user {
        id
        nickName
      }
      images {
        id
        url
      }
    }
  }
`;

// export const UPDATE_USED_ITEM = gql`
//   mutation updateBoard(
//     $boardId: String!
//     $userId: String!
//     $nickName: String!
//     $updateBoardInput: UpdateBoardInput!
//   ) {
//     updateBoard(
//       boardId: $boardId
//       userId: $userId
//       nickName: $nickName
//       updateBoardInput: $updateBoardInput
//     ) {
//       id
//       title
//       contents
//       likeCount
//       tags {
//         id
//         name
//       }
//       user {
//         id
//         email
//         name
//         nickName
//       }
//       image {
//         id
//         url
//       }
//     }
//   }
// `;
