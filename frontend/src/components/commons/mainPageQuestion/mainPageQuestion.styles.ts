import styled from "@emotion/styled";

export const QuestionWrapper = styled.div`
  /* height: 580px; */
  width: 100%;
  background: #3c565b;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Cafe24Ohsquare";

  /* font-family: "KOTRA_BOLD-Bold"; */
`;

export const QuestionTitle = styled.div`
  font-weight: 500;
  font-size: 2.5rem;
  text-align: center;
  color: white;
  margin: 10px 0px 50px 0px;
`;

export const QuestionBox1 = styled.div`
  width: 80%;
  height: ${(props) => (props.isAnswer1 ? "160px" : "60px")};
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 10px 20px 10px 40px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(204, 204, 204, 0.25);
  border-radius: 20px;
  background-image: ${(props) =>
    props.isAnswer1 ? "url(/mainpage/arrowUp.png)" : "url(/mainpage/arrow.png)"};
  background-repeat: no-repeat;
  background-position: top 25px right 20px;
  cursor: pointer;
`;

export const QuestionContents1 = styled.div`
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 41px;
  color: #484848;
  border-bottom: ${(props) => (props.isAnswer1 ? "1px solid #bdbdbd" : "none")};
`;

export const QuestionBox2 = styled.div`
  width: 80%;
  height: ${(props) => (props.isAnswer2 ? "160px" : "60px")};
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 10px 20px 10px 40px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(204, 204, 204, 0.25);
  border-radius: 20px;
  background-image: ${(props) =>
    props.isAnswer2 ? "url(/mainpage/arrowUp.png)" : "url(/mainpage/arrow.png)"};
  background-repeat: no-repeat;
  background-position: top 25px right 20px;
  cursor: pointer;
`;

export const QuestionContents2 = styled.div`
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 41px;
  color: #484848;
  border-bottom: ${(props) => (props.isAnswer2 ? "1px solid #bdbdbd" : "none")};
`;

export const QuestionBox3 = styled.div`
  width: 80%;
  height: ${(props) => (props.isAnswer3 ? "140px" : "60px")};
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 10px 20px 10px 40px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(204, 204, 204, 0.25);
  border-radius: 20px;
  background-image: ${(props) =>
    props.isAnswer3 ? "url(/mainpage/arrowUp.png)" : "url(/mainpage/arrow.png)"};
  background-repeat: no-repeat;
  background-position: top 25px right 20px;
  cursor: pointer;
`;

export const QuestionContents3 = styled.div`
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 41px;
  color: #484848;
  border-bottom: ${(props) => (props.isAnswer3 ? "1px solid #bdbdbd" : "none")};
`;

export const AnswerContents = styled.div`
  margin: 10px 0px 0px 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  color: #555555;
`;
