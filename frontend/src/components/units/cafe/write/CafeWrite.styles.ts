import styled from "@emotion/styled";
import "antd/dist/antd.css";
import { StarFilled } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background-color: white;
  margin: 5rem;
  padding: 5rem;
  /* padding: 0 15%; */
`;
export const Title = styled.div`
  font-size: 4rem;
  font-weight: 700;
  padding-bottom: 5rem;
  padding-right: 2rem;
  display: inline-block;
`;

export const Text = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
  padding-bottom: 1.2rem;
`;
export const LableBox = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 6rem;
  margin-bottom: 3rem;
`;

export const Lable = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  padding-right: 3rem;
  width: 15rem;
`;

export const InputBox = styled.input`
  border: 0.07rem solid #555;
  height: 6rem;
  width: 75rem;
  padding-left: 2rem;
  font-size: 1.3rem;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* display: block; */
`;

export const Zipcode = styled.input`
  height: 6rem;
  width: 15rem;
  padding-left: 2rem;
  font-size: 1.3rem;
  border: 0.06rem solid #555;
  margin-right: 2rem;
`;

export const BR = styled.br``;
export const AddressButton = styled.div`
  width: 17rem;
  height: 6rem;
  border: none;
  background: #33413e;
  font-size: 2rem;
  color: white;
  line-height: 6rem;
  text-align: center;
  cursor: pointer;
`;

export const WebeditorBox = styled.div`
  border: 0.07rem solid #555;
  height: 60rem;
  width: 75rem;
  padding-left: 2rem;
  font-size: 1.3rem;
`;

export const RegisterBtn = styled.div`
  width: 12rem;
  height: 4.8rem;
  background: #5d7572;
  font-size: 2rem;
  border-radius: 0.5rem;
  color: white;
  line-height: 4.8rem;
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
