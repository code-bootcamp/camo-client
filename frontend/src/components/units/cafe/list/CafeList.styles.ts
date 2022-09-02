import styled from "@emotion/styled";
import "antd/dist/antd.css";
import { StarFilled } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0 15%; */
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 44rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.9;
  background-image: url("https://images.unsplash.com/photo-1518685101044-3b5a4e7580a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80");
  /* background-image: url("https://images.unsplash.com/photo-1583354608715-177553a4035e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"); */

  /* justify-content: space-around; */
  /* border: 1px solid blue; */
`;

export const BigTitle = styled.div`
  color: white;
  font-size: 6.25rem;
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
export const SearchText = styled.div`
  font-size: 1.8rem;
  color: white;
`;

export const CityBox = styled.div`
  width: 18rem;
  line-height: 4.4rem;
  padding-left: 1.2rem;
  height: 4.4rem;
  background: white;
`;

export const SearchBtnWrap = styled.div`
  width: 47rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SearchBar = styled.div`
  width: 25rem;
  padding-left: 1.2rem;
  line-height: 4.4rem;
  height: 4.4rem;
  background: white;
`;

export const SearchbarBtn = styled.div`
  width: 10rem;
  height: 4.4rem;
  background: #5d7572;
  font-size: 1.5rem;
  color: white;
  line-height: 4.4rem;
  text-align: center;
  cursor: pointer;
`;
export const PostAllWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1.5rem;
`;
export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 35rem;
  width: 26rem;
  margin: 2rem;
  border: 1px solid gray;
  background-color: white;
  cursor: pointer;
`;
export const DetailImage = styled.img`
  width: 26rem;
  height: 18.8rem;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.8rem;
`;
export const CafeTag = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
`;

export const CafeName = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.8rem;
`;
export const CafeIntro = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

export const Star = styled(StarFilled)`
  color: red;
`;

export const CafeRate = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 1.2rem;
`;
export const CafeReview = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 1.2rem;
  color: steelblue;
`;
export const CafeAddress = styled.div`
  margin-top: 1.2rem;
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
`;

// export const @media (min-width: 768px) and (max-width: 991px) {
//   // 태블릿사이즈일떄 위드사이즈를 어떻게 할 것인가
//   width: 500px;
//   height: 500px;
//   background-color: green;
// }

// @media (max-width: 767px) {
//   // 모바일
//   width: 100px;
//   height: 100px;
//   background-color: pink;
//   /* display: none; */
// }
