import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const Wrapper = styled.main`
  width: 98vw;
  display: flex;
  margin: auto;
  flex-direction: column;
  height: 100vh;

  @media ${breakPoints.mobile} {
    display: 100vw;
  }
`;
export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  margin-right: 4rem;

  @media ${breakPoints.mobile} {
    width: 80vw;
    margin: auto;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
