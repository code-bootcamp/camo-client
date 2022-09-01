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
  font-weight: 500;
  color: black;
  text-align: center;
  margin-bottom: 3.125rem;
`;

export const MainWrapper = styled.main`
  width: 70%;
  background-color: #f4f4f4;
  color: black;
  border-radius: 1.25rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: auto;
  /* position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 10%);
  background-color: #f4f4f4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
`;

export const RadioWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 2rem;
  justify-content: space-between;
`;

export const Text = styled.text`
  font-size: 1.5rem;
`;
export const RadioInputWrapper = styled.div`
  /* width: 100%; */
`;

export const Radio = styled.input`
  font-size: 1.5rem;
`;

export const Input = styled.input`
  width: 70%;
  height: 6.25rem;
  background-color: white;
  border: 1px solid #d9d9d9;
  display: flex;
  margin: auto;
  margin-top: 3.125rem;
  margin-bottom: 5rem;
`;

export const SocialLoginWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  margin-bottom: 3rem;
`;

export const SocialLogin = styled.img`
  width: 20%;
  height: 20%;
`;

export const ButtonWrapper = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterWrapper = styled.div`
  margin: 30px;
`;
export const RowWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 1.25rem;
`;

export const FooterText = styled.text`
  color: #888888;
  font-size: 1.125rem;
`;

export const FooterButton = styled.div`
  color: black;
  font-size: 1.125rem;
  font-weight: bold;
  justify-content: flex-end;
`;
