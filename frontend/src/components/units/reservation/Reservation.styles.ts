import styled from "@emotion/styled";

// 상세내용으로 옮길 때 변경
export const Wrapper = styled.div`
  margin-right: 300px;
  margin-top: 100px;
`;

export const MainWrapper = styled.main`
  width: 200px;
  height: auto;
  position: sticky;
  left: 90%;
  bottom: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  margin-top: 30px;
  color: black;
`;

export const Label = styled.label`
  width: 50%;
  font-weight: 800;
  font-size: 18px;
  text-align: center;
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
