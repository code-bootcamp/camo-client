import styled from "@emotion/styled";
import { breakPoints } from "../styles/media";

export const QuestionWrapper = styled.div`
  /* height: 580px; */
  width: 100%;
  background: #3c565b;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #3c565b;
  font-family: "Cafe24Ohsquare";
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const QuestionTitle = styled.div`
  font-weight: 500;
  font-size: 2.5rem;
  text-align: center;
  color: white;
  margin: 10px 0px 50px 0px;
  @media ${breakPoints.mobile} {
    font-size: 2rem;
    line-height: 1rem;
  }
`;

export const QuestionBox1 = styled.div`
  width: 85%;
  height: ${(props) => (props.isAnswer1 ? "160px" : "60px")};
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 10px 20px 10px 40px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(204, 204, 204, 0.25);
  border-radius: 20px;
  /* background-image: 
  ${(props) => (props.isAnswer1 ? "url(/mainpage/arrowUp.png)" : "url(/arrow.png)")}; */
  background-repeat: no-repeat;
  background-position: top 25px right 20px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    padding: 20px;
    height: 55px;
  }
`;

export const QuestionContents1 = styled.div`
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 41px;
  border-bottom: ${(props) => (props.isAnswer1 ? "1px solid #bdbdbd" : "none")};

  @media ${breakPoints.mobile} {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

export const QuestionBox2 = styled.div`
  width: 85%;
  height: ${(props) => (props.isAnswer2 ? "160px" : "60px")};
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 10px 20px 10px 40px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(204, 204, 204, 0.25);
  border-radius: 20px;
  /* background-image: ${(props) =>
    props.isAnswer2 ? "url(/mainpage/arrowUp.png)" : "url(/mainpage/arrow.png)"}; */
  background-repeat: no-repeat;
  background-position: top 25px right 20px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    padding: 20px;
    height: 55px;
  }
`;

export const QuestionContents2 = styled.div`
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 41px;
  border-bottom: ${(props) => (props.isAnswer2 ? "1px solid #bdbdbd" : "none")};
  @media ${breakPoints.mobile} {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

export const QuestionBox3 = styled.div`
  width: 85%;
  height: ${(props) => (props.isAnswer3 ? "140px" : "60px")};
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 10px 20px 10px 40px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(204, 204, 204, 0.25);
  border-radius: 20px;
  /* background-image: ${(props) =>
    props.isAnswer3 ? "url(/mainpage/arrowUp.png)" : "url(/mainpage/arrow.png)"}; */
  background-repeat: no-repeat;
  background-position: top 25px right 20px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    padding: 20px;
    height: 55px;
  }
`;

export const QuestionContents3 = styled.div`
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 41px;
  border-bottom: ${(props) => (props.isAnswer3 ? "1px solid #bdbdbd" : "none")};
  @media ${breakPoints.mobile} {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

export const QuestionBox4 = styled.div`
  width: 85%;
  height: ${(props) => (props.isAnswer4 ? "140px" : "60px")};
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 10px 20px 10px 40px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(204, 204, 204, 0.25);
  border-radius: 20px;
  /* background-image: ${(props) =>
    props.isAnswer4 ? "url(/mainpage/arrowUp.png)" : "url(/mainpage/arrow.png)"}; */
  background-repeat: no-repeat;
  background-position: top 25px right 20px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    padding: 20px;
    height: 55px;
  }
`;

export const QuestionContents4 = styled.div`
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 41px;
  border-bottom: ${(props) => (props.isAnswer4 ? "1px solid #bdbdbd" : "none")};
  @media ${breakPoints.mobile} {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

export const AnswerContents = styled.div`
  margin: 10px 0px 0px 5px;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #555555;
  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
`;
