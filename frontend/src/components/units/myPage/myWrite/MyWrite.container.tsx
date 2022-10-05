import { useQuery } from "@apollo/client";
import { IQuery, IQueryFetchMyFreeBoardArgs } from "../../../../commons/types/generated/types";
import useAuth from "../../../commons/hooks";
import { FETCH_LOGINED_USER } from "../MyPage.queries";
import MyWriteUI from "./MyWrite.presenter";
import { FETCH_USER_FREE_BOARD_NUMBER, FETCH_USER_MY_FREE_BOARD } from "./MyWrite.queries";

export default function MyWrite() {
  useAuth();
  const { data: UserData } = useQuery<Pick<IQuery, "fetchLoginedUser">>(FETCH_LOGINED_USER);
  const { data: count } = useQuery(FETCH_USER_FREE_BOARD_NUMBER, {
    variables: {
      userId: String(UserData?.fetchLoginedUser.id),
      refetchQueries: [{ query: FETCH_USER_FREE_BOARD_NUMBER }],
    },
  });
  const { data: WriteData, refetch } = useQuery<
    Pick<IQuery, "fetchMyFreeBoard">,
    IQueryFetchMyFreeBoardArgs
  >(FETCH_USER_MY_FREE_BOARD, {
    variables: {
      userId: String(UserData?.fetchLoginedUser.id),
    },
  });
  return <MyWriteUI UserData={UserData} WriteData={WriteData} count={count} refetch={refetch} />;
}
