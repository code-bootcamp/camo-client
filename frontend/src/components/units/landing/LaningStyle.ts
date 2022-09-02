import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* width: 120rem; */
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15%;
`;
export const MainWrapper = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid purple; */
  font-size: 5vw;
`;

export const ImageWrapper = styled.div`
  display: block;
  width: 100vw;
  height: 90rem;
  opacity: 0.9;
  background-image: url("https://images.unsplash.com/photo-1482350325005-eda5e677279b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 399px) {
    // 모바일
    height: 30rem;
  }
  @media (min-width: 400px) and (max-width: 991px) {
    height: 60rem;
  }
`;

// export const MainImage = styled.div`
//   display: block;
//   width: 100%;
//   height: 100%;
//   opacity: 0.9;
//   /* position: absolute; */
// `;

// 타이틀 위치값 어떻게 주나요?
export const MainTitle = styled.div`
  font-size: 2em;
  font-weight: 900;
  color: white;
  text-align: center;
`;

export const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20%;
  width: 100vw;
  height: 82rem;
`;

export const ReservationWrap = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: space-around;
  width: 55rem;
  height: 34rem;
`;

export const ReservationImg = styled.img`
  display: flex;
  /* width: 55rem;
  height: 34rem; */
  width: 100%;
  height: 66rem;
  flex-direction: row;
  justify-content: space-around;
  background-image: url("");

  @media (min-width: 400px) and (max-width: 991px) {
    height: 50rem;
  }
  @media screen and (max-width: 399px) {
    // 모바일
    height: 16rem;
  }
`;

export const CommunityWrap = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const BlendedWrap = styled.div`
  width: 100vw;
  height: 33rem;
  background-color: #5d7572;
`;

export const Blended = styled.div`
  color: white;
  font-weight: 900;
  font-size: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 390px) {
    // 모바일
    font-size: 3rem;
  }
`;

export const Footer = styled.div`
  width: 70%;
  background-color: #ccc;
`;
