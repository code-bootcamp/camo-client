import { gql } from "@apollo/client";

// export const FETCH_USER = gql`
//   query fetchUser($email: String!) {
//     fetchUser(email: $email) {
//       id
//       email
//       name
//       phoneNumber
//       nickName
//     }
//   }
// `;

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

// export const FETCH_USER = gql`
//   query fetchUsers {
//     fetchUsers {
//       id
//       email
//       name
//     }
//   }
// `;

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;
