import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import useAuth from "../../../commons/hooks";
import { FETCH_LOGINED_USER } from "../MyPage.queries";
import MyLikeUI from "./MyLike.presenter";
import { FETCH_USER_FAVORITE_CAFE } from "./MyLike.queries";

export default function MyLike() {
  useAuth();
  const { data } = useQuery<Pick<IQuery, "fetchLoginedUser">>(FETCH_LOGINED_USER);
  const { data: favoriteData } =
    useQuery<Pick<IQuery, "fetchUserFavoriteCafe">>(FETCH_USER_FAVORITE_CAFE);
  return <MyLikeUI data={data} favoriteData={favoriteData} />;
}
