import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";
import { ISideMenuProps } from "./LayoutSidebar.types";

export const Wrapper = styled.section`
  /* width: 0vw; */
  /* height: 100vh; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  margin: 0 auto;
  padding-top: 125px;

  /* @media (min-width: 1920px) {
    padding-left: 500px;
  } */

  @media (min-width: 1500px) and (max-width: 1700px) {
    padding-left: 100px;
  }

  @media ${breakPoints.tablet} {
    display: none;
    width: 0vw;
  }

  @media ${breakPoints.mobile} {
    display: none;
    width: auto;
  }
`;

export const SideBar = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  width: 18.75rem;
  height: 25rem;
  background-color: white;
  align-content: space-around;
  border-radius: 10px;
  border: 1px solid #dadce0;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Body = styled.main`
  width: 70%;
  background-color: white;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const SideMenuIcon = styled.div`
  margin: auto;
  font-size: 14px;
  /* width: 20px; */
  height: 10px;
  padding: 0.5rem;
  margin-block: 0.625rem;
  /* background-color: beige; */
`;
export const SideMenu = styled.button`
  color: black;
  border: none;
  font-size: 14px;
  width: 90px;
  height: 21px;
  cursor: pointer;
  padding: 0.5rem;
  background-color: white;
  border: none;
  margin-block: 0.625rem;

  /* background: ${(props: ISideMenuProps) => (props.isActive ? "#6a564f" : "#5d7572")}; */
  font-weight: ${(props: ISideMenuProps) => (props.isActive ? "700" : "400")};
  text-decoration: ${(props: ISideMenuProps) => (props.isActive ? "underline" : "none")};
  text-underline-position: ${(props: ISideMenuProps) => (props.isActive ? "under" : "none")};
`;

export const StaySideMenu = styled(SideMenu)`
  /* text-decoration: underline; */
  /* text-underline-position: under; */
  font-weight: 700;
  background-color: #6a564f;
  margin: auto;
`;

export const StayMenu = styled.h3`
  color: black;
  width: 80%;
  margin: auto;
  padding-top: 1.25rem;
  padding-bottom: 0.625rem;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Profile = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 5rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
  margin: auto;
  display: flex;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 200px;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
`;
export const UserName = styled.h3`
  font-weight: 600;
  color: black;
`;

export const UserButton = styled.button`
  width: 6.2rem;
  height: 1.875rem;
  border: 1px solid #e3e5e8;
  border-radius: 0.313rem;
  color: black;
  cursor: pointer;
  background-color: white;
  font-weight: 600;
`;

export const Line = styled.hr`
  border: 0.5px solid #c4c4c4;
  width: 80%;
  display: flex;
  justify-content: center;
  margin: auto;
`;
