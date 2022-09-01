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
          <MenuFonts>Resevation</MenuFonts>
          <MenuFonts>Community</MenuFonts>
          <MenuFonts>My page</MenuFonts>
        </MenuWrapper>

        <LoginWrapper>
          <Link href="/">
            <a>
              <LoginFonts>LOGIN</LoginFonts>
            </a>
          </Link>

          <Link href="/">
            <a>
              <LoginFonts>&nbsp; JOIN</LoginFonts>
            </a>
          </Link>
        </LoginWrapper>
      </HeaderWrapper>
    </>
  );
}
