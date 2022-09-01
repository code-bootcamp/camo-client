import * as S from "./Login.styles";
import { ILoginUIProps } from "./Login.types";
import SubmitButton from "../../commons/buttons/submitButton";
import CancelButton from "../../commons/buttons/cancelButton";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <>
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
          <S.Input />
          <S.Input />
          <S.SocialLoginWrapper>
            <S.SocialLogin src="/Kakao.png" />
            <S.SocialLogin src="/Naver.png" />
            <S.SocialLogin src="/Facebook.png" />
          </S.SocialLoginWrapper>
          <S.ButtonWrapper>
            <SubmitButton title="로그인" onClick={props.onClickLogin} />
            <CancelButton title="취소" onClick={props.onClickCancel} />
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
    </>
  );
}
