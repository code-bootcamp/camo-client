import styled from "@emotion/styled";

export const SearchBar = styled.div`
  width: 13.3rem;
  height: 2.2rem;
  border-radius: 5px;
  background-color: #eee;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding-left: 1rem;
`;

export const SearchBtn = styled.button`
  width: 4rem;
  height: 2rem;
  background-color: #1e3932;
  border: none;
  color: white;
  cursor: pointer;
`;
