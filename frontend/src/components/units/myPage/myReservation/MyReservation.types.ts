import { IQuery } from "../../../../commons/types/generated/types";

export interface IMyReservationUIProps {
  UserData: Pick<IQuery, "fetchLoginedUser"> | undefined;
  ReservationData: Pick<IQuery, "fetchUserbyId"> | undefined;
  onClickCancelButton: () => void;
  count: any;
  refetch: any;
  data: any;
}
