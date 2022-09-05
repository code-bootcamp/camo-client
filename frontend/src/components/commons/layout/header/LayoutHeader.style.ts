import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  padding: 0 10%;
  /* width: 100vw; */
  height: 8rem;
  background-color: #3c565b;

  /* font-family: "Jua"; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    // 모바일
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #5d7599;
  }
`;

export const Logo = styled.img`
  display: block;
  height: 4rem;
  /* width: 33%; */
  @media screen and (max-width: 767px) {
    // 모바일
    height: 6.6rem;
  }
`;
export const MenuWrapper = styled.div`
  width: 55%;
  display: flex;
  flex-direction: row;
  /* background-color: azure; */
  /* border: 1px solid blue; */

  @media screen and (max-width: 767px) {
    // 모바일
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuFonts = styled.div`
  font-size: 1.1rem;
  padding: 10px;
  font-weight: 700;
  :hover {
    color: white;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  width: 15%;
  /* border: 1px solid red; */
  height: 5rem;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LoginFonts = styled.div`
  color: white;
  font-size: 0.9rem;

  :hover {
    font-weight: 800;
  }
  @media screen and (max-width: 767px) {
    font-size: 0.6rem;
  }
  /* float: right; */
`;
