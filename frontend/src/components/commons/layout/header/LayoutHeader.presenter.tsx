import Link from "next/link";
import {
  HeaderWrapper,
  LoginButton,
  LoginUser,
  LoginWrapper,
  Logo,
  MenuFonts,
  MenuWrapper,
} from "./LayoutHeader.style";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  return (
    <>
      <HeaderWrapper>
        <h1>
          <Link href="/">
            <a>
              <Logo src="/Header_CAMO.png" alt="logo" />
            </a>
          </Link>
        </h1>

        <MenuWrapper>
          <Link href="/cafe">
            <a>
              <MenuFonts>Reservation</MenuFonts>
            </a>
          </Link>

          <Link href="/community">
            <a>
              <MenuFonts>Community</MenuFonts>
            </a>
          </Link>
          {props.accessToken ? (
            <Link href="/myPage/myLike">
              <a>
                <MenuFonts>My page</MenuFonts>
              </a>
            </Link>
          ) : (
            <a></a>
          )}
        </MenuWrapper>

        {props.accessToken ? (
          <LoginWrapper>
            <LoginUser>{props.data?.fetchLoginUser.name}님</LoginUser>
            <LoginButton onClick={props.onClickLogout}>로그아웃</LoginButton>
          </LoginWrapper>
        ) : (
          <LoginWrapper>
            <Link href="/login">
              <a>
                <LoginButton>로그인</LoginButton>
              </a>
            </Link>

            <Link href="/login/signUp">
              <a>
                <LoginButton>회원가입</LoginButton>
              </a>
            </Link>
          </LoginWrapper>
        )}
      </HeaderWrapper>
    </>
  );
}
