import styled from "@emotion/styled";
import Link from "next/link";

const Wrapper = styled.div`
  width: 100%;
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
`;

const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 28px;
  line-height: 35px;
  font-weight: 500;
  letter-spacing: -1px;
  color: rgb(51, 51, 51);
`;

const SubTitle = styled.h3`
  color: #858585;
  padding-bottom: 3rem;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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
  /* background-color: pink; */
  cursor: pointer;
  :hover {
    background-color: #33413e;
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
                <CafeIcon src="/images/signUp/Cafe_Black.svg" />
                {/* <CafeIcon src="/images/SignUp/Cafe_White.svg" /> */}
              </Select>
            </Link>
            <Link href="/login/signUp">
              <Select>
                <Label>일반 회원</Label>
                <UserIcon src="/images/signUp/User_Black.svg" />
                {/* <UserIcon src="/images/SignUp/User_White.svg" /> */}
              </Select>
            </Link>
          </RowWrapper>
        </MainWrapper>
      </Wrapper>
    </>
  );
}
