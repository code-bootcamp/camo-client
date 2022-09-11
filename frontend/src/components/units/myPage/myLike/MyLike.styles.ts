import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const LikeWrapper = styled.main`
  /* width: 80%;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr; */
  /* grid-gap: 1rem; */
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  width: 60%;
  flex-wrap: wrap;
  padding-right: 10px;

  @media ${breakPoints.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CafeImage = styled.img`
  width: 10rem;
  height: 10rem;
  display: block;
  margin: auto;
`;

export const CafeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 2rem;
  margin-bottom: 32px; */
  margin: 1rem;
`;

export const CafeName = styled.h4`
  font-weight: 400;
  margin: auto;
  margin-top: 1rem;
`;

export const CafeDetail = styled.h5`
  font-size: 10px;
  line-height: 10px;
  color: #848484;
  margin: auto;
  margin-top: 0.5rem;
`;

export const HeartIcon = styled(HeartFilled)`
  color: #ee8383;
  padding-left: 50px;
`;
