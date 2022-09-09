import styled from "@emotion/styled";
import { breakPoints } from "../../../../styles/media";

export const Wrapper = styled.main`
  width: 100%;
  display: flex;
  margin: auto;
  flex-direction: row;
  height: 100vh;

  @media ${breakPoints.mobile} {
    display: 100vw;
  }
`;
export const Title = styled.h1`
  font-weight: 500;
  color: black;
`;
export const SideWrapper = styled.section`
  width: 40%;
  background-color: #33413e;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15rem;
  padding-right: 5rem;
`;

export const SideLogo = styled.img`
  width: 20rem;
  margin-left: 6rem;
`;

export const SubLogo = styled.h2`
  color: white;
  font-weight: 400;
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 7rem;
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
  width: 100%;
  height: 3rem;
  border: 2px solid #d9d9d9;
  display: flex;
  margin: auto;
  padding-left: 1rem;

  @media ${breakPoints.mobile} {
    width: 80vw;
  }
`;

export const SocialLogin = styled.img`
  width: 25%;
  height: 20%;
  cursor: pointer;
`;

export const LoginButton = styled.div`
  font-weight: 500;
  font-size: 1rem;
  margin-left: 2rem;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 3.5rem;
  background-color: #33413e;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 80vw;
    margin: auto;
  }
`;
export const ButtonWrapper = styled.div`
  /* width: 25.938rem; */
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
