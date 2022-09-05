import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* width: 120rem; */
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* padding: 0 15%; */
`;
export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const ImageWrapper = styled.div`
  display: block;
  width: 100vw;
  height: 90rem;
  opacity: 0.9;
  background-image: url("https://images.unsplash.com/photo-1482350325005-eda5e677279b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 767px) {
    // 모바일
    height: 30rem;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0.9;
`;

export const MainTitle = styled.div`
  position: absolute;
  /* z-index: 3; */
  font-size: 6em;

  font-weight: 900;
  color: white;
  top: 20%;
  left: 30%;
  text-align: center;

  @media screen and (max-width: 767px) {
    // 모바일
    font-size: 4em;
  }
`;

//
//
//

export const MiddleWrapper = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;

  .isActive {
    animation: "SliderIsActive" 2s ease-in-out;
    @keyframes SliderIsActive {
      from {
        opacity: 0.1;
        transform: scale(85%);
      }

      to {
        opacity: 1;
        transform: scale(100%);
      }
    }
  }
`;

export const ReservationImg = styled.img`
  width: 50%;
  object-fit: cover;

  /* display: flex; */
  /* width: 55rem;
  height: 34rem; */
  /* width: 100%;
  height: 66rem;
  flex-direction: row;
  justify-content: space-around;
  background-image: url(""); */

  @media screen and (max-width: 767px) {
    // 모바일
    height: 16rem;
  }
`;

export const ReservationWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  cursor: pointer;

  /* display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 55rem;
  height: 34rem; */
`;
export const SliderZoom = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;

  animation: "SliderZoom" 2s ease-in-out infinite alternate;
  @keyframes SliderZoom {
    from {
      opacity: 0.1;
      transform: scale(85%);
    }

    to {
      opacity: 1;
      transform: scale(100%);
      cursor: pointer;
    }
  }
`;

export const SliderTitle = styled.h1`
  text-align: center;
  font-size: 3.3em;
  @media screen and (max-width: 767px) {
    // 모바일
    font-size: 1.5em;
  }
`;

export const Subtitle = styled.div`
  font-size: 1.5em;

  @media screen and (max-width: 767px) {
    // 모바일
    font-size: 0.8em;
  }
`;

export const CommunityWrap = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const BlendedWrap = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 22rem;
  background-color: #5d7572;
  text-align: center;
`;

export const BlendedText = styled.div`
  color: white;
  font-weight: 900;
  font-size: 6rem;

  @media screen and (max-width: 390px) {
    // 모바일
    font-size: 3rem;
  }
`;

export const Footer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 18rem;
  background-color: #3c565b;
`;

export const FooterText = styled.div`
  color: white;
  font-weight: 700;
  font-size: 4.4rem;
  color: white;
  text-align: center;
`;
