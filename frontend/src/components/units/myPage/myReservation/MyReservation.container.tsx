import { useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUserbyIdArgs } from "../../../../commons/types/generated/types";
import useAuth from "../../../commons/hooks";
import { FETCH_LOGINED_USER } from "../MyPage.queries";
import MyReservationUI from "./MyReservation.presenter";
import { FETCH_USER_BY_ID } from "./MyReservation.queries";

export default function MyReservation() {
  useAuth();

  const { data: UserData } = useQuery<Pick<IQuery, "fetchLoginedUser">>(FETCH_LOGINED_USER);
  const { data: ReservationData } = useQuery<
    Pick<IQuery, "fetchUserbyId">,
    IQueryFetchUserbyIdArgs
  >(FETCH_USER_BY_ID, {
    variables: {
      userId: String(UserData?.fetchLoginedUser.id),
      // userId: "4cfb4d7f-d3d7-4686-acfd-f76df7f46dd8",
    },
  });
  // console.log(ReservationData);
  return <MyReservationUI UserData={UserData} ReservationData={ReservationData} />;
}
