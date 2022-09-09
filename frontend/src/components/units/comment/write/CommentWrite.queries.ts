import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createComment($createCommentInput: CreateCommentInput!) {
    createComment(createCommentInput: $createCommentInput) {
      id
      comment
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
