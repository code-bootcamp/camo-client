import styled from "@emotion/styled";
import { ISideMenuProps } from "./LayoutSidebar.types";

export const Wrapper = styled.section`
  width: 130vh;
  /* height: 30rem; */
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 5%;
  border: 1px solid black;
`;

export const SideBar = styled.section`
  background-color: #33413e;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-around;
`;

export const Body = styled.main`
  background-color: #f4f4f4;
  width: 80%;
`;

export const SideMenu = styled.h3`
  color: white;
  line-height: 6.25rem;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;

  font-weight: ${(props: ISideMenuProps) => (props.isActive ? "700" : "400")};
  text-decoration: ${(props: ISideMenuProps) => (props.isActive ? "underline" : "none")};
  text-underline-position: ${(props: ISideMenuProps) => (props.isActive ? "under" : "none")};
`;

export const StaySideMenu = styled(SideMenu)`
  text-decoration: underline;
  text-underline-position: under;
  font-weight: 700;
`;

export const StayMenu = styled.h3`
  color: black;
  width: 80%;
  margin: auto;
  padding-top: 1.25rem;
  padding-bottom: 0.625rem;
`;

export const Line = styled.hr`
  border: 0.5px solid #c4c4c4;
  width: 80%;
  display: flex;
  justify-content: center;
  margin: auto;
`;
