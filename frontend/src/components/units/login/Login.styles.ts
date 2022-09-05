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
    width: 100vw;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 500;
  color: black;
  text-align: center;
`;
export const SubTitle = styled.h3``;
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
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  margin-bottom: 3rem;
`;

export const ButtonWrapper = styled.div`
  width: 25.938rem;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterWrapper = styled.div`
  margin: 30px;
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
`;

export const FooterText = styled.text`
  width: 80%;
  color: #888888;
  font-size: 1.125rem;
`;

export const FooterButton = styled.div`
  width: 50%;
  color: black;
  font-size: 1.125rem;
  font-weight: bold;
  justify-content: flex-end;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 4rem;
  background-color: #33413e;
  border: none;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
