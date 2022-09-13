import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  /* margin-bottom: 1.25rem; */
  margin-right: 4rem;

  @media ${breakPoints.mobile} {
    width: 80vw;
    margin: auto;
    /* padding-left: 4rem; */
  }
`;
