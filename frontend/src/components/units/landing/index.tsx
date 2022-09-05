// import Image from "next/image";
// 랜딩페이지

import * as C from "./LaningStyle";
import { useInView } from "react-intersection-observer";
import { CoffeeOutlined } from "@ant-design/icons";

export default function LandingPage() {
  // {imageSrc, title, subtitle, flipped}

  const [ref, inView] = useInView({
    threshhold: 0.4,
  });

  return (
    <C.Wrapper>
      <C.MainWrapper>
        <C.MainImage src="https://images.unsplash.com/photo-1482350325005-eda5e677279b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        <C.MainTitle>
          <CoffeeOutlined /> <br />
          Reserve Your Cafe
        </C.MainTitle>
      </C.MainWrapper>

      <C.MiddleWrapper className={inView ? "isActive" : ""} ref={ref}>
        <C.ReservationImg
          className={inView ? "isActive" : ""}
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <C.ReservationWrap className={inView ? "isActive" : ""}>
          <C.SliderTitle className="slider__title">Reservation </C.SliderTitle>

          <C.Subtitle>
            마음에 드는 카페를 찾아서 <br /> 예약하고 편하게 방문하세요.
          </C.Subtitle>
        </C.ReservationWrap>
      </C.MiddleWrapper>

      <C.MiddleWrapper className={inView ? "isActive" : ""} ref={ref}>
        <C.ReservationWrap className={inView ? "isActive" : ""}>
          <C.SliderTitle>Community </C.SliderTitle>

          <C.Subtitle>직접 방문한 카페를 공유해보세요.</C.Subtitle>
        </C.ReservationWrap>
        <C.ReservationImg
          className={inView ? "isActive" : ""}
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        />
      </C.MiddleWrapper>

      <C.BlendedWrap>
        <C.BlendedText>BLENDED</C.BlendedText>
      </C.BlendedWrap>
      <C.Footer>
        <C.FooterText>푸터입니다</C.FooterText>
      </C.Footer>
    </C.Wrapper>
  );
}
