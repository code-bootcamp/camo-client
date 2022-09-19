import { useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUserbyIdArgs } from "../../../../commons/types/generated/types";
import useAuth from "../../../commons/hooks";
import { FETCH_LOGINED_USER } from "../MyPage.queries";
import MyReservationUI from "./MyReservation.presenter";
import {
  FETCH_CAFE_RESERVATION_NUMBER,
  FETCH_MY_CAFE_RESERVATION,
  FETCH_USER_BY_ID,
} from "./MyReservation.queries";

export default function MyReservation() {
  useAuth();

  const { data: UserData } = useQuery<Pick<IQuery, "fetchLoginedUser">>(FETCH_LOGINED_USER);
  const { data: ReservationData } = useQuery<
    Pick<IQuery, "fetchUserbyId">,
    IQueryFetchUserbyIdArgs
  >(FETCH_USER_BY_ID, {
    variables: {
      userId: String(UserData?.fetchLoginedUser.id),
    },
  });
  const { data, refetch } = useQuery(FETCH_MY_CAFE_RESERVATION, {
    variables: {
      userId: String(UserData?.fetchLoginedUser.id),
    },
  });

  const { data: count } = useQuery(FETCH_CAFE_RESERVATION_NUMBER, {
    variables: {
      userId: String(UserData?.fetchLoginedUser.id),
    },
  });

  const onClickCancelButton = () => {
    alert("예약 취소는 카페 사장님과 문의하세요.");
  };
  return (
    <MyReservationUI
      UserData={UserData}
      ReservationData={ReservationData}
      onClickCancelButton={onClickCancelButton}
      count={count}
      refetch={refetch}
      data={data}
    />
  );
}
