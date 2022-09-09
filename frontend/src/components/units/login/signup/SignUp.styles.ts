import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const Wrapper = styled.section`
  width: 50vw;
  height: 100vh !important;
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
export const SignUpWrapper = styled.section`
  width: 50%;
  background-color: white;
  padding-top: 3rem;
  /* margin: 0 auto; */
  /* padding-left: 10rem; */
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #33413e;
  text-align: center;
`;
export const SubTitle = styled.h3`
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
  /* border-radius: 5px; */
  cursor: pointer;
`;

export const Empty = styled.div`
  width: 5rem;
  height: 3rem;
  margin-left: 2rem;
`;

export const GreenButton = styled(Button)`
  background-color: #33413e;
  color: white;
`;

export const Margin = styled.div`
  margin-top: 2rem;
`;

export const FooterWrapper = styled.div`
  width: 20rem;
  margin: auto;
  display: flex;
  flex-direction: row;
`;
export const FooterText = styled.div`
  width: 70%;
  font-weight: 400;
  font-size: 1rem;
  color: #888888;
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

export const Form = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Error = styled.div`
  width: 100%;
  height: 0.1rem;
  font-size: 12px;
  color: red;
`;
