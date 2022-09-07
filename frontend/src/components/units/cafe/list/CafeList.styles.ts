import styled from "@emotion/styled";
import "antd/dist/antd.css";
import { StarFilled } from "@ant-design/icons";
import { breakPoints } from "../../../../../styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 44rem;
  padding: 0 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1521494893888-be7d1bf2933d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80");
  background-size: cover;
  @media ${breakPoints.mobile} {
    height: 33rem;
  }
`;

export const LogoBody = styled.div`
  width: 16rem;
  margin-top: 4.4rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  div span {
    font-size: 1.6rem;
  }
`;
export const LogoImage = styled.img`
  width: 14rem;
  margin: 1.2rem;
`;
export const BigTitle = styled.div`
  color: white;
  font-size: 5rem;
  font-weight: 800;
  margin-top: 2.2rem;

  text-align: center;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  animation: "titleText" 1s ease-in-out infinite alternate;
  @keyframes titleText {
    0% {
      transform: translateY(100px);
      opacity: 0;
      scale: 0.5;
    }
    92% {
      transform: translateY(-10);
    }
    100% {
      scale: 1;
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media ${breakPoints.mobile} {
    font-size: 3rem;
  }
`;
export const MiddleText = styled.div`
  color: white;
  width: 60%;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 5.5rem;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);

  animation: "middleText" 0.8s ease-in-out infinite alternate;
  @keyframes middleText {
    from {
      transform: scale(0.9);
    }
    to {
      transform: scale(1);
    }
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const CafeRegisterBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  position: relative;
`;

export const CafeRegister = styled.div`
  width: 8.8rem;
  height: 8.8rem;
  line-height: 8.8rem;
  background-color: #33413e;
  color: white;
  text-align: center;
  font-size: 1rem;
  position: absolute;
  :hover {
    cursor: pointer;
  }

  animation: "MoveCircle" 1s ease-in-out infinite alternate;
  @keyframes MoveCircle {
    from {
      border-radius: 0;
      top: 0;
      background-color: beige;
      color: #33413e;
      transform: scale(0.5);
    }
    to {
      border-radius: 50%;
      top: calc(100% - 10rem);
      background-color: #33413e;
      transform: scale(1);
      font-weight: 800;
    }
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const SearchBarWrap = styled.div`
  width: 100%;
  padding: 0 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 4.4rem;
  background-color: #3c565b;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const SearchText = styled.div`
  font-size: 1rem;
  width: 14%;
  text-align: center;
  color: white;
`;

export const CityBox = styled.div`
  width: 20%;
  font-size: 0.8rem;
  line-height: 2.4rem;
  padding-left: 1rem;
  height: 2.4rem;
  background: white;
`;

export const SearchBtnWrap = styled.div`
  width: 60%;
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SearchBar = styled.div`
  /* width: 18rem; */
  width: 75%;
  padding-left: 1rem;
  line-height: 2.4rem;
  height: 2.4rem;
  background: white;
`;

export const SearchbarBtn = styled.div`
  /* width: 7.7rem; */
  width: 22%;
  height: 2.4rem;
  background: #5d7572;
  font-size: 0.8rem;
  color: white;
  line-height: 2.4rem;
  text-align: center;
  cursor: pointer;
`;
export const PostAllWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 0 15%;
  margin: 1rem 0;

  @media ${breakPoints.mobile} {
  }
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 19rem;
  width: 14.4rem;
  margin: 1rem;
  border: 1px solid #ccc;
  background-color: white;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  :hover {
    transform: scale(1.1);
  }
  cursor: pointer;
  @media screen and (max-width: 767px) {
    // 모바일
    margin: 1rem;
    :hover {
      transform: scale(1);
    }
  }
`;
export const imageBox = styled.div`
  width: 100%;
  height: 50%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DetailImage = styled.div`
  width: 100%;
  height: 100%;

  :hover {
    background: rgba(9, 9, 9, 0.5);
    transform: translateY(0);
    transform: scale(1.1);
    /* filter: blur(0.5px); */
  }
  :hover::after {
    content: "예약하기";
    height: 100%;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.7);
    font-size: 1rem;
    text-align: center;
    line-height: 9rem;
    color: #fff;
    background: rgba(9, 9, 9, 0.5);
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 1s ease-in-out;
  }

  @media screen and (max-width: 767px) {
    // 모바일
    width: 100%;
    height: 100%;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
`;
export const CafeTag = styled.div`
  font-size: 0.7rem;
  font-weight: 400;
  margin-bottom: 0.1rem;
`;

export const CafeName = styled.div`
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 0.1rem;
`;
export const CafeIntro = styled.div`
  font-size: 0.77rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
`;

export const Star = styled(StarFilled)`
  color: red;
  font-size: 0.7rem;
`;

export const CafeRate = styled.span`
  font-size: 0.66rem;
  font-weight: 400;
`;
export const CafeReview = styled.span`
  font-size: 0.66rem;
  font-weight: 400;
  color: steelblue;
`;
export const CafeAddress = styled.div`
  font-size: 0.7rem;
  font-weight: 400;
  margin-top: 0.2rem;
`;

export const NewBtn = styled.div`
  width: 15rem;
  height: 4.4rem;
  background: #5d7572;
  font-size: 1.5rem;
  color: white;
  line-height: 4.4rem;
  text-align: center;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    // 모바일
    display: none;
  }
`;
