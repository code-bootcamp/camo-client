import { gql } from "@apollo/client";

export const FETCH_USER_BY_EMAIL = gql`
  query fetchUserByEmail($phoneNumber: String!) {
    fetchUserByEmail(phoneNumber: $phoneNumber) {
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
