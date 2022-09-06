import { useQuery } from "@apollo/client";
import { FETCH_USER } from "../MyPage.queries";
import MyReservationUI from "./MyReservation.presenter";

export default function MyReservation() {
  const { data } = useQuery(FETCH_USER);
  return <MyReservationUI data={data} />;
}
