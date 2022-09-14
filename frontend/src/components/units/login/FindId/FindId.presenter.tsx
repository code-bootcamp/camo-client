import * as S from "../Login.styles";
import * as B from "../../../commons/wrapper/LoginWrapper.styles";
import * as R from "../signUp/SignUp.styles";
import { Error } from "../signUp/SignUp.styles";
import { RowWrapper, Wrapper, Form } from "./FindId.styles";
import { IFindIdUIProps } from "./FindId.types";

export default function FindIdUI(props: IFindIdUIProps) {
  return (
    <>
      <Wrapper>
        <Form onSubmit={props.handleSubmit(props.onClickSubmit)}>
          <S.Wrapper>
            <B.Title>아이디찾기</B.Title>
            <S.MainWrapper>
              <RowWrapper>
                <B.Input type="tel" placeholder="휴대폰 번호" {...props.register("phoneNumber")} />
                <R.Button type="button" onClick={props.onClickSendAuthNumber}>
                  인증번호
                </R.Button>
              </RowWrapper>
              <Error>{props.formState.errors.phoneNumber?.message}</Error>
              <RowWrapper>
                <B.Input
                  type="text"
                  placeholder="인증번호 입력"
                  {...props.register("phoneNumberCheck")}
                />
                <R.Button type="button" onClick={props.onClickNumberConfirm}>
                  인증
                </R.Button>
              </RowWrapper>
              <Error>{props.formState.errors.phoneNumberCheck?.message}</Error>
              <B.ButtonWrapper>
                <B.SubmitButton>아이디찾기</B.SubmitButton>
              </B.ButtonWrapper>
            </S.MainWrapper>
          </S.Wrapper>
        </Form>
      </Wrapper>
    </>
  );
}
