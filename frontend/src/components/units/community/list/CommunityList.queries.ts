import { gql } from "@apollo/client";

// export const FETCH_BOARDS = gql`
//   query fetchBoards($page: Float = 1) {
//     fetchBoards(page: $page) {
//       id
//       title
//       likeCount
//       createdAt
//       tags {
//         id
//         name
//       }
//       user {
//         id
//         nickName
//       }
//       images {
//         url
//         id
//       }
//     }
//   }
// `;

export const FETCH_BOARDS_CREATED_AT = gql`
  query fetchBoardsCreatedAt($page: Float = 1, $sortBy: String = "DESC") {
    fetchBoardsCreatedAt(page: $page, sortBy: $sortBy) {
      id
      title
      likeCount
      createdAt
      tags {
        id
        name
      }
      user {
        id
        nickName
      }
      images {
        url
        id
      }
    }
  }
`;

export const FETCH_BOARDS_NUMBER = gql`
  query fetchBoardsNumber {
    fetchBoardsNumber
  }
`;
