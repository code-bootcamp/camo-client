import styled from "@emotion/styled";
import { breakPoints } from "../../../../styles/media";

export const Wrapper = styled.main`
  width: 98vw;
  display: flex;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  flex-direction: column;

  @media ${breakPoints.mobile} {
    /* margin-top: -1vh; */
    display: 100vw;
    width: 100vw;
  }
`;
export const Title = styled.h1`
  margin-bottom: 2rem;
  font-weight: 800;
  font-size: 24px;
  line-height: 20px;
  text-align: center;
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
  width: 25rem;
  height: 3rem;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  display: flex;
  margin: auto;
  padding-left: 1rem;

  @media ${breakPoints.mobile} {
    width: 80vw;
  }
`;

export const SocialA = styled.a`
  width: 100%;
  height: 100%;
  margin-bottom: 21px;
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
  background-color: #1e3932;
  border: none;
  border-radius: 4px;
  color: white;
  margin-bottom: 0.5rem;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;

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
  padding-top: 3rem;
  @media ${breakPoints.mobile} {
    padding-top: -3rem;
  }
`;
