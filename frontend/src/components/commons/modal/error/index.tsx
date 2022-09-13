import styled from "@emotion/styled";
import { useState } from "react";

// 모달 위치
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 모달의 Wrapper
export const ModalWrapper = styled.main`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: black; // 배경 어둡게
  opacity: 0.7; // 배경 반투명
`;

export const Modal = styled.body`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  top: 100px;
  width: 300px;
  height: 150px;
  /* border: 1px solid black; */
  border-radius: 4px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 100px;
  border-radius: 4px;
`;

export const CancelButton = styled.button`
  width: 50%;
  height: 50px;
  border: none;
  background-color: white;
  color: #1e3932;
  border-radius: 4px;
`;

export const ConfirmButton = styled(CancelButton)`
  width: 50%;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: 50px;
  padding-top: 1rem;
  color: black;
  font-weight: 700;
`;

export const Contents = styled.div`
  padding-top: 10px;
  color: black;
  display: flex;
  justify-content: center;
`;

export default function ModalTest() {
  const [isTrue, setIsTrue] = useState(false);

  const handleModal = () => {
    setIsTrue((prev) => !prev);
  };

  return (
    <>
      <Wrapper>
        <button onClick={handleModal}>모달</button>
        {isTrue && (
          <ModalWrapper>
            <Modal>
              <Title>경고</Title>
              <Contents>다시 로그인해주세요</Contents>
              <ButtonWrapper>
                <CancelButton onClick={handleModal}>취소</CancelButton>
                <ConfirmButton onClick={handleModal}>확인</ConfirmButton>
              </ButtonWrapper>
            </Modal>
          </ModalWrapper>
        )}
      </Wrapper>
    </>
  );
}
