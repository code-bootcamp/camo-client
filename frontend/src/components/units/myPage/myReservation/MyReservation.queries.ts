import { gql } from "@apollo/client";

export const FETCH_USER_BY_ID = gql`
  query fetchUserById($userId: String!) {
    fetchUserbyId(userId: $userId) {
      id
      email
      name
      cafeName
      cafeReservation {
        id
        title
        deposit
        reservedPeople
        reservationDate
        startTime
        endTime
        deposit
      }
    }
  }
`;

export const FETCH_MY_CAFE_RESERVATION = gql`
  query fetchMyCafeReservation($userId: String!, $page: Float = 1) {
    fetchMyCafeReservation(userId: $userId, page: $page) {
      id
      title
      reservedPeople
      reservationDate
      startTime
      endTime
      deposit
      cafeList {
        cafeListImage {
          id
          url
        }
      }
    }
  }
`;

export const FETCH_CAFE_RESERVATION_NUMBER = gql`
  query fetchCafeReservationNumber($userId: String!) {
    fetchCafeReservationNumber(userId: $userId)
  }
`;
