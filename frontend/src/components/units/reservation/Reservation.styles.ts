import styled from "@emotion/styled";

// 상세내용으로 옮길 때 변경
export const Wrapper = styled.div`
  margin-right: 300px;
  margin-top: 100px;
`;

export const MainWrapper = styled.main`
  width: 300px;
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

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const SelectPeople = styled.select`
  width: 48%;
  margin-top: 10px;
  padding: 10px 10px;
  height: 56px;
  font-weight: 400;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
`;

export const SelectTime = styled.select`
  width: 48%;
  margin-top: 10px;
  padding: 10px 10px;
  height: 56px;
  font-weight: 400;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
`;

export const MoneyLabel = styled.h3`
  width: 50%;
`;
export const Money = styled.h3`
  width: 50%;
  text-align: end;
`;

export const MoneyWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #1e3932;
  background-color: #1e3932;
  color: white;
  border-radius: 4px;
`;
