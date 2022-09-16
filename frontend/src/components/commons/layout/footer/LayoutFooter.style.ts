import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 18rem;
  background-color: #786d5f;
`;

export const FooterText = styled.span`
  display: inline-block;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  margin: 1.3rem;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    font-size: 0.6rem;
  }
`;

export const FooterText2 = styled.span`
  display: inline-block;
  text-align: center;
  color: white;
  margin-top: 1rem;
  font-size: 0.7rem;
  font-weight: 100;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
