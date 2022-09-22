import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { breakPoints } from "../../../commons/styles/media";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5% 15%;
`;

export const TopTitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const TopTitle = styled.div`
  font-size: 2.2em;
  font-weight: 800;
  div {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;
export const SubTitle = styled.div``;

export const Form = styled.form`
  width: 100%;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  padding: 5%;
`;

export const Label = styled.div`
  color: #555;
  font-size: 1.5rem;
  padding: 2rem 0 1rem 0;
`;

export const TitleInput = styled.input`
  width: 100%;
  color: #555;
  height: 3rem;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  padding-left: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  :focus {
    outline: none;
  }
`;

export const ImageWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 120px);
  @media ${breakPoints.mobile} {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 120px;
  }
`;

export const TagInput = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  padding-left: 1rem;
  font-size: 1rem;
  :focus {
    outline: none;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const Content = styled.textarea`
  width: 100%;
  height: 300px;
  border: none;
  padding: 0 0 0 1rem;
  font-size: 1.2rem;
  :focus {
    outline: none;
  }
`;

export const AddressTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  margin-top: 1rem;
`;

export const MapAddressWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 15rem;
  margin-bottom: 3rem;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
  }
`;

export const MapWrapper = styled.div`
  width: 40%;
  height: 100%;
  padding: 1%;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 50%;
  }
`;

export const AddressWrapper = styled.div`
  width: 55%;
  padding: 2%;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const AddressInput = styled.input`
  width: 50%;
  height: 2.5rem;
  border: 1px solid #ccc;
  padding-left: 1rem;
  border-radius: 5px;
`;

export const AddressButton = styled.button`
  width: 5rem;
  height: 2.5rem;
  border: none;
  background: #1e3932;
  border-radius: 5px;
  font-size: 1rem;
  color: white;
  line-height: 1rem;
  text-align: center;
  margin-left: 0.3rem;
  cursor: pointer;
`;

export const AddressDetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const AddressDetailInput = styled.input`
  width: 100%;
  height: 2.5rem;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin-bottom: 0.3rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const RegisterBtn = styled.button`
  width: 7.7rem;
  height: 2.5rem;
  background: #1e3932;
  font-size: 1.3rem;
  border-radius: 0.5rem;
  border: none;
  color: #fff;
  text-align: center;
  margin: 0.5rem;
  cursor: pointer;
`;

export const CancelBtn = styled.button`
  width: 7.7rem;
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

export const ContentsReactQuill = styled(ReactQuill)`
  width: 100%;
  div.ql-container {
    height: 430px;
  }
`;
