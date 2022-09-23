import { gql } from "@apollo/client";

export const SEARCH_BOARDS = gql`
  query searchBoards($search_Board: String) {
    searchBoards(search_Board: $search_Board) {
      id
      title
      contents
    }
  }
`;
