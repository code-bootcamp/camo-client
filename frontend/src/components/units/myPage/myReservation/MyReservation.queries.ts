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
