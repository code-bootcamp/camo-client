import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import { IMutation } from "../../../../commons/types/generated/types";
import LayoutHeaderUI from "./LayoutHeader2.presenter";
import { FETCH_LOGINED_USER, LOGOUT_USER } from "./LayoutHeader2.queries";

const HIDDEN_HEADERS = ["/login/", "/login/cafeOwnerSignUp/", "/login/signUp/"];

export default function LayoutHeader() {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const { data } = useQuery(FETCH_LOGINED_USER);
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

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
      {/* {!isHiddenHeader && ( */}
      <LayoutHeaderUI
        data={data}
        // refetch={refetch}
        accessToken={accessToken}
        onClickLogout={onClickLogout}
      />
      {/* )} */}
    </>
  );
}
