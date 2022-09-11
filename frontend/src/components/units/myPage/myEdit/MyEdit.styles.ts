import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const Wrapper = styled.body`
  width: 100%;
  margin: auto;
  @media ${breakPoints.mobile} {
    width: 50vw;
  }
`;

export const BodyWrapper = styled.main`
  width: 50%;
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${breakPoints.mobile} {
    width: 50vw;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

export const LeftContents = styled.section`
  width: 40%;
  font-size: 16px;
  display: flex;
  align-items: center;
  font-weight: 500;
  color: rgb(51, 51, 51);
  line-height: 20px;

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
  padding-left: 0.5rem;
  border: 1px solid #848484;
  border-radius: 4px;
  @media ${breakPoints.mobile} {
    width: 50vw;
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

export const DeleteButton = styled(EditButton)`
  margin-right: 10px;
  background-color: white;
  border: 1px solid #1e3932;
  color: #1e3932;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  @media ${breakPoints.mobile} {
    padding-top: 0rem;
    width: 50vw;
  }
`;

export const EmailInput = styled.input`
  width: 50%;
  margin-top: 10px;
`;
