import { gql } from "@apollo/client";

export const FETCH_COMMENTS = gql`
  query fetchComments($boardId: String!) {
    fetchComments(boardId: $boardId) {
      id
      comment
      createdAt
      board {
        id
      }
      user {
        id
        nickName
      }
    }
  }
`;

export const FETCH_LOGINED_USER = gql`
  query fetchLoginedUser {
    fetchLoginedUser {
      id
      nickName
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($commentId: String!) {
    deleteComment(commentId: $commentId)
  }
`;
