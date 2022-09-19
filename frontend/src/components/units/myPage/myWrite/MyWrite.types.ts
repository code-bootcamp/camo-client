
export interface IMyWriteUIProps {
  UserData: Pick<IQuery, "fetchLoginedUser"> | undefined;
  WriteData: Pick<IQuery, "fetchUserbyId"> | undefined;
}
