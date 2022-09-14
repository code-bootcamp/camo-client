import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import styled from "@emotion/styled";
import "antd/dist/antd.css";
import { breakPoints } from "../../../../../styles/media";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8%;
  @media ${breakPoints.mobile} {
    padding: 3rem;
  }
`;

export const Title = styled.div`
  width: 1200px;
  font-size: 2.2rem;
  font-weight: 700;
  color: #33413e;
  padding-bottom: 4rem;
  span {
    margin-left: 2rem;
    font-size: 1.3rem;
    font-weight: 400;
    padding-bottom: 1.2rem;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 1.3rem;
    padding-bottom: 1.4rem;
    span {
      display: none;
    }
  }
`;

export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  border: 1px solid #ddd;
  padding: 5rem;
  @media ${breakPoints.mobile} {
    width: 100%;
    border-radius: 1rem;
    padding: 1.6rem;
  }
`;
export const LabelBox = styled.div`
  display: flex;
  flex-direction: row;
  color: #33413e;
  line-height: 2rem;
  margin-bottom: 1.8rem;
  /* background-color: beige; */
  @media ${breakPoints.mobile} {
    width: 100%;
    flex-direction: column;
    line-height: 0;
  }
`;

export const Label = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  width: 13rem;
  line-height: 4rem;
  /* background-color: pink; */
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1rem;
  }
`;

export const InputBox = styled.input`
  border: none;
  border-bottom: 0.07rem solid #555;
  height: 3.3rem;
  width: 44rem;
  padding-left: 1.2rem;
  font-size: 1.1rem;
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 0.7rem;
    height: 2rem;
    margin: 0.5rem;
  }
`;

export const ImageWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputShortBox = styled.input`
  border: none;
  border-bottom: 0.07rem solid #555;
  height: 3.3rem;
  width: 12rem;
  margin-right: 1.2rem;
  padding-left: 1.2rem;
  font-size: 1.1rem;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* display: block; */
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const Zipcode = styled.input`
  height: 3.3rem;
  width: 8.8rem;
  padding-left: 1.2rem;
  font-size: 1.2rem;
  border: none;
  border-bottom: 0.06rem solid #555;
  margin-right: 2rem;
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 0.7rem;
    height: 2rem;
    margin: 0.6rem;
    padding-left: 0.5rem;
  }
`;

export const BR = styled.br``;
export const AddressButton = styled.button`
  margin-top: 0.3rem;
  width: 8rem;
  height: 3rem;
  border: none;
  background: #33413e;
  font-size: 1rem;
  color: white;
  line-height: 3rem;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 6rem;
    height: 2.2rem;
    line-height: 2.2rem;
    font-size: 0.6rem;
  }
`;

export const WebeditorBox = styled.div`
  /* border: 0.07rem solid #555; */
  height: 22rem;
  width: 44rem;
  margin-top: 1.2rem;
  font-size: 1rem;
  color: gray;
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 0.7rem;
    flex-direction: column;
    padding: 1rem;
  }
`;

export const ContentsReactQuill = styled(ReactQuill)`
  width: 100%;
  height: 90%;
`;
export const Form = styled.form`
  width: 100%;
`;
export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.8rem;
`;

export const BottomWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 1200px;
  margin-top: 2rem;
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 1rem;
    font-weight: 300;
    margin: 0;
  }
`;
export const RegisterBtn = styled.div`
  width: 7rem;
  height: 2.5rem;
  background: #33413e;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  color: white;
  line-height: 2.5rem;
  text-align: center;
  margin: 0.5rem;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    height: 2.2rem;
    line-height: 2.2rem;
    width: 5rem;
    font-size: 0.8rem;
    font-weight: 300;
    margin-top: 1.2rem;
  }
`;

export const CancelBtn = styled.button`
  width: 7rem;
  height: 2.5rem;
  background: #aaa;
  border: none;
  font-size: 1.3rem;
  border-radius: 0.5rem;
  color: #fff;
  text-align: center;
  margin: 0.5rem;

  cursor: pointer;
`;
