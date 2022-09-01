// import Image from "next/image";

import {
  Blended,
  BlendedWrap,
  CommunityWrap,
  Footer,
  ImageWrapper,
  MainTitle,
  MainWrapper,
  MiddleWrapper,
  ReservationImg,
  ReservationWrap,
  Wrapper,
} from "./LaningStyle";

export default function LandingPage() {
  return (
    <Wrapper>
      <MainWrapper>
        <ImageWrapper>
          <MainTitle>Reserve Your Cafe</MainTitle>
        </ImageWrapper>
      </MainWrapper>

      <MiddleWrapper>
        <ReservationImg src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        <span>Reservation</span>

        <CommunityWrap>Community</CommunityWrap>

        <ReservationImg src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
      </MiddleWrapper>
      <BlendedWrap>
        <Blended>BLENDED</Blended>
      </BlendedWrap>
      <Footer>푸터입니다</Footer>
    </Wrapper>
  );
}
