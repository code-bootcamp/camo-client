import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Float) {
    fetchBoards(page: $page) {
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
      images {
        id
        url
      }
    }
  }
`;
