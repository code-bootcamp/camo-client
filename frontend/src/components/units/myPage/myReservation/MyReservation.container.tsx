import { useQuery } from "@apollo/client";
import useAuth from "../../../commons/hooks";
import { FETCH_USER } from "../MyPage.queries";
import MyReservationUI from "./MyReservation.presenter";

export default function MyReservation() {
  useAuth();
  const { data } = useQuery(FETCH_USER);
  return <MyReservationUI data={data} />;
}
