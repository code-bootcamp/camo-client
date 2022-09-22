import Link from "next/link";
import * as C from "./LayoutHeader.style";
import { slide as Menu } from "react-burger-menu";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "25px",
      height: "20px",
      right: "10vw",
      top: "29px",
    },
    bmBurgerBars: {
      // background: "#ffffffe0",
    },
    bmBurgerBarsHover: {
      background: "#ffffff",
      // background: "none",
    },
    // 안먹음
    bmItemHover: {
      color: "white",
    },

    bmCrossButton: {
      height: "50px",
      width: "50px",
    },
    bmCross: {
      background: "#ffffff",
    },
    bmMenuWrap: {
      position: "fixed",
      top: "0px",
      height: "100%",
      width: "200px",
    },
    bmMenu: {
      background: "#1e3932",
      // background: "white",
      // borderLeft: "1px solid black",
      paddingTop: "80px",
      fontSize: "1.15rem",
      width: "100%",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmOverlay: {
      background: "none",
    },
  };

  return (
    <>
      <C.Wrapper>
        <C.HeaderWrapper>
          <h1>
            <Link href="/">
              <a>
                <C.Logo src="/Final_logo1.png" alt="logo" />
              </a>
            </Link>
          </h1>
          <C.MenuTab />
          <C.HamburgerMenu>
            <Menu styles={styles} right>
              {props.accessToken ? (
                <C.Item>{props.data?.fetchLoginedUser.nickName}님</C.Item>
              ) : (
                <div></div>
              )}
              {props.accessToken ? (
                <C.Item onClick={props.onClickLogout}>로그아웃</C.Item>
              ) : (
                <>
                  <Link href="/login">
                    <C.Item>
                      로그인
                      <a>
                        <C.MenuFonts>로그인</C.MenuFonts>
                      </a>
                    </C.Item>
                  </Link>
                  <Link href="/login/selectSignUp">
                    <C.Item>
                      회원가입
                      <a>
                        <C.MenuFonts>로그인</C.MenuFonts>
                      </a>
                    </C.Item>
                  </Link>
                </>
              )}

              <Link href="/cafe">
                <C.Item>
                  카페
                  <a>
                    <C.MenuFonts>CAFE</C.MenuFonts>
                  </a>
                </C.Item>
              </Link>
              <Link href="/community">
                <C.Item>
                  커뮤니티
                  <a>
                    <C.MenuFonts>CAFE</C.MenuFonts>
                  </a>
                </C.Item>
              </Link>
              {props.accessToken ? (
                <>
                  <Link href="/myPage/myLike">
                    <C.Item>
                      마이페이지
                      <a>
                        <C.MenuFonts>마이페이지</C.MenuFonts>
                      </a>
                    </C.Item>
                  </Link>
                  <Link href="/myPage/myLike">
                    <C.MyPageItem>
                      - 찜목록
                      <a>
                        <C.MenuFonts>마이페이지</C.MenuFonts>
                      </a>
                    </C.MyPageItem>
                  </Link>
                  <Link href="/myPage/myReservation">
                    <C.MyPageItem>
                      - 예약내역
                      <a>
                        <C.MenuFonts>마이페이지</C.MenuFonts>
                      </a>
                    </C.MyPageItem>
                  </Link>
                  <Link href="/myPage/myEdit">
                    <C.MyPageItem>
                      - 회원정보수정
                      <a>
                        <C.MenuFonts>마이페이지</C.MenuFonts>
                      </a>
                    </C.MyPageItem>
                  </Link>
                </>
              ) : (
                <div></div>
              )}
            </Menu>
          </C.HamburgerMenu>
        </C.HeaderWrapper>
      </C.Wrapper>
    </>
  );
}
