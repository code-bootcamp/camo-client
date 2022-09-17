import { useMutation, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import { IMutation } from "../../../../commons/types/generated/types";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_LOGINED_USER, LOGOUT_USER } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const [accessToken] = useRecoilState(accessTokenState);
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const { data } = useQuery(FETCH_LOGINED_USER);

  const onClickLogout = async () => {
    try {
      const logout = await logoutUser;
      location.reload();
      logout({ variables: {} });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <LayoutHeaderUI data={data} accessToken={accessToken} onClickLogout={onClickLogout} />
    </>
  );
}
