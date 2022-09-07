import { MenuOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const HeaderWrapper = styled.div`
  padding: 0 15%;
  height: 5.5rem;
  background-color: #3c565b;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media ${breakPoints.mobile} {
    // 모바일
    display: flex;
    background-color: #5d7599;
  }
`;

export const LogoMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid yellow; */
`;

export const Logo = styled.img`
  height: 3.3rem;
  margin-right: 2.2rem;
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
  font-size: 0.9rem;
  font-weight: 600;
  margin: 1rem;
  color: white;
  :hover {
    color: white;
    font-weight: 800;
    border-bottom: 1px solid white;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LoginWrapper = styled.div`
  width: 7.7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  /* border: 1px solid red; */
  @media screen and (max-width: 767px) {
    /* display: none; */
    width: 2rem;
    height: 2rem;
  }
`;

export const LoginButton = styled.button`
  color: #3c565b;
  font-family: "NanumSquareOTF_ac";
  font-style: normal;
  font-weight: 600;
  font-size: 0.66rem;
  cursor: pointer;
  background-color: white;
  border: none;
  width: 3.5rem;
  height: 1.3rem;
  border-radius: 5px;
  :hover {
    font-weight: 800;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LoginUser = styled.h3``;

export const MenuTab = styled(MenuOutlined)`
  display: none;
  @media ${breakPoints.mobile} {
    display: block;
    font-size: 2rem;
    cursor: pointer;
  }
`;
