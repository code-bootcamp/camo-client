import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const UploadImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  margin-right: 24px;
  cursor: pointer;
`;

export const UploadButton = styled.div`
  width: 180px;
  height: 180px;
  background-color: #bdbdbd;
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const Div = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #4f4f4f;
  margin: 5px;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
