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
