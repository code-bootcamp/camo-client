import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const Wrapper = styled.body`
  width: 100%;
  margin: auto;
`;

export const BodyWrapper = styled.main`
  width: 70%;
  margin: 0 auto;
  padding-top: 2rem;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

export const LeftContents = styled.section`
  width: 40%;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #5e5e5e;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const RightContents = styled.section`
  width: 100%;
`;

export const Input = styled.input`
  width: 17.625rem;
  height: 2.125rem;
  border: 1px solid #848484;
  @media ${breakPoints.mobile} {
    width: 10rem;
  }
`;

export const DefaultInput = styled(Input)`
  background: #eeeeee;
`;

export const EditButton = styled.button`
  width: 7.688rem;
  height: 2.5rem;
  background: #33413e;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  @media ${breakPoints.mobile} {
    padding-top: 0rem;
    width: 10rem;
  }
`;
