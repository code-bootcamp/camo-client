import styled from "@emotion/styled";
import Link from "next/link";
import { breakPoints } from "../../../commons/styles/media";

const Wrapper = styled.div`
  width: 100%;
  height: 98vh;
  display: flex;
  justify-content: center;
`;
const MainWrapper = styled.main`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 15rem;
  @media ${breakPoints.mobile} {
    padding-top: 10rem;
  }
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  font-weight: 800;
  font-size: 24px;
  line-height: 20px;
  text-align: center;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

const SubTitle = styled.h3`
  color: #858585;
  padding-bottom: 3rem;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

const Select = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 250px;
  border: 0.5px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
  cursor: pointer;
  :hover {
    background-color: #1e3932;
  }

  :hover label {
    color: white;
  }
`;

const Label = styled.label`
  padding-bottom: 2rem;
  font-weight: 500;
  color: black;
`;

const CafeIcon = styled.img`
  padding-bottom: 10px;
  width: 70px;
  height: 70px;
`;

const UserIcon = styled.img`
  width: 70px;
  height: 70px;
`;

export default function SelectSignUp() {
  return (
    <>
      <Wrapper>
        <MainWrapper>
          <Title>회원가입</Title>
          <SubTitle>사람들이 말하는 자신의 추억이 깃든 이야기들을 들어보세요</SubTitle>
          <RowWrapper>
            <Link href="/login/cafeOwnerSignUp">
              <Select>
                <Label>카페 사장님</Label>
                <CafeIcon src="/images/SignUp/Cafe_Black.svg" />
              </Select>
            </Link>
            <Link href="/login/signUp">
              <Select>
                <Label>일반 회원</Label>
                <UserIcon src="/images/SignUp/User_Black.svg" />
              </Select>
            </Link>
          </RowWrapper>
        </MainWrapper>
      </Wrapper>
    </>
  );
}
