import Link from "next/link";
import * as S from "./SignUp.styles";
import * as B from "../../../commons/wrapper/LoginWrapper.styles";
import { ISignUpUIProps } from "./SignUp.types";

export default function SignUpUI(props: ISignUpUIProps) {
  return (
    <>
      <B.Wrapper>
        <S.Form onSubmit={props.handleSubmit(props.onClickSubmit)}>
          <S.Wrapper>
            <S.TopMargin />
            <B.Title>회원가입</B.Title>
            <S.SubTitle>사람들이 말하는 자신의 추억이 있는 이야기들을 들어보아요</S.SubTitle>
            <S.Margin />
            <S.RowWrapper>
              <B.Input type="text" placeholder="이름" {...props.register("name")} />
              <S.Empty />
            </S.RowWrapper>
            <S.Error>{props.formState.errors.name?.message}</S.Error>
            <S.RowWrapper>
              <B.Input type="text" placeholder="닉네임" {...props.register("nickName")} />
              <S.Empty />
            </S.RowWrapper>
            <S.Error>{props.formState.errors.nickname?.message}</S.Error>
            <S.RowWrapper>
              <B.Input type="text" placeholder="이메일(아이디)" {...props.register("email")} />
              <S.Button type="button" onClick={props.onClickEmailCheck}>
                중복확인
              </S.Button>
            </S.RowWrapper>
            <S.Error>{props.formState.errors.email?.message}</S.Error>
            <S.RowWrapper>
              <B.Input type="password" placeholder="비밀번호" {...props.register("password")} />
              <S.Empty />
            </S.RowWrapper>
            <S.Error>{props.formState.errors.password?.message}</S.Error>
            <S.RowWrapper>
              <B.Input
                type="password"
                placeholder="비밀번호 확인"
                {...props.register("passwordConfirm")}
              />
              <S.Empty />
            </S.RowWrapper>
            <S.Error>{props.formState.errors.passwordConfirm?.message}</S.Error>
            <S.RowWrapper>
              <B.Input type="tel" placeholder="휴대폰 번호" {...props.register("phoneNumber")} />
              <S.Button type="button" onClick={props.onClickSendAuthNumber}>
                인증번호
              </S.Button>
            </S.RowWrapper>
            <S.Error>{props.formState.errors.phoneNumber?.message}</S.Error>
            <S.RowWrapper>
              <B.Input
                type="text"
                placeholder="인증번호 입력"
                {...props.register("phoneNumberCheck")}
              />
              <S.GreenButton type="button" onClick={props.onClickNumberConfirm}>
                확인
              </S.GreenButton>
            </S.RowWrapper>
            <S.Error>{props.formState.errors.phoneNumberCheck?.message}</S.Error>
            {/* <S.Line /> */}
            {/* <Checkbox /> */}
            <S.SubmitButton>회원가입</S.SubmitButton>
            {/* 여기 약관동의 추가하기(3차) */}
            <S.FooterWrapper>
              <S.FooterText>이미 아이디가 있으신가요?</S.FooterText>
              <Link href="/login">
                <a style={{ color: "black" }}>
                  <S.LoginButton>로그인</S.LoginButton>
                </a>
              </Link>
            </S.FooterWrapper>
          </S.Wrapper>
          <S.Margin />
        </S.Form>
      </B.Wrapper>
    </>
  );
}
