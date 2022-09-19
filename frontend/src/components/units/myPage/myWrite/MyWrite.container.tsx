import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import useAuth from "../../../commons/hooks";
import { FETCH_LOGINED_USER } from "../MyPage.queries";
import MyWriteUI from "./MyWrite.presenter";
import { FETCH_USER_MY_BOARD, FETCH_USER_MY_BOARD_NUMBER } from "./MyWrite.queries";

/**
 * 재인 수정 중 ..
 * Date: 0919 02:37
 * API 필요
 */

export default function MyWrite() {
  useAuth();

  const { data: UserData } = useQuery<Pick<IQuery, "fetchLoginedUser">>(FETCH_LOGINED_USER);
  // const { data: WriteData } = useQuery<Pick<IQuery, "fetchUserbyId">, IQueryFetchUserbyIdArgs>(
  //   FETCH_USER_BY_ID,
  //   {
  //     variables: {
  //       userId: String(UserData?.fetchLoginedUser.id),
  //     },
  //   }
  // );
  const { data: count } = useQuery(FETCH_USER_MY_BOARD_NUMBER);
  const { data: WriteData, refetch } = useQuery(FETCH_USER_MY_BOARD, {
    variables: {
      userId: String(UserData?.fetchLoginedUser.id),
    },
  });
  return <MyWriteUI UserData={UserData} WriteData={WriteData} count={count} refetch={refetch} />;
}
