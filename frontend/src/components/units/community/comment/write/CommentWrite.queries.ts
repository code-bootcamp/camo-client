import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createComment($createCommentInput: CreateCommentInput!) {
    createComment(createCommentInput: $createCommentInput) {
      id
      comment
      user {
        id
      }
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment(
    $userId: String!
    $commentId: String!
    $updateCommentInput: UpdateCommentInput!
  ) {
    updateComment(userId: $userId, commentId: $commentId, updateCommentInput: $updateCommentInput) {
      id
    }
  }
`;

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
