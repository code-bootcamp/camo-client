import * as S from "./Login.styles";
import { ILoginUIProps } from "./Login.types";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <>
      <form onSubmit={props.handleSubmit(props.onClickLogin)}>
        <S.Wrapper>
          <S.Title>로그인</S.Title>
          <S.MainWrapper>
            <S.RadioWrapper>
              <S.RadioInputWrapper>
                <S.Radio type="radio" />
                <S.Text>카페 사장님</S.Text>
              </S.RadioInputWrapper>
              <S.RadioInputWrapper>
                <S.Radio type="radio" /> <S.Text>일반 회원</S.Text>
              </S.RadioInputWrapper>
            </S.RadioWrapper>
            <S.Input type="text" placeholder="이메일(아이디)" {...props.register("email")} />
            <S.Input type="password" placeholder="비밀번호" {...props.register("password")} />
            <S.SocialLoginWrapper>
              <S.SocialLogin src="/Kakao.png" />
              <S.SocialLogin src="/Naver.png" />
              <S.SocialLogin src="/Facebook.png" />
            </S.SocialLoginWrapper>
            <S.ButtonWrapper>
              <S.SubmitButton>로그인</S.SubmitButton>
            </S.ButtonWrapper>
            <S.FooterWrapper>
              <S.RowWrapper>
                <S.FooterText>아직 계정이 없으신가요?</S.FooterText>
                <S.FooterButton>회원가입</S.FooterButton>
              </S.RowWrapper>
              <S.RowWrapper>
                <S.FooterText>아이디를 잊으셨나요?</S.FooterText>
                <S.FooterButton>아이디 찾기</S.FooterButton>
              </S.RowWrapper>
              <S.RowWrapper>
                <S.FooterText>비밀번호를 잊으셨나요?</S.FooterText>
                <S.FooterButton>비밀번호 찾기</S.FooterButton>
              </S.RowWrapper>
            </S.FooterWrapper>
          </S.MainWrapper>
        </S.Wrapper>
      </form>
    </>
  );
}
