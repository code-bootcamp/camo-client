import { gql } from "@apollo/client";

export const UPDATE_USER_PASSWORD = gql`
  mutation updateUserPassword($email: String!, $password: String!) {
    updateUserPassword(email: $email, password: $password) {
      email
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
