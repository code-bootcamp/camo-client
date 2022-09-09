import styled from "@emotion/styled";
import { breakPoints } from "../../../../styles/media";

export const Wrapper = styled.section`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding-top: 3rem;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const SubTitle = styled.h3`
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MainWrapper = styled.main`
  width: 70%;
  color: black;
  border-radius: 1.25rem;
  margin: auto;

  @media ${breakPoints.mobile} {
    width: 100vw;
  }
`;

export const SelectWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 2rem;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    width: 70%;
  }
`;

export const Text = styled.h1`
  font-size: 1.5rem;
`;

export const RadioInputWrapper = styled.div`
  /* width: 100%; */
`;

export const Radio = styled.input`
  font-size: 1.5rem;
`;

export const SocialLoginWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding-bottom: 3rem;
  padding-top: 3rem;
  @media ${breakPoints.mobile} {
    width: 50vw;
  }
`;

export const FooterWrapper = styled.section`
  padding-top: 3rem;

  @media ${breakPoints.mobile} {
    width: 100vw;
  }
`;
export const RowWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 1.25rem;

  @media ${breakPoints.mobile} {
    width: 80vw;
  }
`;

export const FooterText = styled.text`
  width: 80%;
  color: #888888;
  font-size: 1rem;
  @media ${breakPoints.tablet} {
    font-size: 0.8rem;
  }
`;

export const FooterButton = styled.div`
  width: 50%;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  justify-content: flex-end;
  cursor: pointer;
  @media ${breakPoints.tablet} {
    font-size: 0.8rem;
  }
`;
