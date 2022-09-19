import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import useAuth from "../../../commons/hooks";
import { FETCH_LOGINED_USER } from "../MyPage.queries";
import MyLikeUI from "./MyLike.presenter";
import { FETCH_FAVORITE_CAFE_NUMBER, FETCH_USER_FAVORITE_CAFE } from "./MyLike.queries";

export default function MyLike() {
  useAuth();
  const { data: UserData } = useQuery<Pick<IQuery, "fetchLoginedUser">>(FETCH_LOGINED_USER);
  const { data: favoriteData, refetch } = useQuery<Pick<IQuery, "fetchUserFavoriteCafe">>(
    FETCH_USER_FAVORITE_CAFE,
    {
      variables: {
        userId: String(UserData?.fetchLoginedUser.id),
      },
    }
  );
  const { data: count } = useQuery(FETCH_FAVORITE_CAFE_NUMBER, {
    variables: {
      userId: String(UserData?.fetchLoginedUser.id),
    },
  });
  return <MyLikeUI favoriteData={favoriteData} refetch={refetch} count={count} />;
}
