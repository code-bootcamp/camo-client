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
    margin: 0;
  }
`;
export const RowWrapper = styled.div`
  width: 100%;
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

export const Form = styled.form`
  width: 100%;
  /* height: 100vh; */
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
