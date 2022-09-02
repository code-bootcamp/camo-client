import Link from "next/link";
import {
  HeaderWrapper,
  LoginFonts,
  LoginWrapper,
  Logo,
  MenuFonts,
  MenuWrapper,
} from "./LayoutHeader.style";

export default function LayoutHeaderUI() {
  // <head>
  //   <meta name="viewport" content="width=device-width, initial-scale=1.0" user-scaleable="yes" />
  // </head>;

  return (
    <>
      <HeaderWrapper>
        <h1>
          <Link href="/">
            <a>
              <Logo src="/images/LogoL.png" alt="logo" />
            </a>
          </Link>
        </h1>

        <MenuWrapper>
          <Link href="/cafe">
            <a>
              <MenuFonts>Resevation</MenuFonts>
            </a>
          </Link>

          <Link href="/community">
            <a>
              <MenuFonts>Community</MenuFonts>
            </a>
          </Link>
          <Link href="/myPage/myLike">
            <a>
              <MenuFonts>My page</MenuFonts>
            </a>
          </Link>
        </MenuWrapper>

        <LoginWrapper>
          <Link href="/login">
            <a>
              <LoginFonts>LOGIN</LoginFonts>
            </a>
          </Link>

          <Link href="/login/signUp">
            <a>
              <LoginFonts>&nbsp; JOIN</LoginFonts>
            </a>
          </Link>
        </LoginWrapper>
      </HeaderWrapper>
    </>
  );
}
