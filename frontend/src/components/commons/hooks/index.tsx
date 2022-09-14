import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../../../commons/store";

export function useAuth() {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);
  useEffect(() => {
    if (!accessToken) {
      restoreAccessToken.toPromise().then((newAccessToken) => {
        // console.log(newAccessToken);
        if (!newAccessToken) {
          router.push("/login");
          alert("로그인을 먼저 해주세요.");
        }
      });
    }
  }, []);
}

export default useAuth;
