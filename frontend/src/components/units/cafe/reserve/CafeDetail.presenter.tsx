import { Calendar } from "antd";
import {
  BottomWrapper,
  CALENDAR,
  CalendarBox,
  DateBox,
  IMG,
  ImgBox,
  PaymentBox,
  PersonBox,
  RequestBox,
  ReserveBox,
  ReserveBtn,
  Text,
  TimeBox,
  Title,
  TopWrapper,
  Wrapper,
} from "./CafeDetail.styles";

export default function CafeReserveUI() {
  return (
    <>
      <Wrapper>
        <Title>예약하기</Title>
        <TopWrapper>
          <div>
            <Text>방문희망 날짜를 선택해 주세요</Text>
            <hr />
          </div>
          <CalendarBox>
            <CALENDAR />
            <ReserveBox>
              <DateBox>2022년 9월 2일(금)</DateBox>
              <TimeBox>시간 선택</TimeBox>
              <PersonBox>인원선택</PersonBox>
              <RequestBox placeholder="예약요청 사항을 입력해주세요" />
              <PaymentBox>결제 예정 금액 = 5,000원</PaymentBox>
            </ReserveBox>
          </CalendarBox>
        </TopWrapper>
        <BottomWrapper>
          <div>
            <Text>카페명</Text>
            <ImgBox src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80" />
          </div>
          <ReserveBtn>예약하기</ReserveBtn>
        </BottomWrapper>
      </Wrapper>
    </>
  );
}
