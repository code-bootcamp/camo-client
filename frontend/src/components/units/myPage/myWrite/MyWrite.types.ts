import { IQuery } from "../../../../commons/types/generated/types";

export interface IMyWriteUIProps {
  UserData: Pick<IQuery, "fetchLoginedUser"> | undefined;
  WriteData: any;
  count: any;
  refetch: any;
}
