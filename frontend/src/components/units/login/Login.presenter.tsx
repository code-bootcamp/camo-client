import * as S from "./Login.styles";
import * as B from "../../commons/wrapper/LoginWrapper.styles";
import { ILoginUIProps } from "./Login.types";
import { Error } from "./signUp/SignUp.styles";
import Link from "next/link";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <>
      <B.Wrapper>
        <B.SideWrapper>
          <B.ColumnWrapper>
            <B.SubLogo>당신이 원하는 카페들을 모은</B.SubLogo>
            <B.SideLogo src="/CAMO.png" />
          </B.ColumnWrapper>
        </B.SideWrapper>
        <form onSubmit={props.handleSubmit(props.onClickLogin)}>
          <S.Wrapper>
            <S.Title>로그인</S.Title>
            <S.SubTitle>당신이 아는 카페들을 모은 카모</S.SubTitle>
            <S.MainWrapper>
              <B.Input type="text" placeholder="이메일(아이디)" {...props.register("email")} />
              <Error>{props.formState.errors.email?.message}</Error>
              <B.Input type="password" placeholder="비밀번호" {...props.register("password")} />
              <Error>{props.formState.errors.password?.message}</Error>
              <S.SocialLoginWrapper>
                <B.SocialLogin src="/Kakao.png" />
                <B.SocialLogin src="/Naver.png" />
                <B.SocialLogin src="/Facebook.png" />
              </S.SocialLoginWrapper>
              <S.ButtonWrapper>
                <S.SubmitButton>로그인</S.SubmitButton>
              </S.ButtonWrapper>
              <S.FooterWrapper>
                <S.RowWrapper>
                  <S.FooterText>아직 계정이 없으신가요?</S.FooterText>
                  <Link href="/login/signUp">
                    <S.FooterButton>
                      <a>회원가입</a>
                    </S.FooterButton>
                  </Link>
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
      </B.Wrapper>
    </>
  );
}
