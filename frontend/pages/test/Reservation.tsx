import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

// if setting up the CSS is tricky, you can add this to your page somewhere:
// <link rel="stylesheet" href="https://unpkg.com/react-spring-bottom-sheet/dist/style.css" crossorigin="anonymous">
import "react-spring-bottom-sheet/dist/style.css";

const Wrapper = styled.div`
  height: 100vh;
`;

export const MobileReservationBtn = styled.button`
  width: 100%;
`;

export const MobilePaymentBtn = styled.button`
  width: 100%;
`;
export default function Example() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);

  const onDismiss = () => {
    setOpen(false);
  };

  return (
    <>
      <MobileReservationBtn onClick={() => setOpen(true)}>예약하기</MobileReservationBtn>
      <BottomSheet
        open={open}
        onDismiss={onDismiss}
        defaultSnap={({ snapPoints, lastSnap }) => lastSnap ?? Math.min(...snapPoints)}
        snapPoints={({ maxHeight }) => [maxHeight - maxHeight / 4, maxHeight * 0.6]}
        header={<h1>예약하기</h1>}
        footer={<MobileReservationBtn onClick={onDismiss}>결제하기</MobileReservationBtn>}
      >
        <Wrapper>
          <div>
            <p>테스트</p>
            {/* <button onClick={onDismiss} className="w-full">
              Dismiss
            </button> */}
          </div>
        </Wrapper>
      </BottomSheet>
    </>
  );
}
