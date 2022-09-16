import { gql } from "@apollo/client";

export const FETCH_RESERVATION = gql`
  query fetchCafeList($cafeListId: String!) {
    fetchCafeList(cafeListId: $cafeListId) {
      id
      cafeReservation {
        id
        reservationDate
        startTime
        endTime
      }
    }
  }
`;

export const CREATE_PAYMENT = gql`
  mutation createPayment($impUid: String!, $amount: Int!) {
    createPayment(impUid: $impUid, amount: $amount) {
      impUid
      paymentDate
      paymentAmount
    }
  }
`;

export const CREATE_CAFE_RESERVATION = gql`
  mutation createCafeReservation($createReservationInput: CreateReservationInput!) {
    createCafeReservation(createReservationInput: $createReservationInput) {
      id
      title
    }
  }
`;

// 결제 확인
export const FETCH_LOGINED_USER = gql`
  query fetchLoginedUser {
    fetchLoginedUser {
      id
      email
      name
      phoneNumber
    }
  }
`;

export const FETCH_CAFE_LIST = gql`
  query fetchCafeList($cafeListId: String!) {
    fetchCafeList(cafeListId: $cafeListId) {
      id
      title
      deposit
      user {
        id
        name
      }
    }
  }
`;
