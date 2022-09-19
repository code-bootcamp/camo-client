import * as S from "./Login.styles";
import * as B from "../../commons/wrapper/LoginWrapper.styles";
import { ILoginUIProps } from "./Login.types";
import { Error, Form } from "./signUp/SignUp.styles";
import Link from "next/link";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <>
      <B.Wrapper>
        <Form onSubmit={props.handleSubmit(props.onClickLogin)}>
          <S.Wrapper>
            <B.Title>로그인</B.Title>
            <S.SubTitle>당신이 아는 카페들을 모은 카모</S.SubTitle>
            <S.MainWrapper>
              <B.Input type="text" placeholder="이메일(아이디)" {...props.register("email")} />
              <Error>{props.formState.errors.email?.message}</Error>
              <B.Input type="password" placeholder="비밀번호" {...props.register("password")} />
              <Error>{props.formState.errors.password?.message}</Error>
              <B.ButtonWrapper>
                <B.SubmitButton>로그인</B.SubmitButton>
              </B.ButtonWrapper>
              <S.SocialLoginWrapper>
                <B.SocialA href="https://cafemoment-backend.site/login/google">
                  <S.SocialLogin src="https://static.gabia.com/responsive/assets/images/accounts/icon_google.svg" />
                </B.SocialA>
                <B.SocialA href="https://cafemoment-backend.site/login/kakao">
                  <S.SocialLogin src="https://static.gabia.com/responsive/assets/images/accounts/icon_kakao.svg" />
                </B.SocialA>
                <B.SocialA href="https://cafemoment-backend.site/login/naver">
                  <S.SocialLogin src="https://static.gabia.com/responsive/assets/images/accounts/icon_naver.svg" />
                </B.SocialA>
              </S.SocialLoginWrapper>
              <S.FooterWrapper>
                <S.RowWrapper>
                  <S.FooterText>아직 계정이 없으신가요?</S.FooterText>
                  <Link href="/login/signUp">
                    <S.FooterButton>
                      <a style={{ color: "black" }}>회원가입</a>
                    </S.FooterButton>
                  </Link>
                </S.RowWrapper>
                <S.RowWrapper>
                  <S.FooterText>아이디를 잊으셨나요?</S.FooterText>
                  <Link href="/login/findId">
                    <S.FooterButton>
                      <a style={{ color: "black" }}>아이디 찾기</a>
                    </S.FooterButton>
                  </Link>
                </S.RowWrapper>
                <S.RowWrapper>
                  <S.FooterText>비밀번호를 잊으셨나요?</S.FooterText>
                  <Link href="/login/findPassword">
                    <S.FooterButton>
                      <a style={{ color: "black" }}>비밀번호 찾기</a>
                    </S.FooterButton>
                  </Link>
                </S.RowWrapper>
              </S.FooterWrapper>
            </S.MainWrapper>
          </S.Wrapper>
        </Form>
      </B.Wrapper>
    </>
  );
}
