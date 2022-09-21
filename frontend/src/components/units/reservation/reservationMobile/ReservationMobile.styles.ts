import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const MainWrapper = styled.main`
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  margin: auto;
  background-color: white;
  padding: 10px;
  padding-top: 2rem;
  color: black;
`;

export const Label = styled.label`
  width: 95%;
  font-weight: 800;
  font-size: 24px;
  /* text-align: center; */
  color: #5a5a5a;
  padding-bottom: 10px;
  border-bottom: 0.5px solid #5a5a5a;
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

export const MoneyLabel = styled.h2`
  width: 50%;
  color: #5a5a5a;
`;
export const Money = styled.h2`
  width: 50%;
  text-align: end;
  color: #5a5a5a;
`;

export const MoneyWrapper = styled.div`
  margin-top: 3rem;
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
  width: 100%;
  border: none;
  /* text-align: center; */
`;

export const ViewSetTimeLine = styled.div`
  width: 1rem;
  padding-right: 2.5rem;
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

export const CheckInTime = styled.div`
  width: 50%;
  height: 42px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #504e48;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
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
  width: 18.75rem;
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
  width: 100%;
  height: 40px;
  border: 1px solid #d9dbe3;
  border-radius: 4px;
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

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Text = styled.h3`
  width: 20%;
  display: flex;
  align-items: center;
  text-align: center;
  padding-bottom: 10px;
  color: #5a5a5a;
`;

// BottomSheet
export const MobileWrapper = styled.div`
  display: none;

  @media ${breakPoints.mobile} {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 50px;
  }
`;
export const BottomContentsWrapper = styled.div`
  display: none;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    margin: auto;
    height: 100vh;
    padding: 1rem;
    width: 90vw;
  }
`;

export const MobileReservationBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: #1e3932;
  color: white;
  font-size: 17px;
  font-weight: 700;
`;

export const MobilePaymentBtn = styled.button`
  width: 90vw;
  height: 50px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  background-color: #1e3932;
  color: white;
  font-size: 17px;
  font-weight: 700;
  margin: auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
`;

// 0921
export const Line = styled.div``;
export const ContentsLabel = styled.label`
  font-size: 18px;
  font-weight: 500;
  /* padding-left: 1rem; */
  color: #5a5a5a;
  padding-top: 5px;
`;

export const ContentsAddress = styled.label`
  font-size: 12px;
  font-weight: 350;
  /* padding: 1rem; */
  padding-top: 1rem;
  color: #5a5a5a;
  padding-bottom: 3px;
`;

export const ContentsWrapper = styled.div`
  height: auto;
  /* padding-top: 1rem; */
  box-shadow: rgb(0 0 0 / 12%) 0px 5px 4px;
  padding: 1rem;
  /* border: 0.1px solid #5a5a5a; */
  display: flex;
  flex-direction: column;
`;

export const ContentsName = styled.div``;

export const PlusMinusBtn = styled.div`
  font-size: 1.5rem;
  color: #5a5a5a;
`;
