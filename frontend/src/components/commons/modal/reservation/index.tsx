import styled from "@emotion/styled";
import { useState } from "react";
import Payment from "../../../units/payment/payment";

export const Wrapper = styled.div`
  width: 97vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: black;
  /* opacity: 0.7; */
`;
export const ReservationModal = styled.div`
  position: absolute;
  /* position: fixed;
  left: 50%;
  top: 35%;
  transform: translateX(-50%); */
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 50px;
  top: 100px;
  width: 31.25rem;
  height: 60vh;
  border: 1px solid black;
  border-radius: 10px;
`;

export const Title = styled.h2`
  display: inline-flex;
  justify-content: center;
`;

export const Contents = styled.main`
  width: 100%;
  height: 600px;
  padding-top: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
`;
export const CancelButton = styled.button`
  width: 50%;
  border: none;
  height: 50px;
  background-color: white;
  font-size: 16px;
  font-weight: 700;
`;
export const SubmitButton = styled(CancelButton)``;

export default function Reservation() {
  const [isTrue, setIsTrue] = useState(false);

  const handleModal = () => {
    setIsTrue((prev) => !prev);
  };

  return (
    <>
      <Wrapper>
        <button onClick={handleModal}>결제테스트창</button>
        {isTrue && (
          <ModalWrapper>
            <ReservationModal>
              <Title>예약하기</Title>
              <Contents></Contents>
              <ButtonWrapper>
                <CancelButton onClick={handleModal}>취소</CancelButton>
                <SubmitButton>
                  <Payment />
                  결제
                </SubmitButton>
              </ButtonWrapper>
            </ReservationModal>
          </ModalWrapper>
        )}
      </Wrapper>
    </>
  );
}
