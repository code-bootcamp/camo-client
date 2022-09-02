import styled from "@emotion/styled";

export const LikeWrapper = styled.main`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
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
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const CafeName = styled.div`
  font-weight: 400;
  margin: auto;
  margin-top: 1rem;
`;
