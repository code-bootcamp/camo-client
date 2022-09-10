import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchLoginedUser {
    fetchLoginedUser {
      id
      email
      name
      nickName
    }
  }
`;
