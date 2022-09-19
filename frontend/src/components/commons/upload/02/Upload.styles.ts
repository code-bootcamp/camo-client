import styled from "@emotion/styled";
import { breakPoints } from "../../styles/media";

export const UploadImage = styled.div`
  width: 6.6rem;
  height: 6.6rem;
  line-height: 6.6rem;
  margin-right: 25px;
  text-align: center;
  background-color: #eee;
  color: gray;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
  }
`;

export const UploadButton = styled.img`
  width: 6.6rem;
  height: 6.6rem;
  margin-right: 25px;
  background-color: #ddd;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 4rem;
    height: 4rem;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
