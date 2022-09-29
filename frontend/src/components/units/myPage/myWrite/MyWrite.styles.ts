import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 1.875rem;
  margin-bottom: 1.875rem;
  width: 40vw;
  background-color: white;
  border-radius: 20px;

  @media ${breakPoints.mobile} {
    width: 50vw;
    display: flex;
    font-size: 10px;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media ${breakPoints.mobile} {
    width: 70vw;
  }
`;

export const ContentBackGround = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 2px;
  border: 0.5px solid gray;

  display: inline-block;
  font-size: 1.083em;
  font-weight: bold;
  margin-bottom: 5px;
  padding-top: 10px;
  padding-bottom: 10px;

  @media (max-width: 280px) {
    width: 50vw;
  }
`;

export const ContentWrapper = styled.div`
  width: 90%;
  margin: auto;
  @media (max-width: 280px) {
    width: 50vw;
  }
`;

export const Content = styled.main`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.875rem;
  color: #3d3d3d;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.25rem;
  color: #3c3430;
  @media ${breakPoints.mobile} {
    width: 70vw;
    font-size: 1.25rem;
    padding-left: 15px;
  }
`;

export const LeftContent = styled.section`
  width: 4rem;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.875rem;
  color: #3d3d3d;
  @media ${breakPoints.mobile} {
    padding-left: 15px;
    width: 17vw;
  }
  @media (max-width: 280px) {
    font-size: 10px;
    width: 20vw;
  }
`;

export const RightContent = styled(LeftContent)`
  width: 100%;
  color: #848484;
  @media ${breakPoints.mobile} {
    display: inline-block;
    width: 60vw;
    padding-left: 10px;
    font-size: 10px;
    height: 100px;
    overflow: hidden;
  }
  @media (max-width: 280px) {
    font-size: 10px;
    width: 20vw;
  }
`;
