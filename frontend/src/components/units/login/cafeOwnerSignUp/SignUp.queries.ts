import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createCafeOwner($CreateCafeOwnerInput: CreateCafeOwnerInput!) {
    createCafeOwner(CreateCafeOwnerInput: $CreateCafeOwnerInput) {
      id
    }
  }
`;

export const SEND_SMS = gql`
  mutation sendTokenToSMS($phoneNumber: String!) {
    sendTokenToSMS(phoneNumber: $phoneNumber)
  }
`;

export const CHECK_SMS = gql`
  mutation checkSMSTokenValid($phoneNumber: String!, $SMSToken: String!) {
    checkSMSTokenValid(phoneNumber: $phoneNumber, SMSToken: $SMSToken)
  }
`;

export const CHECK_USER_EMAIL = gql`
  query checkUserEmail($email: String!) {
    checkUserEmail(email: $email)
  }
`;
