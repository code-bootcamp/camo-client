import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const LikeWrapper = styled.main`
  width: 80%;
  /* height: 100vh; */
  display: grid;
  justify-content: center;
  text-align: start;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin: auto;
  /* display: flex;
  flex-direction: row;
  justify-content: center; */
  width: 60%;
  flex-wrap: wrap;
  /* padding-right: 10px; */

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
  border-radius: 10px;
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
  /* margin: auto; */
  margin-top: 1rem;
  /* display: flex; */
`;

export const CafeDetail = styled.h5`
  font-size: 10px;
  line-height: 10px;
  color: #848484;
  margin-top: 0.5rem;
  text-align: left;
`;

export const HeartIcon = styled(HeartFilled)`
  color: #ee8383;
  /* padding-left: 100px; */
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Body = styled.main`
  width: 60vw;
  /* height: 100vh; */
  background-color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  @media ${breakPoints.mobile} {
    width: 100vw;
    height: 200vh;
    /* margin: auto; */
  }
`;
