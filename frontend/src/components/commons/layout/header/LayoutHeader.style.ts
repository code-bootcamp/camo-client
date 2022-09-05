import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  padding: 0 10%;
  /* width: 100vw; */
  height: 5rem;
  /* height: 8rem; */
  background-color: #5d7572;
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

export const MobileLogo = styled.img``;

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
  width: 18%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  /* border: 1px solid red; */
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LoginButton = styled.button`
  color: #3c3430;
  font-family: "NanumSquareOTF_ac";
  font-style: normal;
  font-weight: 800;
  font-size: 0.938rem;
  cursor: pointer;
  background-color: white;
  border: none;
  width: 5.313rem;
  height: 1.875rem;
  border-radius: 5px;
  :hover {
    font-weight: 800;
  }
  @media screen and (max-width: 767px) {
    font-size: 0.6rem;
  }
`;

export const LoginUser = styled.h3``;
