import { useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUserMyBoardArgs } from "../../../../commons/types/generated/types";
import useAuth from "../../../commons/hooks";
import { FETCH_LOGINED_USER } from "../MyPage.queries";
import MyWriteUI from "./MyWrite.presenter";
import { FETCH_USER_MY_BOARD, FETCH_USER_MY_BOARD_NUMBER } from "./MyWrite.queries";

export default function MyWrite() {
  useAuth();
  const { data: UserData } = useQuery<Pick<IQuery, "fetchLoginedUser">>(FETCH_LOGINED_USER);
  const { data: count } = useQuery(FETCH_USER_MY_BOARD_NUMBER, {
    variables: {
      userId: String(UserData?.fetchLoginedUser.id),
    },
  });
  const { data: WriteData, refetch } = useQuery<
    Pick<IQuery, "fetchUserMyBoard">,
    IQueryFetchUserMyBoardArgs
  >(FETCH_USER_MY_BOARD, {
    variables: {
      userId: String(UserData?.fetchLoginedUser.id),
    },
  });
  return <MyWriteUI UserData={UserData} WriteData={WriteData} count={count} refetch={refetch} />;
}
