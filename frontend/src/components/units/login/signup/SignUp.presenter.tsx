import * as S from "./SignUp.styles";
export default function SignUpUI() {
  return (
    <>
      <S.Wrapper>
        <S.Title>회원가입</S.Title>
        <S.MainWrapper>
          <S.Margin />
          <S.RowWrapper>
            <S.Label>이름</S.Label>
            <S.Input />
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Label>닉네임</S.Label>
            <S.Input />
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Label>이메일</S.Label>
            <S.Input />
            <S.Button>중복확인</S.Button>
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Input />
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Label>비밀번호확인</S.Label>
            <S.Input />
            <S.Button>인증번호</S.Button>
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Label>휴대폰번호</S.Label>
            <S.Input />
            <S.GreenButton>확인</S.GreenButton>
          </S.RowWrapper>
          <S.Margin />
          <S.FooterWrapper>
            <S.FooterText>이미 아이디가 있으신가요?</S.FooterText>
            <S.LoginButton>로그인</S.LoginButton>
          </S.FooterWrapper>
          <S.Margin />
        </S.MainWrapper>
      </S.Wrapper>
    </>
  );
}
