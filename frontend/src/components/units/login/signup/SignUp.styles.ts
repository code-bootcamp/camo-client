import styled from "@emotion/styled";

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
  color: #c4c4c4;
`;

export const MainWrapper = styled.main`
  width: 100%;
  color: black;
  /* margin: auto; */
  padding-left: 10rem;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
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
  width: 61%;
  height: 3rem;
  margin-bottom: 3rem;
  margin-left: 2.5rem;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: #33413e;
  color: white;
  font-size: 1.2rem;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Error = styled.div`
  width: 100%;
  height: 30px;
  font-size: 12px;
  color: red;
`;
