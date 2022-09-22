import { MenuOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button } from "antd";
import { breakPoints } from "../../../../../styles/media";

export const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  /* position: fixed; */
  background-color: #1e3932;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 1);

  @media ${breakPoints.mobile} {
    display: flex;
    /* background-color: #454545; */
    padding: 0 5%;
  }
`;
export const HeaderWrapper = styled.div`
  height: 5rem;
  width: 1500px;
  padding: 0 5%;
  background-color: #1e3932;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* background-color: #454545; */
  }
`;

export const LogoMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 3.3rem;
  /* margin-right: 2rem; */
  margin-top: 0.8rem;
`;
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MenuFonts = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  margin: 0.8rem;
  color: white;

  :hover {
    color: white;
    font-weight: 800;
    border-bottom: 1px solid white;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const LoginWrapper = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  @media screen and (max-width: 767px) {
    /* display: none; */
    width: 2rem;
    height: 2rem;
  }
`;

export const LoginButton = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 0.8rem;
  background-color: #1e3932;
  color: white;
  cursor: pointer;
  border: none;
  width: 5rem;
  height: 1.3rem;
  border-radius: 5px;
  :hover {
    font-weight: 800;
    background-color: white;
    color: #5d7572;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LoginUser = styled.h3`
  color: white;
  font-size: 0.8rem;
  font-weight: 500;
  width: 8rem;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MenuTab = styled(MenuOutlined)`
  display: none !important;
  color: white;
  @media ${breakPoints.mobile} {
    display: block !important;
    /* position: relative; */
    position: absolute;
    font-size: 2rem;
    cursor: pointer;
    color: white !important;
    padding-left: 20rem;
    /* background-color: black; */
  }
`;

export const MenuButton = styled(Button)`
  display: none !important;

  @media ${breakPoints.mobile} {
    width: 5rem;
    height: 3rem;
    position: absolute;
    top: 1rem;
    right: 2%;
    z-index: 99;
    cursor: pointer;
    display: block !important;
  }
`;

export const HamburgerMenu = styled.div`
  font-size: 20px;
  margin-right: 40px;
  display: none;
  @media (max-width: 637px) {
    display: inline;
    position: absolute;
  }
`;

export const Item = styled.div`
  cursor: pointer;
  font-size: 1.4rem;
  padding: 10px 20px;
  width: 100%;
  color: #b8b7ad;
  :hover {
    color: #c84e50;
  }
`;

export const MyPageItem = styled(Item)`
  font-size: 1rem;
  padding-left: 2rem;
`;
