import * as S from "./mainPageQuestion.styles";

export default function Q1Presenter(props) {
  return (
    <S.QuestionBox1 onClick={props.onClickQuestion1} isAnswer1={props.isAnswer1}>
      <S.QuestionContents1 isAnswer1={props.isAnswer1}>
        카페 예약하기 결제 후 환불이 가능한가요?
      </S.QuestionContents1>
      {props.isAnswer1 && (
        <S.AnswerContents>
          가능합니다. <br />
          예약 결제 후 예약 취소가 필요하시면 해당 카페에 연락해주세요.
        </S.AnswerContents>
      )}
    </S.QuestionBox1>
  );
}
