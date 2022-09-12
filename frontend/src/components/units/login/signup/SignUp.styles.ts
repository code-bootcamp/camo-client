import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const Wrapper = styled.section`
  width: 50rem;
  /* height: 100vh !important; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding-top: 3rem;

  @media ${breakPoints.mobile} {
    width: auto;
  }
`;
export const SignUpWrapper = styled.section`
  /* width: 50%; */
  background-color: white;
  padding-top: 3rem;
  /* margin: 0 auto; */
  /* padding-left: 10rem; */
`;

export const Title = styled.h1`
  margin-top: 50px;
  font-size: 28px;
  line-height: 35px;
  font-weight: 500;
  text-align: center;
  color: rgb(51, 51, 51);
`;
export const SubTitle = styled.h3`
  padding-bottom: 1rem;
  @media ${breakPoints.tablet} {
    font-size: 1rem;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MainWrapper = styled.main`
  width: 100%;
  color: black;
  /* margin: auto; */
  padding-left: 10rem;
`;

export const RowWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  /* margin-bottom: 1.25rem; */
  margin-right: 4rem;

  @media ${breakPoints.mobile} {
    width: 80vw;
    margin: auto;
    /* padding-left: 4rem; */
  }
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  text-align: left;
  margin-left: 3rem;
`;

export const Input = styled.input`
  width: 20rem;
  height: 3rem;
  background-color: white;
  border: 1px solid #d9d9d9;
`;

export const Button = styled.button`
  width: 5rem;
  height: 3rem;
  border: none;
  margin-left: 2rem;
  border-radius: 4px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 5rem;
    height: 3rem;
    margin: auto;
    margin-left: 0.5rem;
  }
`;

export const Empty = styled.div`
  width: 5rem;
  height: 3rem;
  margin-left: 2rem;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const GreenButton = styled(Button)`
  background-color: #33413e;
  color: white;
`;

export const FooterWrapper = styled.div`
  width: 20rem;
  margin: auto;
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  @media ${breakPoints.mobile} {
    width: 80vw;
    margin: auto;
  }
`;
export const FooterText = styled.div`
  width: 70%;
  font-weight: 400;
  font-size: 1rem;
  color: #888888;
  @media ${breakPoints.mobile} {
    font-size: 13px;
  }
`;

export const LoginButton = styled.div`
  font-weight: 500;
  font-size: 1rem;
  margin-left: 2rem;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    font-size: 13px;
  }
`;

export const SubmitButton = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 240px;
  height: 56px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: #1e3932;
  border: 0px none;
  margin-top: 20px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 80vw;
    margin: auto;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Error = styled.div`
  width: 50%;
  height: 0.5rem;
  font-size: 12px;
  color: red;
  /* margin-right: 3rem; */
  padding-bottom: 1.25rem;
  @media ${breakPoints.mobile} {
    width: 80vw;
    margin: auto;
  }
`;

export const Line = styled.hr`
  width: 100%;
  /* padding: 10px 0px; */
  border-bottom: 0.5px solid rgb(51, 51, 51);
  @media ${breakPoints.mobile} {
    width: 80vw;
  }
`;

export const Margin = styled.div`
  margin-top: 2rem;
`;
export const TopMargin = styled.div`
  margin-top: 10rem;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const CheckBox = styled.input``;
