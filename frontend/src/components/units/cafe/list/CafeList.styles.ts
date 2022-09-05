import styled from "@emotion/styled";
import "antd/dist/antd.css";
import { StarFilled } from "@ant-design/icons";

export const Wrapper = styled.div`
  /* width: 100vw; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0 10%; */

  @media screen and (max-width: 767px) {
    // 모바일
    padding: 0;
  }
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 50rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.9;

  background-image: url("https://images.unsplash.com/photo-1533630757306-cbadb934bcb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
  background-image: url("https://images.unsplash.com/photo-1521494893888-be7d1bf2933d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80");
  /* justify-content: space-around; */
  /* border: 1px solid blue; */
  background-size: cover;
  @media screen and (max-width: 767px) {
    // 모바일
    width: 100%;
    height: 100%;
  }
`;

export const BigTitle = styled.div`
  color: white;
  font-size: 5.5rem;
  font-weight: 900;
  text-align: center;
  margin-top: 9rem;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  animation: "titleText" 1s ease-in-out;
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

  @media screen and (max-width: 767px) {
    // 모바일
    font-size: 3.25rem;
  }
`;
export const MiddleText = styled.div`
  color: white;
  width: 50%;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin-top: 10rem;
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

  @media screen and (max-width: 767px) {
    // 모바일
    font-size: 1.25rem;
  }
`;

export const CafeRegisterBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding-right: 7%;
  position: relative;
`;

export const CafeRegister = styled.div`
  width: 12rem;
  height: 12rem;
  line-height: 12rem;
  background-color: #33413e;
  color: white;
  text-align: center;
  font-size: 1.5rem;
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
  @media screen and (max-width: 767px) {
    // 모바일
    display: none;
  }
`;

export const SearchBarWrap = styled.div`
  width: 100%;
  padding: 0 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 6.6rem;
  background-color: #3c565b;
  @media screen and (max-width: 767px) {
    // 모바일
    display: none;
  }
`;
export const SearchText = styled.div`
  font-size: 1.2rem;
  width: 14%;
  text-align: center;
  color: white;
`;

export const CityBox = styled.div`
  width: 20%;
  line-height: 3.3rem;
  padding-left: 1.2rem;
  height: 3.3rem;
  background: white;
`;

export const SearchBtnWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SearchBar = styled.div`
  /* width: 18rem; */
  width: 75%;
  padding-left: 1.2rem;
  line-height: 3.3rem;
  height: 3.3rem;
  background: white;
`;

export const SearchbarBtn = styled.div`
  /* width: 7.7rem; */
  width: 25%;
  height: 3.3rem;
  background: #5d7572;
  font-size: 1.2rem;
  color: white;
  line-height: 3.3rem;
  text-align: center;
  cursor: pointer;
`;
export const PostAllWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 1rem;
  @media screen and (max-width: 767px) {
    // 모바일
  }
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 30rem;
  width: 23rem;
  margin: 1rem;
  border: 1px solid gray;
  background-color: white;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  :hover {
    transform: scale(1.08);
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
    transform: scale(1.1);
    background: rgba(9, 9, 9, 0.5);
    transform: translateY(0);

    /* filter: blur(0.5px); */
  }
  :hover::after {
    content: "예약하기";
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.7);

    font-size: 1.6rem;
    text-align: center;
    line-height: 15rem;
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
  padding: 1.8rem;
`;
export const CafeTag = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

export const CafeName = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;
export const CafeIntro = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const Star = styled(StarFilled)`
  color: red;
`;

export const CafeRate = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
`;
export const CafeReview = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 1.2rem;
  color: steelblue;
`;
export const CafeAddress = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 400;
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
