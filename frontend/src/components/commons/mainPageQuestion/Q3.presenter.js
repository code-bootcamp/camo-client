import * as S from "./mainPageQuestion.styles";
// import { IMainPageQuestionPresenterProps } from "./mainPageQuestion.types";

export default function Q3Presenter(props) {
  return (
    <S.QuestionBox3 onClick={props.onClickQuestion3} isAnswer3={props.isAnswer3}>
      <S.QuestionContents3 isAnswer3={props.isAnswer3}>
        카페 사장님으로 등록하려면 어떻게 해야하나요?
      </S.QuestionContents3>
      {props.isAnswer3 && (
        <S.AnswerContents>
          카페 사징님이신 경우에는 회원가입 페이지에서 일반 회원이 아닌 카페 사장님 버튼을 클릭하여
          가입하시면 됩니다.
        </S.AnswerContents>
      )}
    </S.QuestionBox3>
  );
}
