import { FireFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Searchbar = styled.div`
  width: 13.3rem;
  height: 2.2rem;
  border-radius: 5px;
  background-color: #eee;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FireFilledIcon = styled(FireFilled)`
  color: #5729ff;
  font-size: 30px;
  cursor: pointer;

  :hover {
    color: red;
  }
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding-left: 1rem;
`;
