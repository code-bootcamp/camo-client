import styled from "@emotion/styled";
import { breakPoints } from "../../commons/styles/media";

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
  /* color: white;
  background-color: #c1aeee;
  border: none; */
  border-radius: 4px;
  cursor: pointer;
`;

// tmp //

// 시간
export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const TimeRange = styled.div`
  font-size: 15px;
  margin-top: 10px;
`;

export const ViewSetTime = styled.input`
  width: 30%;
  border: none;
  text-align: center;
`;

// 체크인
export const CheckInWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 0;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 15px;
`;

// 시간 선택 문구
export const CheckInTime = styled.div`
  width: 80%;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #9ca0ac;
  border: 1px solid #d9dbe3;
  cursor: pointer;
`;

export const CartBox = styled.div`
  width: 900px;
  height: 650px;
  position: absolute;
  top: 150px;
  right: 15%;
  border: 10px solid #b9c7fa;
  border-radius: 20px;

  z-index: 1;
  background-color: white;
  @media ${breakPoints.tablet} {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }
`;
// 시간선택시 나오는 Div
export const TimesWrapper = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #1e3932;
  padding: 20px;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const TimeHead = styled.div`
  width: 100%;
  font-weight: 600;
`;

export const TimeBox = styled.button`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  background-color: #f6f7fb;
  background-color: ${(props: { reserved: boolean }) => props.reserved && "#c4c4c4"};
  padding: 3px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #1e3932;
    color: white;
  }
  :disabled {
    background-color: gray;
    /* :hover {
      background-color: none;
      color: black;
      cursor: initial;
    } */
  }
`;

export const TimeToggleCancel = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 10px;
  cursor: pointer;
`;

export const CheckGuest = styled.div`
  width: 50%;
  height: 42px;
  border-top: 1px solid #d9dbe3;
  border-bottom: 1px solid #d9dbe3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GuestBtn = styled.button`
  height: 100%;
  width: 20px;
  display: flex;
  font-size: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: white;
  cursor: pointer;
  :active {
    background-color: gray;
  }
  :disabled {
    color: white;
    background-color: gray;
    opacity: 0.4;
    cursor: initial;
  }
`;
