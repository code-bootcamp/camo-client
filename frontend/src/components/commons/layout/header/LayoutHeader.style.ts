import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  padding: 0 15%;

  width: 100vw;
  height: 10rem;
  color: 33413E;
  background-color: #5d7572;
  line-height: 10rem;
  /* font-family: "Jua"; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 400px) {
    // 모바일
    height: 5rem;
    line-height: 5rem;
  }
`;

export const MenuWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* border: 1px solid blue; */
  @media screen and (max-width: 390px) {
    // 모바일
    width: 20rem;
  }
`;

export const MenuFonts = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  :hover {
    color: white;
  }
  @media screen and (max-width: 390px) {
    // 모바일
    font-size: 0.7rem;
  }
`;

export const Logo = styled.img`
  height: 7rem;
  padding-top: 10%;
  @media screen and (max-width: 390px) {
    // 모바일
    height: 2rem;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 10%;
  padding-bottom: 10%;
  /* border: 1px solid red; */
  height: 5rem;
`;

export const LoginFonts = styled.div`
  color: white;
  font-size: 1.1rem;
  position: absolute;
  top: -3%;
  :hover {
    font-weight: 900;
  }
  @media screen and (max-width: 390px) {
    // 모바일
    font-size: 0.6rem;
  }
  /* float: right; */
`;
