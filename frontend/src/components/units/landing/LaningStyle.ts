import styled from "@emotion/styled";
import { breakPoints } from "../../../../styles/media";
import "animate.css";
import { MenuOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
`;
export const MainWrapper = styled.div`
  width: 100%;
  height: 77rem;
  position: relative;
`;

export const Logo = styled.h1`
  width: 100%;
  position: absolute;
  top: 0;
  img {
    width: 6rem;
    margin-top: 1.4rem;
    margin-left: 2rem;
  }
  hr {
    width: 100%;
    height: 0.01px;
    background-color: white;
  }
`;

export const MenuTab = styled(MenuOutlined)`
  font-size: 2rem;
  position: absolute;
  top: 2%;
  right: 2%;
  color: white;
  z-index: 4;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: black;
  /* .logo {
    margin: 3rem;
    width: 6.6rem;
    z-index: 3;
    cursor: pointer;
  } */
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0rem;
  opacity: 0.6;
  @media ${breakPoints.mobile} {
  }
`;

export const MainTitle = styled.div`
  padding: 0 15%;
  position: absolute;
  top: 20%;
  width: 100%;
  text-align: center;
  font-size: 4em;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  color: #ddd3c9;
  font-family: "Cafe24Ohsquare";

  /* font-family: "KOTRA_BOLD-Bold"; */

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
  font-size: 2em;
  font-weight: 300;
  line-height: 3rem;
  color: white;
  padding: 0 15%;
  position: absolute;
  top: 66%;
  width: 100%;
  text-align: center;
  font-family: "Cafe24Ohsquare";

  /* font-family: "KOTRA_BOLD-Bold"; */
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
    animation: pulse; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s; /* don't forget to set a duration! */
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ReservationImg = styled.img`
  width: 49%;
  height: 25rem;
  object-fit: cover;
  cursor: pointer;
  @media ${breakPoints.mobile} {
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
  font-family: "KOTRA_BOLD-Bold";
  text-align: center;
  font-size: 3em;
  color: #3c565b;
  font-weight: 800;
  :hover {
    font-size: 3.3rem;
    font-weight: 900;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const Bar = styled.div`
  width: 2rem;
  height: 0.2rem;
  margin-bottom: 2rem;
  background-color: #3c565b;
  display: inline-block;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Subtitle = styled.div`
  /* font-family: "KOTRA_BOLD-Bold"; */
  font-family: "Cafe24Ohsquare";
  font-size: 1.1em;
  font-weight: 100;
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
  /* width: 1200px; */
  font-family: "KOTRA_BOLD-Bold";
  padding: 0 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 4.4rem 0;
  border-top: 1px solid gray;
  display: flex;
  height: 40rem;
  /* position: relative; */
  /* background-color: #5d7572; */
  img {
    display: inline-block;
    background-color: #3c565b;
    width: 22rem;
    height: 100%;
    margin: 5rem 5rem 0 0;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const BottomImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40rem;

  border-top: 1px solid gray;
  background-color: gray;
  position: relative;

  img {
    opacity: 0.7;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  div {
    /* position: absolute;
    right: 0;
    top: 5rem;
    width: 66%;
    margin-right: 15%;
    height: 22rem;
    background: black;
    opacity: 0.6;
    padding: 5% 15% 5% 5%;
    color: white;
    font-size: 1rem; */
  }
  @media ${breakPoints.mobile} {
    display: none;
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

  div {
    font-size: 1rem;
  }
  @media screen and (max-width: 390px) {
    // 모바일
    font-size: 2rem;
  }
`;

export const smallText = styled.div`
  font-size: 1.2rem;
  margin: 1.8rem;
  padding: 2%;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 18rem;
  background-color: #786d5f;
`;

export const FooterText = styled.span`
  display: inline-block;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  margin: 1.3rem;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const FooterText2 = styled.span`
  display: inline-block;
  text-align: center;
  color: white;
  margin-top: 1rem;
  font-size: 0.7rem;
  font-weight: 100;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
