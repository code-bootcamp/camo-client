import * as S from "./mainPageQuestion.styles";

export default function Q4Presenter(props) {
  return (
    <S.QuestionBox4 onClick={props.onClickQuestion4} isAnswer4={props.isAnswer4}>
      <S.QuestionContents4 isAnswer4={props.isAnswer4}>
        회원가입 시 인증 / 로그인이 안돼요
      </S.QuestionContents4>
      {props.isAnswer4 && (
        <S.AnswerContents>
          고객 센터로 문의해 주세요. <br />
        </S.AnswerContents>
      )}
    </S.QuestionBox4>
  );
}
