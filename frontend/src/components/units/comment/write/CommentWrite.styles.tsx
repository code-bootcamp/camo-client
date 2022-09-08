import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 5%;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: gray;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Comment = styled.textarea`
  width: 100%;
  height: 150px;
`;

export const CommentLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  /* padding-left: 20px; */
  color: gray;
`;

export const Btn = styled.button`
  width: 100px;
  background-color: #33413e;
  border: none;
  cursor: pointer;
  color: #fff;
`;
