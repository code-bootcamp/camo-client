import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const flow = keyframes`
    0% {left:0%; opacity: 0;}
    10% {opacity: 1;}
    50% {opacity: 0;}
    100% {left:90%; opacity: 0;}
`;
export const Body = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0px 10%;
  z-index: 100;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  background-color: rgba(0, 0, 0, 0.5);

  @media (max-width: 689px) {
    display: none;
  }
`;

export const Text = styled.div`
  padding: 2rem;
  text-align: center;
  /* background-color: palegoldenrod; */
  color: #1e3932;
  font-size: 1.2rem;
  font-weight: 500;
  span {
    border-top: 3px solid #1e3932;
    display: block;
    font-weight: 900;
    font-size: 1.6rem;
    padding-top: 2rem;
    /* background-color: palegoldenrod; */
  }
`;

export const Wrapper = styled.div`
  width: 450px;
  height: 550px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "KOTRA_BOLD-Bold";

  /* border-radius: 5px; */
`;
export const Content = styled.img`
  width: 100%;
  height: 60%;
  padding: 2rem;
  object-fit: contain;
  /* background-color: palegoldenrod; */
`;
export const Point = styled.img`
  position: absolute;
  top: 250px;
  left: 20px;
  animation: ${flow} linear 3s infinite;
`;
export const ChooseClose = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #1e3932;
  color: white;
  padding: 0px 30px;
  width: 100%;
  height: 10%;
`;
export const OneDay = styled.div`
  font-size: 1rem;
  cursor: pointer;
`;
export const Close = styled.div`
  font-size: 1rem;
  cursor: pointer;
`;

export default function PopUp() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const BEFORE = localStorage.getItem("visitBefore") || "";
    const NOW = Math.floor(new Date().getDate());
    if (BEFORE === "") {
      setShowModal(true);
    } else {
      if (NOW >= Number(BEFORE)) {
        setShowModal(true);
        localStorage.removeItem("visitBefore");
      } else {
        setShowModal(false);
      }
    }
  }, []);
  const onClickClose = () => {
    setShowModal(false);
  };
  const onClickTodayClose = () => {
    const expiry = new Date();
    const expiryDate: number = expiry.getDate() + 1;
    // 로컬스토리지 저장
    localStorage.setItem("visitBefore", String(expiryDate));
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <Body>
          <Wrapper>
            <Text>
              Cafe Moment 서비스가 오픈했습니다. 🎉
              <br />
              <span>
                {" "}
                이제 가고싶은 카페를 예약해서 <br />
                편하게 방문하세요!
              </span>{" "}
            </Text>

            <Content src="/camo1.png" />
            {/* <Point src="/Final_logo1.png" /> */}
            <ChooseClose>
              <OneDay onClick={onClickTodayClose}>하루동안 열지 않기</OneDay>
              <Close onClick={onClickClose}>닫기</Close>
            </ChooseClose>
          </Wrapper>
        </Body>
      )}
    </>
  );
}
