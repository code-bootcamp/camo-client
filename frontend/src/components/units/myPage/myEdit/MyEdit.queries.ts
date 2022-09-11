import { gql } from "@apollo/client";

export const UPDATE_LOGIN_USER = gql`
  mutation updateLoginUser($updateUserInput: UpdateUserInput!) {
    updateLoginUser(updateLoginUser: $updateLoginUser) {
      id
      password
      nickName
    }
  }
`;

export const DELETE_LOGIN_USER = gql`
  mutation deleteLoginUser($email: String!) {
    deleteLoginUser(email: $email)
  }
`;
