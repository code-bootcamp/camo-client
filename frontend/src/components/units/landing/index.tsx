// import Image from "next/image";
// 랜딩페이지

import * as C from "./LaningStyle";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
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
          당신이 원하는 <br />
          카페들을 모은
          <div>카모</div>
        </C.MainTitle>
        <C.MainSmallText>
          내가 아는 카페 정보부터 카페 예약까지, <br />
          사람들과 함께 공유해요.
        </C.MainSmallText>
      </C.MainWrapper>

      <C.MiddleWrapper className={inView ? "isActive" : ""} ref={ref}>
        <Link href="/cafe/list">
          <C.ReservationImg
            className={inView ? "isActive" : ""}
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        </Link>
        <C.ReservationWrap className={inView ? "isActive" : ""}>
          <Link href="/community/">
            <C.SliderTitle>Community </C.SliderTitle>
          </Link>

          <C.Subtitle>직접 방문한 카페를 공유해보세요.</C.Subtitle>
        </C.ReservationWrap>
      </C.MiddleWrapper>

      <C.MiddleWrapper className={inView ? "isActive" : ""} ref={ref}>
        <C.ReservationWrap className={inView ? "isActive" : ""}>
          <Link href="/cafe">
            <C.SliderTitle>Reservation </C.SliderTitle>
          </Link>
          <C.Subtitle>
            마음에 드는 카페를 찾아서 <br /> 예약하고 편하게 방문하세요.
          </C.Subtitle>
        </C.ReservationWrap>
        <Link href="/cafe/community">
          <C.ReservationImg
            className={inView ? "isActive" : ""}
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          />
        </Link>
      </C.MiddleWrapper>

      <C.BlendedWrap>
        <C.About>
          about us <CoffeeOutlined />
        </C.About>
        <C.BlendedText>BLENDED</C.BlendedText>
        <img src="./CAMO.png" />
      </C.BlendedWrap>
      <C.Footer>
        <div>
          <C.FooterText>Cafe Moment 소개</C.FooterText>
          <C.FooterText>cafemoment.site</C.FooterText>
          <C.FooterText>Contact with Us</C.FooterText>
          <C.FooterText>(000) 8282-1234</C.FooterText>
        </div>
        <C.FooterText2>
          (주)카모 서울특별시 구로구 디지털로 300 13층 Made by 2022 CAMO Corp.
          <br /> © 2022 Betheme by Muffin group | All Rights Reserved | Powered by WordPress
        </C.FooterText2>
      </C.Footer>
    </C.Wrapper>
  );
}
