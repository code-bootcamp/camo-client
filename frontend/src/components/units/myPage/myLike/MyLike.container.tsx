import { useQuery } from "@apollo/client";
import useAuth from "../../../commons/hooks";
import { FETCH_USER } from "../MyPage.queries";
import MyLikeUI from "./MyLike.presenter";

export default function MyLike() {
  useAuth();
  const { data } = useQuery(FETCH_USER);
  return <MyLikeUI data={data} />;
}
