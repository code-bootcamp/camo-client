import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $name: String!
    $password: String!
    $phoneNumber: String!
    $nickName: String!
  ) {
    createUser(
      email: $email
      name: $name
      password: $password
      phoneNumber: $phoneNumber
      nickName: $nickName
    ) {
      id
    }
  }
`;
