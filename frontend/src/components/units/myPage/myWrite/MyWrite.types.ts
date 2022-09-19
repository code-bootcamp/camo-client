import { IQuery } from "../../../../commons/types/generated/types";

export interface IMyWriteUIProps {
  UserData: Pick<IQuery, "fetchLoginedUser"> | undefined;
  WriteData: Pick<IQuery, "fetchUserbyId"> | undefined;
  count: any;
  refetch: any;
}
