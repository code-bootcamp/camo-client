import styled from "@emotion/styled";
import { breakPoints } from "../../../../styles/media";

export const Wrapper = styled.section`
  width: 50rem;
  margin: auto;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const SubTitle = styled.h3`
  padding-bottom: 1rem;
  color: #333333;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MainWrapper = styled.main`
  width: 50%;
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

/** 재인
 * 구글 로고 다시 가져오기..
 */
export const GoogleLogin = styled.img`
  width: 64%;
  height: 100%;
  cursor: pointer;
  /* margin-right: 10px; */
  /* background-color: black; */
  @media ${breakPoints.mobile} {
    width: 13vw;
    margin-right: 1rem;
  }

  @media (max-width: 700px) {
    width: 14vw;
  }
`;

export const SocialLogin = styled.img`
  width: 60%;
  height: 100%;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 13vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const SocialLoginWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  margin-right: 20px;
  /* padding-bottom: 2rem; */
  padding-top: 2rem;
  @media ${breakPoints.mobile} {
    width: 55vw;
    margin: auto;
    /* margin-left: 90px; */
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
  @media ${breakPoints.mobile} {
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
  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;
