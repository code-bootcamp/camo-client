import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const SearchBarWrap = styled.div`
  margin-left: 3rem;
  width: 33rem;
  height: 3rem;
  font-size: 0.8rem;
  display: flex;
  padding: 1rem;
  justify-content: center;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const SearchbarInput = styled.input`
  width: 90%;
  line-height: 2.4rem;
  height: 2.4rem;
  border: none;
  background: white;
  padding-left: 1rem;
  margin-right: 1rem;
  border-radius: 5px;
`;

export const SearchbarBtn = styled.div`
  width: 10%;
  height: 2.4rem;
  font-size: 1rem;
  color: white;
  line-height: 2.4rem;
  text-align: center;
  cursor: pointer;
`;
