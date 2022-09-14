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
    padding-right: 45vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media ${breakPoints.mobile} {
    width: 42vw;
  }
`;

export const Image = styled.img`
  width: 11.25rem;
  height: 11.25rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  @media ${breakPoints.mobile} {
    width: 50vw;
  }
  @media (max-width: 280px) {
    width: 40vw;
    font-size: 8px;
  }
`;

export const ContentBackGround = styled.section`
  width: 25rem;
  height: 11.25rem;
  background-color: #fff8f0;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
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
`;

export const Title = styled.h1`
  font-family: "NanumSquare_ac";
  font-weight: 800;
  font-size: 0.813rem;
  color: #3c3430;
  @media ${breakPoints.mobile} {
    /* padding-left: 10px; */
    width: 30vw;
    padding-left: 15px;
  }
  @media (max-width: 280px) {
    font-size: 10px;
    width: 30vw;
    /* margin-left: 15px; */
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
    padding-left: 10px;
    width: 15vw;
    font-size: 10px;
  }
  @media (max-width: 280px) {
    font-size: 10px;
    width: 20vw;
  }
`;
