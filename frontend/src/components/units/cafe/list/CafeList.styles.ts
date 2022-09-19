import styled from "@emotion/styled";
import "antd/dist/antd.css";
import { StarFilled } from "@ant-design/icons";
import { breakPoints } from "../../../../../styles/media";
import "animate.css";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
  }
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1521494893888-be7d1bf2933d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80");
  background-size: cover;
  margin-bottom: 2rem;
  @media ${breakPoints.mobile} {
    height: 33rem;
  }
`;

export const LogoBody = styled.div`
  width: 30rem;
  margin-top: 5rem;
  color: white;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  text-align: center;
  div span {
    font-size: 1.6rem;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    flex-direction: column;
  }
`;
export const LogoImage = styled.img`
  width: 10rem;
  margin: 1rem;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const BigTitle = styled.div`
  color: white;
  font-size: 6rem;
  font-weight: 800;
  margin: 3rem 0;
  text-align: center;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  /* animation: "titleText" 1s ease-in-out infinite alternate;
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
  } */

  @media ${breakPoints.mobile} {
    font-size: 3rem;
  }
`;
export const MiddleText = styled.div`
  color: white;
  width: 60%;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 4rem;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  animation: "middleText" 0.8s ease-in-out;
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
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-right: 10rem;
  position: fixed;
  text-align: center;
  right: 0%;
  bottom: 33%;
  z-index: 99;
  line-height: 5.5rem;
  cursor: pointer;
  /* 
  div {
    :hover {
      animation: "middleText" 0.8s ease-in-out;
      @keyframes middleText {
        from {
          transform: scale(0.5);
        }
        to {
          transform: scale(1);
        }
      }
    }
  } */
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const CafeRegister = styled.div`
  width: 6rem;
  height: 6rem;
  line-height: 6rem;
  border-radius: 99rem;
  background-color: #1e3932;
  box-shadow: 3px 3px 9px rgba(1, 1, 1, 0.5);
  color: white;
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  position: absolute;

  a div {
    color: white;
  }
  :hover {
    font-size: 3.3rem;
    line-height: 5.5rem;
  }
  /* div { */
  /* :hover { */
  /* color: white; */
  /* font-size: 3rem; */
  /* display: none; */
  /* animation: "middleText" 0.8s ease-in-out;
      @keyframes middleText {
        from {
          transform: scale(0.8);
        }
        to {
          transform: scale(1);
        }
      } */
  /* } */
  /* } */
  /* :hover::after {
    content: "예약하기";
    height: 60%;
  } */
  @media ${breakPoints.mobile} {
    display: none;
  }

  /* :hover {
    cursor: pointer;
    animation: jello;
    animation-duration: 1s;
  } */

  /* animation: "MoveCircle" 1s ease-in-out infinite alternate;
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
  } */

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
  /* background-color: #3c565b; */
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

export const SearchBar = styled.input`
  /* width: 18rem; */
  width: 75%;
  padding-left: 1rem;
  line-height: 2.4rem;
  height: 2.4rem;
  background: white;
  border: none;
`;

export const SearchbarBtn = styled.div`
  /* width: 7.7rem; */
  width: 22%;
  height: 2.4rem;
  /* background: #5d7572; */
  font-size: 1rem;
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
  padding: 0 10%;
  margin: 1rem 0;

  @media ${breakPoints.mobile} {
    padding: 0 5%;
    /* border: 1px solid gray; */
  }
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 19rem;
  width: 14.7rem;
  margin: 1.1rem;
  border: 1px solid #ddd;
  /* box-shadow: 0 100px 100px 10px #ddd; */

  background-color: white;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
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
  background-color: #ddd;

  :hover {
    background: rgba(9, 9, 9, 0.5);
    transform: translateY(0);
    transform: scale(1.1);
    /* filter: blur(0.5px); */
  }
  :hover::after {
    content: "예약하기";
    height: 100%;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
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
  display: flex;
  .zzim {
    position: absolute;
    top: 10rem;
    right: 0.3rem;
    width: 2.5rem;
    height: 2rem;
    text-align: center;
    display: inline;
  }
`;
export const TagsWrap = styled.div`
  display: flex;
`;
export const CafeTag = styled.span`
  /* background-color: red; */
  font-size: 0.7rem;
  font-weight: 400;
  margin-right: 0.5rem;
  margin-bottom: 0.1rem;
  color: steelblue;
`;

export const CafeName = styled.div`
  font-size: 1rem;
  font-weight: 800;
  margin: 0.3rem 0;
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

export const Remarks = styled.span`
  font-size: 0.77rem;
  font-weight: 400;
`;
export const Date = styled.span`
  font-size: 0.44rem;
  font-weight: 400;
  color: steelblue;
  text-align: right;
  margin-top: 0.3rem;
`;

export const CafeAddress = styled.div`
  font-size: 0.7rem;
  font-weight: 400;
  margin-top: 0.2rem;
`;
