import styled from "@emotion/styled";
import { breakPoints } from "../../../../styles/media";

export const Wrapper = styled.main`
  width: 100%;
  display: flex;
  margin: auto;
  flex-direction: row;
`;

export const SideWrapper = styled.section`
  width: 50%;
  background-color: #33413e;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15rem;
  margin-right: 6.25rem;
`;

export const SideLogo = styled.img`
  width: 30rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: auto;
  margin-left: 9rem;
`;

export const Logo = styled.h1`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  margin-top: 20rem;
  font-size: 10rem;
`;

export const SubLogo = styled.h2`
  color: white;
  font-weight: 400;
  font-size: 2.25rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SelectButton = styled.button`
  width: 7.375rem;
  height: 2.063rem;
  background: #5d7572;
  border-radius: 5px;
  color: white;
  border: none;
`;

export const Input = styled.input`
  /* width: 25.938rem; */
  width: 100%;
  height: 3.813rem;
  border: 2px solid #d9d9d9;
  display: flex;
  margin: auto;
  margin-top: 3.125rem;
`;

export const SocialLogin = styled.img`
  width: 25%;
  height: 20%;
  cursor: pointer;
  margin-top: 3rem;
`;
