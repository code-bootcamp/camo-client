import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  /* border: 5px solid pink; */
  @media screen and (max-width: 767px) {
    width: 50%;
  }
`;

export const SideBar = styled.section`
  width: 30%;
  background-color: #33413e;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding-top: 3rem;
  padding-left: 3rem;
  align-content: space-around;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Body = styled.main`
  width: 70%;
  background-color: white;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const SideMenu = styled.button`
  color: white;
  border: none;

  font-size: 16px;
  width: 11.875rem;
  height: 2.5rem;
  cursor: pointer;
  margin: 0.5rem;
  background: #5d7572;
  border-radius: 10px;
  margin-left: 9rem;
`;

export const StaySideMenu = styled(SideMenu)`
  /* text-decoration: underline; */
  /* text-underline-position: under; */
  font-weight: 700;
  background-color: #6a564f;
`;

export const StayMenu = styled.h3`
  color: black;
  width: 80%;
  margin: auto;
  padding-top: 1.25rem;
  padding-bottom: 0.625rem;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Line = styled.hr`
  border: 0.5px solid #c4c4c4;
  width: 80%;
  display: flex;
  justify-content: center;
  margin: auto;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 3rem;
`;

export const Profile = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 5rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
  display: flex;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.h4`
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 0.625rem;
  color: white;
`;

export const UserButton = styled.button`
  width: 6.2rem;
  height: 1.875rem;
  border: none;
  border-radius: 0.313rem;
  background-color: #6a564f;
  color: white;
`;
