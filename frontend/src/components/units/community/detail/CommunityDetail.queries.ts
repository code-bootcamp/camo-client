import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      title
      contents
      likeCount
      createdAt
      tags {
        id
        name
      }
      favoriteBoard {
        id
      }
      user {
        id
        name
      }
      image {
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
