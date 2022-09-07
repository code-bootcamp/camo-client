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

// export const FETCH_USER = gql`
//   query fetchLoginUsers {
//     fetchLoginUsers {
//       id
//       email
//       name
//     }
//   }
// `;

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
