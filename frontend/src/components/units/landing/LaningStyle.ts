import styled from "@emotion/styled";
import { breakPoints } from "../../../../styles/media";
import "animate.css";

export const Wrapper = styled.div`
  width: 100%;
`;
export const MainWrapper = styled.div`
  width: 100%;
  height: 60rem;
  position: relative;
`;

export const ImageWrapper = styled.div`
  display: block;
  padding: 0 10%;
  width: 100vw;
  height: 90rem;
  opacity: 0.9;
  background-image: url("https://images.unsplash.com/photo-1482350325005-eda5e677279b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
  background-size: cover;
  background-position: center;

  @media ${breakPoints.mobile} {
    display: none;
  }
  @media ${breakPoints.mobile} {
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0.9;

  @media screen and (max-width: 767px) {
    // 모바일
  }
`;

export const MainTitle = styled.div`
  padding: 0 15%;
  position: absolute;
  top: 20%;
  width: 100%;
  text-align: center;
  font-size: 4em;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  font-weight: 500;
  color: #ddd3c9;

  div {
    color: white;
    font-size: 5.5rem;
    font-weight: 700;
  }

  @media screen and (max-width: 767px) {
    font-size: 4em;
  }
`;
export const MainSmallText = styled.div`
  font-size: 1.6em;
  color: white;
  padding: 0 15%;
  position: absolute;
  top: 66%;
  width: 100%;
  text-align: center;
`;

export const MiddleWrapper = styled.div`
  padding: 0 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 4.4rem 0;

  .isActive {
    display: inline-block;
    margin: 0 0.5rem;
    animation: fadeInDown; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
    /*     
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
    } */
  }
  @media ${breakPoints.mobile} {
  }
`;

export const ReservationImg = styled.img`
  width: 50%;
  height: 25rem;
  object-fit: cover;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    // 모바일
    width: 100%;
  }
`;

export const ReservationWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  position: relative;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const SliderZoom = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;

  animation: "SliderZoom" 2s ease-in-out infinite alternate;
  @keyframes SliderZoom {
    from {
      opacity: 0;
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
  font-size: 3em;
  color: #3c565b;
  font-weight: 800;
  :hover {
    background-color: #3c565b;
    color: white;
    padding: 0 1rem;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Subtitle = styled.div`
  font-size: 1.2em;

  @media ${breakPoints.mobile} {
    display: none;
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
  padding: 0 15%;
  border-top: 1px solid gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 33rem;
  position: relative;
  /* background-color: #5d7572; */
  img {
    display: inline-block;
    background-color: #3c565b;
    width: 18rem;
    margin: 3rem;
  }
`;

export const About = styled.div`
  color: #3c565b;
  font-size: 1.2rem;
  position: absolute;
  top: 15%;
  left: 15%;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const BlendedText = styled.div`
  color: #3c565b;
  font-weight: 900;
  font-size: 3rem;
  margin: 1rem;

  @media screen and (max-width: 390px) {
    // 모바일
    font-size: 2rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15rem;
  background-color: #3c565b;
`;

export const FooterText = styled.span`
  display: inline-block;
  color: white;
  font-size: 0.9rem;
  font-weight: 300;
  margin: 1.3rem;
  cursor: pointer;
`;

export const FooterText2 = styled.span`
  display: inline-block;
  text-align: center;
  color: white;
  margin-top: 1rem;
  font-size: 0.7rem;
  font-weight: 100;
`;
