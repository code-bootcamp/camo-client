import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  width: 100%;
  padding: 0% 15%;
  height: 10rem;
  color: 33413E;
  background-color: #5d7572;
  line-height: 10rem;
  /* font-family: "Jua"; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MenuWrapper = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* border: 1px solid blue; */
`;

export const MenuFonts = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
`;

export const Logo = styled.img`
  height: 7rem;
  padding-top: 10%;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 10rem;
  padding-bottom: 10%;
  /* border: 1px solid red; */
  height: 5rem;
`;

export const LoginFonts = styled.div`
  color: white;
  font-size: 1.1rem;
  position: absolute;
  top: -3%;
  /* float: right; */
`;
