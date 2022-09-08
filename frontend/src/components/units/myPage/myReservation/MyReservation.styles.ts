import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 1.875rem;
  margin-bottom: 1.875rem;
  width: 37.5rem;
  height: 12.5rem;
  background-color: white;
  border-radius: 20px;
  @media ${breakPoints.mobile} {
    width: 50vw;
    height: auto;
    padding-right: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media ${breakPoints.mobile} {
    width: 50vw;
  }
`;

export const Image = styled.img`
  width: 11.25rem;
  height: 11.25rem;
`;

export const ContentBackGround = styled.section`
  width: 25rem;
  height: 11.25rem;
  background-color: #fff8f0;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  margin: auto;
`;

export const Content = styled.main`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.875rem;
  color: #3d3d3d;
`;

export const Title = styled.h1`
  font-family: "NanumSquare_ac";
  font-weight: 800;
  font-size: 0.813rem;
  color: #3c3430;
`;

export const LeftContent = styled.section`
  width: 4rem;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.875rem;
  color: #3d3d3d;
`;

export const RightContent = styled(LeftContent)`
  width: 100%;
  color: #848484;
`;
