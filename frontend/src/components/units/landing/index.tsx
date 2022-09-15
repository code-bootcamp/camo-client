// 랜딩페이지

import * as C from "./LaningStyle";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import "animate.css";

export default function LandingPage() {
  // {imageSrc, title, subtitle, flipped}

  const [ref, inView] = useInView({
    threshhold: 0.5,
  });

  return (
    <C.Wrapper>
      <C.MainWrapper>
        <C.ImageWrapper>
          <C.MainImage src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80" />
        </C.ImageWrapper>
        <C.Logo>
          <Link href="/login/selectSignUp">
            <a>
              {" "}
              <img src="CAMO.png" />
            </a>
          </Link>
        </C.Logo>
        <C.MenuTab />
        <C.MainTitle>
          당신이 원하는 <br />
          카페들을 모은
          <div>CAMO</div>
        </C.MainTitle>

        <C.MainSmallText>
          <br />
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
          {/* <C.Bar /> */}
          <C.Subtitle>직접 방문한 카페를 공유해보세요.</C.Subtitle>
        </C.ReservationWrap>
      </C.MiddleWrapper>

      <C.MiddleWrapper className={inView ? "isActive" : ""} ref={ref}>
        <C.ReservationWrap className={inView ? "isActive" : ""}>
          <Link href="/cafe">
            <C.SliderTitle>Reservation </C.SliderTitle>
          </Link>
          {/* <C.Bar /> */}
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
        <C.About>{/* <CoffeeOutlined /> */}</C.About>
        <div>
          <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" />
        </div>
        <div>
          <C.BlendedText>BLENDED</C.BlendedText>
          <C.BlendedText>CAMO</C.BlendedText>
        </div>
        <C.smallText>
          Ah.... Gae Him dle da! I want to go home. Hungry Sleepy Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet.
        </C.smallText>
      </C.BlendedWrap>

      <C.BottomImageWrap>
        <img src="https://images.unsplash.com/photo-1506372023823-741c83b836fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
        <div>
          {/* <span>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </span> */}
        </div>
      </C.BottomImageWrap>
      <C.Footer>
        <div>
          <C.FooterText>Cafe Moment 소개</C.FooterText>
          <C.FooterText>cafemoment.site</C.FooterText>
          <C.FooterText>Contact with Us</C.FooterText>
          <C.FooterText>(000) 8282-1234</C.FooterText>
        </div>
        <C.FooterText2>
          평일 10:00~17:00 | 점심시간 12:30~14:00 주말 및 공휴일 휴무
          <br /> <br />
          (주)카모 서울특별시 구로구 디지털로 300 13층 Made by 2022 CAMO Corp.
          <br /> © 2022 Betheme by Muffin group | All Rights Reserved | Powered by WordPress
        </C.FooterText2>
      </C.Footer>
    </C.Wrapper>
  );
}
