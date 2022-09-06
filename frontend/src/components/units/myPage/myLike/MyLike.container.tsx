import { useQuery } from "@apollo/client";
import { FETCH_USER } from "../MyPage.queries";
import MyLikeUI from "./MyLike.presenter";

export default function MyLike() {
  const { data } = useQuery(FETCH_USER);
  return <MyLikeUI data={data} />;
}
