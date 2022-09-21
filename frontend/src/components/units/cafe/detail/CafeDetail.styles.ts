import styled from "@emotion/styled";
import "antd/dist/antd.css";
import { breakPoints } from "../../../../../styles/media";
import { Image } from "antd";
import Slider from "react-slick";

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 1500px;
  padding-top: 5%;
  /* background-color: yellow; */
  @media ${breakPoints.mobile} {
    width: 100%;
    /* border: 1px solid black; */
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 7.7rem;
  width: 100%;
  /* background-color: pink; */
  @media ${breakPoints.mobile} {
    /* border: 1px solid red; */
    width: 100%;
    padding: 0;
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5rem;
  padding-left: 1rem;
  /* background-color: black; */
  width: 100%;
  font-size: 2.2rem;
  font-weight: 900;
  color: #1e3932;
  /* font-family: "KOTRA_BOLD-Bold"; */

  span {
    line-height: 3rem;
    font-size: 1.2rem;
    text-align: right;
    cursor: pointer;
    @media ${breakPoints.mobile} {
      font-size: 1rem;
      line-height: 2rem;
      /* background: rebeccapurple; */
    }
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 1.2rem;
    /* background: green; */
  }
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  overflow: hidden;
  width: 50%;
  height: 35rem;
  /* background-color: blue; */
  /* background-image: url("https://images.unsplash.com/photo-1570806879179-3582cdacfb60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"); */
  background-size: contain;
  background-repeat: no-repeat;

  .BigImage {
    width: 96%;
    height: 28rem;
    border: 1px solid #eee;
    box-shadow: 9px 9px 9px 1px rgba(0, 0, 0, 0.1);
    @media ${breakPoints.mobile} {
      /* width: 100%; */
      display: none;
    }
  }

  img {
    height: 93%;
    background-color: #eee;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.1);
    @media ${breakPoints.mobile} {
      width: 100%;
    }
  }
  @media ${breakPoints.mobile} {
    /* width: 100%; */
    display: none;
  }
`;

export const ImgSmallBox = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  justify-content: space-evenly;
  /* height: 6em; */
  /* padding-left: 2.2rem; */
  /* background-color: yellow; */
  img {
    width: 7rem;
    height: 6rem;
    object-fit: cover;
    margin-right: 2.2rem;
    border: 1px solid #eee;
    background-color: white;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    /* background-color: red; */
  }
`;
export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* width: 1200px; */
  /* background-color: green; */
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const CafeDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding: 0 2rem;
  /* background-color: red; */

  /* border: 0.06rem solid #555; */
  @media ${breakPoints.mobile} {
    /* background-color: pink; */
    padding: 0;
    width: 100%;
  }
`;
export const Favorite = styled.div`
  height: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  /* background-color: blue; */
  @media ${breakPoints.mobile} {
    /* background-color: bisque; */
    width: 100%;
    font-size: 1rem;
  }
`;

export const BtnPick = styled.div`
  cursor: pointer;
  width: 10rem;
  padding-left: 1rem;
  font-size: 20px;
  font-weight: 800;
  border: none;
  .zzim {
    /* color: ${(props: any) => (props.isActive === true ? "tomato" : "blue")}; */
  }
  @media ${breakPoints.mobile} {
    /* background-color: bisque; */
    width: 100%;
    font-size: 2rem;
    display: none;
  }
`;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 22rem;
  /* background-color: aliceblue; */
  /* border: 0.06rem solid #555; */
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 1rem;
    height: 90%;
  }
`;
export const Label = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 0.7rem;
  font-size: 1.2rem;
  font-weight: 400;
  margin-left: 1rem;
  color: #333;
  padding-bottom: 0.5rem;
  /* background-color: yellow; */

  .title {
    font-size: 1.4rem;
    line-height: 1.4rem;
    font-weight: 700;
    width: 9rem;
    /* line-height: 2rem; */
    /* background-color: green; */
    @media ${breakPoints.mobile} {
      width: 40%;
      font-size: 1rem;
      font-weight: 600;
      /* background-color: purple; */
    }
  }

  @media ${breakPoints.mobile} {
    /* background-color: bisque; */
    width: 90%;
    font-size: 0.8rem;
    margin-bottom: 0;
    line-height: -1.2rem;
  }
`;

export const Label2 = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 60rem; */
  /* background-color: yellow; */
  /* border-right: 1px solid grey; */
  /* align-items: center; */
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  /* margin: 4rem 0; */
  /* text-align: center; */

  div {
    font-size: 1.1rem;
    font-weight: 500;
    padding: 1.5rem;
    /* background-color: pink; */
    /* text-align: center; */
    @media ${breakPoints.mobile} {
      /* font-size: 0.8rem; */
      /* font-weight: 400; */
      /* padding: 0; */
      text-align: center;
    }
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 1.1rem;
    margin: 0;
    text-align: center;
  }
`;

export const MapTitle = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 55rem; */
  width: 76rem;
  /* align-items: center; */
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  padding: 1.5rem;

  @media ${breakPoints.mobile} {
    width: 100vw;
    font-size: 1.1rem;
    margin: 0;
    text-align: center;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1500px;
  /* background-color: grey; */

  /* border: 1px solid grady; */
  @media ${breakPoints.mobile} {
    width: 100%;
    /* background-color: pink; */
  }
`;

export const ReservationWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 180%;

  /* border: 1px solid red; */
  div {
    width: 50%;
    height: 100%;
    /* border: 1px solid black; */
    @media ${breakPoints.mobile} {
      width: 100%;

      font-size: 0.5rem;
    }
  }
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;
export const MapWrapper = styled.div`
  background-color: #eee;
  border: 1px solid gray;
  width: 50%;
  height: 33rem;

  /* background-color: yellow; */
  @media ${breakPoints.mobile} {
    /* background-color: blue; */
    border: none;
    width: 100%;
    padding: 10%;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;

  /* justify-content: center; */
  align-items: flex-end;
  height: 6rem;
  @media ${breakPoints.mobile} {
    width: 100%;
    flex-direction: column;
  }
`;
export const ReserveBtn = styled.div`
  width: 8rem;
  border-radius: 0.5rem;
  height: 3rem;
  background: #1e3932;
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  line-height: 3rem;
  text-align: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);

  cursor: pointer;
  :hover {
    color: gold;
  }
  @media ${breakPoints.mobile} {
    /* background-color: bisque; */
    display: none;
  }
`;

export const ZzimBtn = styled.div`
  width: 8rem;
  border-radius: 0.5rem;
  height: 3rem;
  background: #1e3932;
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  line-height: 3rem;
  text-align: center;
  margin: 0 1rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);

  cursor: pointer;
  :hover {
    color: gold;
  }
  @media ${breakPoints.mobile} {
    /* background-color: bisque; */
    display: none;
  }
`;

export const CancelBtn = styled.div`
  width: 10rem;
  border-radius: 0.5rem;
  height: 3.3rem;
  background: gray;
  font-size: 1.2rem;
  color: white;
  line-height: 3.3rem;
  text-align: center;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 0.8rem;
  }
`;
//

export const BigTitle = styled.div`
  color: white;
  font-size: 4.4rem;
  font-weight: 900;
  text-align: center;
  margin-top: 10rem;

  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 2rem;
  }
