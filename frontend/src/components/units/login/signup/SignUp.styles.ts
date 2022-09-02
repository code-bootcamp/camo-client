import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  margin: 0 auto;
  padding: 5rem 0;
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  color: black;
  text-align: center;
  margin-bottom: 3.125rem;
`;

export const MainWrapper = styled.main`
  width: 60%;
  background-color: #f4f4f4;
  color: black;
  border-radius: 1.25rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: auto;
  margin-bottom: 5rem;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
  text-align: left;
  margin-top: 1.25rem;
`;
export const Label = styled.label`
  font-weight: 400;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  text-align: left;
  width: 10rem;
  margin-left: 5rem;
`;

export const Input = styled.input`
  width: 50%;
  /* width: 20rem; */
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

export const GreenButton = styled(Button)`
  background-color: #33413e;
  color: white;
`;

export const Margin = styled.div`
  margin-top: 4rem;
`;

export const FooterWrapper = styled.div`
  width: 30%;
  margin: auto;
  display: flex;
  flex-direction: row;
`;
export const FooterText = styled.div`
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
