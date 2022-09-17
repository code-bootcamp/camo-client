import { CommentOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
  @media ${breakPoints.mobile} {
    padding: 5%;
    width: 100%;
  }
`;

export const BodyWrapper = styled.div`
  width: 80%;
  padding: 5% 0 0 0;
  @media ${breakPoints.mobile} {
  }
`;

export const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;

export const CommentIcon = styled(CommentOutlined)`
  font-size: 24px;
  color: burlywood;
`;

export const CommentTitle = styled.div`
  font-size: 1.2rem;
  color: #484848;
  opacity: 0.7;
  margin-left: 10px;
  font-weight: 500;
  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

export const WrapContents = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 161px; */
`;

export const ContentsInput = styled.input`
  width: 100%;
  height: 120px;
  padding-left: 20px;
  font-size: 1rem;
  border: 1px solid #bdbdbd;
  border-radius: 8px 8px 0px 0px;
  border-bottom: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 0.8rem;
    color: #bdbdbd;
  }
  @media ${breakPoints.tablet} {
    &::placeholder {
      font-size: 0.8rem;
      color: #bdbdbd;
    }
  }
  @media ${breakPoints.mobile} {
    &::placeholder {
      font-size: 0.8rem;
      color: #bdbdbd;
      word-break: keep-all;
      white-space: normal;
    }
  }
`;

export const WrapLength = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #bdbdbd;
  background-color: #fff;
  height: 55px;
  border-radius: 0px 0px 8px 8px;
`;

export const Length = styled.div`
  width: 90%;
  color: #bdbdbd;
  display: flex;
  align-items: center;
  padding-left: 20px;
  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export const CommentButton = styled.div`
  border: none;
  width: 100px;
  background-color: #33413e;
  color: #fff;
  border-radius: 7px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
    width: 100px;
  }
`;

export const CancelButton = styled.div`
  border: 1px solid #33413e;
  width: 100px;
  background-color: #fff;
  color: #33413e;
  border-radius: 7px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
    width: 100px;
  }
`;