`;
export const MiddleText = styled.div`
  color: white;
  width: 50%;
  font-size: 2.2rem;
  font-weight: 400;
  text-align: center;
  margin-top: 10rem;

  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 0.8rem;
  }
`;

//

export const TestButton = styled.button`
  width: 5rem;
  height: 5rem;
  background-color: pink;
  color: green;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const Container = styled.div`
  height: 20rem;
  width: 20rem;
  @media ${breakPoints.mobile} {
    background-color: red;
    width: 100%;
  }
`;

export const Content = styled.div`
  /* width: 100%; */
  /* height: 100%; */
  height: 5rem;
  width: 5rem;
  background-color: blue;
  color: yellow;
`;

//
//
// 이미지

export const ImageWrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;

  @media (max-width: 575px) {
    width: 80vw;
  }
`;

export const MainImage = styled(Image)`
  width: 30rem;
  /* height: 30vw; */
  object-fit: contain;
  border: 1px solid blue;

  @media (max-width: 575px) {
    width: 60vw;
    height: 60vw;
  }
`;

export const SubImageWrapper = styled.div`
  width: 30vw;
  height: 50vh;
  border: 10px;
  box-shadow: rgb(0 0 0 / 12%) 10px 5px 10px;
  /* box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3); */
  @media (max-width: 575px) {
    width: 60vw;
  }
`;
export const SubImage = styled.img`
  /* display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
  object-fit: cover;
  width: 30vw;
  height: 50vh;
  min-width: 5vw;
  border: 10px;

  @media (max-width: 575px) {
    width: 10vw;
    height: 10vw;
  }

  /* background-color: blue; */
`;

export const StyledSlider = styled(Slider)`
  /* background-color: blue; */
  /* width: 100%; */
  /* height: 100px; */

  .slick-slide slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
  }

  .slick-prev:before {
    font-size: 1.3rem;
    color: #aaa;
  }

  .slick-next:before {
    font-size: 1.3rem;
    color: #aaa;
  }
`;

export const RowWrapper = styled.div`
  /* width: 60rem; */
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 4rem;
  position: relative;
  /* background-color: pink; */
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const ReservationBox = styled.div`
  min-height: 100%;
  top: 0;
  bottom: 0;
  /* position: fixed; */
  /* overflow-y: scroll; */
  /* overflow-x: hidden; */
  right: 5%;
  z-index: 99;
  top: 50%;
`;
