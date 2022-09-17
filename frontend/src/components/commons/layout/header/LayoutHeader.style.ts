import { MenuOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #1e3932;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 1);

  @media ${breakPoints.mobile} {
    display: flex;
    background-color: #454545;
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
    background-color: #454545;
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
  margin-right: 2rem;
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
  width: 8rem;
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
  font-size: 0.66rem;
  background-color: #1e3932;
  color: white;
  cursor: pointer;
  border: none;
  width: 3.5rem;
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
  font-size: 0.9rem;
  font-weight: 500;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MenuTab = styled(MenuOutlined)`
  display: none;
  @media ${breakPoints.mobile} {
    display: block;
    font-size: 2rem;
    cursor: pointer;
  }
`;
