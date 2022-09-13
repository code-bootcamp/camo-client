import { gql } from "@apollo/client";

export const FETCH_LOGINED_USER = gql`
  query fetchLoginedUser {
    fetchLoginedUser {
      id
      email
      name
      nickName
    }
  }
`;

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      email
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;
