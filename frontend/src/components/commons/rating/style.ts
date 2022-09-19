import styled from "@emotion/styled";
import { Rate } from "antd";
import { breakPoints } from "../styles/media";

export const WrapTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 40px 0;
  justify-content: center;
`;

export const WrapStar = styled.div`
  display: flex;
  align-items: center;
`;

export const Rates = styled(Rate)`
  color: #3c565b;
  font-size: 4rem;
  @media ${breakPoints.mobile} {
    font-size: 2rem;
  }
`;

export const CommentIcon = styled.img`
  margin-top: 3px;
  width: 24px;
  height: 24px;
`;

export const CommentTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  margin-left: 10px;
  font-weight: 500;
  color: #555;
  @media ${breakPoints.mobile} {
    font-size: 1.1rem;
  }
`;

export const Star = styled.div`
  font-size: 2rem;
  color: #3c565b;
  margin-left: 10px;
  font-weight: 500;
  @media ${breakPoints.mobile} {
  }
`;

export const WrapContents = styled.div`
  display: flex;
  flex-direction: column;
`;
