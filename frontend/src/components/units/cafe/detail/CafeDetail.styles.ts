import styled from "@emotion/styled";
import "antd/dist/antd.css";
import { breakPoints } from "../../../../../styles/media";

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 1500px;
  padding: 10%;
  font-family: "Cafe24Ohsquare";
  @media ${breakPoints.mobile} {
    padding: 3rem;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 7.7rem;
  /* border: 1px solid gray; */
  width: 1200px;
  /* background-color: pink; */
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: red; */
  font-size: 2.5rem;
  font-weight: 900;
  color: #33413e;
  /* font-family: "KOTRA_BOLD-Bold"; */

  span {
    line-height: 3rem;
    font-size: 1.2rem;
    text-align: right;
    cursor: pointer;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 1.3rem;
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
    height: 28rem;
  }

  img {
    background-color: #eee;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const ImgSmallBox = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  height: 6em;
  /* background-color: yellow; */
  /* border: 1px solid red; */
  img {
    width: 7rem;
    /* height: 6rem; */
    object-fit: cover;
    background-color: #999;
    margin-right: 1rem;
  }
`;

export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1200px;
  /* background-color: green; */
  @media ${breakPoints.mobile} {
    width: 100%;
    border-radius: 1rem;
    padding: 1.6rem;
  }
`;

export const CafeDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 33rem;
  padding: 0 2rem;
  /* border: 0.06rem solid #555; */
`;
export const Favorite = styled.div`
  height: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  /* background-color: blue; */
`;

export const BtnPick = styled.div`
  cursor: pointer;
  width: 5.5rem;
  font-size: 20px;
  border: none;
  color: ${(props: any) => (props.isActive === true ? "tomato" : "#33413e")};
`;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 19rem;
  /* background-color: aliceblue; */
  /* border: 0.06rem solid #555; */
`;
export const Label = styled.div`
  display: flex;
  flex-direction: row;
  width: 40rem;
  font-size: 1.4rem;
  line-height: 1.4rem;
  font-weight: 800;
  margin-bottom: 0.7rem;

  span {
    font-size: 1.1rem;
    font-weight: 400;
    margin-left: 1rem;
  }
`;

export const Label2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 4rem 0;
  text-align: center;

  div {
    font-size: 1.1rem;
    font-weight: 400;
    padding: 1.5rem;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  /* border: 1px solid grady; */
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
  }
`;
export const MapWrapper = styled.div`
  background-color: #eee;
  border: 1px solid gray;
  width: 80%;
  height: 33rem;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: flex-end;
  height: 6rem;
`;
export const ReserveBtn = styled.div`
  width: 8rem;
  border-radius: 0.5rem;
  height: 3rem;
  background: #5d7572;
  font-size: 1.2rem;
  color: white;
  line-height: 3rem;
  text-align: center;
  cursor: pointer;
  :hover {
    color: gold;
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
`;
//

export const BigTitle = styled.div`
  color: white;
  font-size: 4.4rem;
  font-weight: 900;
  text-align: center;
  margin-top: 10rem;

  @media screen and (max-width: 767px) {
    // 모바일
    font-size: 3.25rem;
  }
`;
export const MiddleText = styled.div`
  color: white;
  width: 50%;
  font-size: 2.2rem;
  font-weight: 400;
  text-align: center;
  margin-top: 10rem;
  @media screen and (max-width: 767px) {
    // 모바일
    font-size: 1.25rem;
  }
`;
export const SearchBarWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 9rem;
  background-color: #33413e;
`;
