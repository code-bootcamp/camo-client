import { gql } from "@apollo/client";

export const UPDATE_LOGIN_USER = gql`
  mutation updateLoginUser($updateUserInput: UpdateUserInput!) {
    updateLoginUser(updateUserInput: $updateUserInput) {
      email
      name
      nickName
    }
  }
`;

export const DELETE_LOGIN_USER = gql`
  mutation deleteLoginUser($password: String!) {
    deleteLoginUser(password: $password)
  }
`;

export const FETCH_USER = gql`
  query fetchLoginedUser {
    fetchLoginedUser {
      id
      email
      name
      phoneNumber
      nickName
    }
  }
`;
