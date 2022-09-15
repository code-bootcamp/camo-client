import * as S from "../Login.styles";
import * as B from "../../../commons/wrapper/LoginWrapper.styles";
import * as R from "../signUp/SignUp.styles";
import { Error } from "../signUp/SignUp.styles";
import { RowWrapper, Wrapper, Form, ButtonWrapper } from "./FindPassword.styles";
import { IFindPasswordUIProps } from "./FindPassword.types";

export default function FindPasswordUI(props: IFindPasswordUIProps) {
  return (
    <>
      <Wrapper>
        <Form onSubmit={props.handleSubmit(props.onClickSubmit)}>
          <S.Wrapper>
            <B.Title>비밀번호 찾기</B.Title>
            <S.MainWrapper>
              <RowWrapper>
                <B.Input type="tel" placeholder="이메일 입력" {...props.register("email")} />
              </RowWrapper>
              <Error>{props.formState.errors.email?.message}</Error>
              <RowWrapper>
                <B.Input type="tel" placeholder="휴대폰 번호" {...props.register("phoneNumber")} />{" "}
                <R.Button type="button" onClick={props.onClickSendAuthNumber}>
                  인증번호
                </R.Button>
              </RowWrapper>
              <Error>{props.formState.errors.phoneNumber?.message}</Error>
              <RowWrapper>
                <B.Input
                  type="tel"
                  placeholder="인증번호 입력"
                  {...props.register("phoneNumberCheck")}
                />
                <R.Button type="button" onClick={props.onClickNumberConfirm}>
                  인증
                </R.Button>
              </RowWrapper>
              <Error>{props.formState.errors.phoneNumberCheck?.message}</Error>
              <RowWrapper>
                <B.Input
                  type="password"
                  placeholder="비밀번호 입력"
                  {...props.register("password")}
                />
              </RowWrapper>
              <Error>{props.formState.errors.password?.message}</Error>
              <RowWrapper>
                <B.Input
                  type="password"
                  placeholder="비밀번호 확인"
                  {...props.register("passwordConfirm")}
                />
              </RowWrapper>
              <Error>{props.formState.errors.passwordConfirm?.message}</Error>
              <ButtonWrapper>
                <B.SubmitButton>확인</B.SubmitButton>
              </ButtonWrapper>
            </S.MainWrapper>
          </S.Wrapper>
        </Form>
      </Wrapper>
    </>
  );
}
