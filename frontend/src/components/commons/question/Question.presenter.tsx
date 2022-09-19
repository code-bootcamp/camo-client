import * as S from "./Question.styles";
import { MouseEvent, useState } from "react";

// const useStyles = makeStyles({
//   paginationContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",

//     "& .MuiPaginationItem-root": {
//       margin: "0 6px",
//       fontSize: "14px",
//     },
//     "& .MuiPaginationItem-page": {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",

//       "&.Mui-selected": {
//         backgroundColor: "#F6651E",
//         color: "white",
//       },
//     },
//   },
// });

export default function QuestionUI(props: any) {
  // const classes = useStyles();

  const [isVisible, setIsVisible] = useState(false);
  const [isClick, setIsClick] = useState("");

  const toggleModal = () => {
    setIsVisible((prev) => !prev);
  };

  const onClickQuestionRegistration = () => {
    toggleModal();
  };

  const onClickQuestion = (event: MouseEvent<HTMLDivElement>) => {
    setIsClick(event.currentTarget.id);
  };

  const onClickModalCancel = () => {
    toggleModal();
  };
  return (
    <>
      <S.Wrapper>
        <S.QuestionTitleWrapper>
          <S.QuestionTitle>카페 사장님께 문의하기</S.QuestionTitle>

          <S.QuestionButton onClick={onClickQuestionRegistration}>문의하기</S.QuestionButton>
        </S.QuestionTitleWrapper>

        <S.QuestionTableWrapper>
          <S.QuestionTableRow
            style={{
              backgroundColor: "#1e3932",
              height: "4rem",
              borderRadius: "5px 5px 0px 0px",
            }}
          >
            <S.QuestionStatusColumnHeader>답변 상태</S.QuestionStatusColumnHeader>
            <S.QuestionTitleColumnHeader style={{ textAlign: "center" }}>
              제목
            </S.QuestionTitleColumnHeader>
            <S.QuestionWriterColumnHeader>작성자</S.QuestionWriterColumnHeader>
            <S.QuestionDateColumnHeader>작성일</S.QuestionDateColumnHeader>
          </S.QuestionTableRow>

          <S.QuestionTableRow onClick={onClickQuestion}> </S.QuestionTableRow>

          {/* <S.QuestionAnswerWrapper >
                  <S.QuestionTableRow
                  
                  >
                    <S.QuestionStatusColumn>
              
                    </S.QuestionStatusColumn>
                    <S.QuestionTitleColumn >
                      <S.QText>Q. </S.QText>
                     
                        <S.EditImage
                          src="/icons/edit.svg"
                        ></S.EditImage>
                    
                    </S.QuestionTitleColumn>
                    <S.QuestionWriterColumn>
            이름
                    </S.QuestionWriterColumn>
                    <S.QuestionDateColumn>
                   날짜
                    </S.QuestionDateColumn>
                  </S.QuestionTableRow>

                  {el.id === props.isClick ? (
                    <S.AnswerWrapper>
                      <S.QuestionContents title={el.answer}>
                        {el.question}
                      </S.QuestionContents>
                      {el.status === "ANSWERED" ? (
                        <>
                          <S.AnswerTitle>
                            <S.AText>A. </S.AText>
                            {el.answerTitle}
                          </S.AnswerTitle>
                          <S.AnswerContents>{el.answer}</S.AnswerContents>
                        </>
                      ) : (
                        props.userLoggedData.fetchUserLoggedIn.id ===
                          props.data.seller?.id && (
                          <S.AnswerButton
                            onClick={props.onClickAnswerRegistration}
                          >
                            답변하기
                          </S.AnswerButton>
                        )
                      )}
                    </S.AnswerWrapper>
                  ) : (
                    <></>
                  )}
                </S.QuestionAnswerWrapper>
              );
            })} */}
        </S.QuestionTableWrapper>
      </S.Wrapper>

      {isVisible && (
        <S.CustomModal>
          <S.ModalWrapper>
            <S.TitleContentsText>문의제목</S.TitleContentsText>
            <S.TitleInput />
            <S.TitleContentsText>문의하기</S.TitleContentsText>
            <S.ContentsTextarea></S.ContentsTextarea>
            <S.ButtonWrapper>
              <S.RegistrationEditButton>등록</S.RegistrationEditButton>
            </S.ButtonWrapper>

            <S.CancelButton src="/x.png" onClick={onClickModalCancel} />
          </S.ModalWrapper>
        </S.CustomModal>
      )}
    </>
  );
}
