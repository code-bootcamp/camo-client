import Link from "next/link";
import * as S from "./SignUp.styles";
import { ISignUpUIProps } from "./SignUp.types";

export default function SignUpUI(props: ISignUpUIProps) {
  return (
    <>
      <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <S.Wrapper>
          <S.Title>회원가입</S.Title>
          <S.MainWrapper>
            <S.Margin />
            <S.RowWrapper>
              <S.Label>이름</S.Label>
              <S.Input type="text" placeholder="이름" {...props.register("name")} />
            </S.RowWrapper>
            <S.Error>{props.formState.errors.name?.message}</S.Error>
            <S.RowWrapper>
              <S.Label>닉네임</S.Label>
              <S.Input type="text" placeholder="닉네임" {...props.register("nickName")} />
            </S.RowWrapper>
            <S.Error>{props.formState.errors.nickname?.message}</S.Error>
            <S.RowWrapper>
              <S.Label>이메일(아이디)</S.Label>
              <S.Input type="text" placeholder="이메일" {...props.register("email")} />
              {/* <S.Button type="button" onClick={props.onClickEmailCheck}>
                중복확인
              </S.Button> */}
            </S.RowWrapper>
            <S.Error>{props.formState.errors.email?.message}</S.Error>
            <S.RowWrapper>
              <S.Label>비밀번호</S.Label>
              <S.Input type="password" placeholder="비밀번호" {...props.register("password")} />
            </S.RowWrapper>
            <S.Error>{props.formState.errors.password?.message}</S.Error>
            <S.RowWrapper>
              <S.Label>비밀번호확인</S.Label>
              {/* <S.Input
                type="password"
                placeholder="비밀번호 확인"
                {...props.register("passwordConfirm")}
              /> */}
            </S.RowWrapper>
            <S.Error>{props.formState.errors.passwordConfirm?.message}</S.Error>
            <S.RowWrapper>
              <S.Label>휴대폰번호</S.Label>
              <S.Input type="tel" placeholder="휴대폰 번호" {...props.register("phoneNumber")} />
              {/* <S.Button type="button" onClick={props.onClickSendAuthNumber}>
                인증번호
              </S.Button> */}
            </S.RowWrapper>
            <S.Error>{props.formState.errors.phone?.message}</S.Error>
            <S.RowWrapper>
              <S.Label></S.Label>
              <S.Input />
              {/* <S.GreenButton type="button" onClick={props.onClickNumberConfirm}>
                확인
              </S.GreenButton> */}
            </S.RowWrapper>
            <S.Margin />
            <S.ButtonWrapper>
              <S.SubmitButton>회원가입</S.SubmitButton>
            </S.ButtonWrapper>
          </S.MainWrapper>
        </S.Wrapper>
      </form>
      <S.FooterWrapper>
        <S.FooterText>이미 아이디가 있으신가요?</S.FooterText>

        <Link href="/login">
          <a>
            <S.LoginButton>로그인</S.LoginButton>
          </a>
        </Link>
      </S.FooterWrapper>
      <S.Margin />
    </>
  );
}
