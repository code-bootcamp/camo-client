import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      email
      name
      nickName
    }
  }
`;
