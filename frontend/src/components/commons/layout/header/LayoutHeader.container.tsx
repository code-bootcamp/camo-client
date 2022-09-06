import { useMutation, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER, LOGOUT_USER } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const [accessToken] = useRecoilState(accessTokenState);
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  // const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER, {
  //   variables: { email: "1@1" },
  // });
  // const { data } = useQuery<Pick<IQuery, "fetchLoginUsers">>(FETCH_USER);
  // const { data } = useQuery<Pick<IQuery, "fetchLoginUser">>(FETCH_USER);
  const { data } = useQuery(FETCH_USER);

  const onClickLogout = async () => {
    try {
      const logout = await logoutUser;
      location.reload();
      logout({ variables: {} });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);
  return (
    <LayoutHeaderUI
      data={data}
      // refetch={refetch}
      accessToken={accessToken}
      onClickLogout={onClickLogout}
    />
  );
}
