import * as S from "./mainPageQuestion.styles";

export default function Q2Presenter(props) {
  return (
    <S.QuestionBox2 onClick={props.onClickQuestion2} isAnswer2={props.isAnswer2}>
      <S.QuestionContents2 isAnswer2={props.isAnswer2}>
        카페 예약 시 인원 제한이 있나요?
      </S.QuestionContents2>
      {props.isAnswer2 && (
        <S.AnswerContents>
          인원 제한은 카페 상황에따라 다릅니다. <br />
          에약하기 페이지에서 인원 선택 시 희망하시는 인원수가 없다면 카페로 직접 문의해주세요.
        </S.AnswerContents>
      )}
    </S.QuestionBox2>
  );
}
