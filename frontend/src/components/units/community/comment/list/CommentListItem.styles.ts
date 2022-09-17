import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
  /* @media ${breakPoints.mobile} {
    padding: 5%;
    width: 100%;
  } */
`;

export const BodyWrapper = styled.div`
  width: 80%;
  margin: 1%;
  /* height: 263px; */
  border-bottom: 1px solid gainsboro;
`;

// export const ProfileIcon = styled.img`
//   width: 60px;
//   height: 60px;
//   margin-top: 2px;
//   @media ${breakPoints.mobile} {
//     width: 50px;
//     height: 50px;
//     position: relative;
//     right: 22px;
//   }
// `;

export const WrapUserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 5%;
  /* @media ${breakPoints.mobile} {
    width: 100%;
  } */
`;

export const Name = styled.div`
  color: #6e554e;
  font-weight: 800;
  font-size: 1rem;
  /* @media ${breakPoints.mobile} {
    font-size: 0.9rem;
    position: relative;
    width: 100%;
  } */
`;

export const Date = styled.div`
  color: #808080;
  font-size: 0.9rem;
  opacity: 0.5;
  @media ${breakPoints.mobile} {
    font-size: 0.75rem;
    position: relative;
    opacity: 0.5;
  }
`;

export const CommentWrap = styled.div`
  width: 100%;
  padding: 0.5rem 5%;
  /* @media ${breakPoints.mobile} {
  } */
`;

export const Comment = styled.div`
  color: #484848;
  font-size: 1.15rem;
  /* @media ${breakPoints.mobile} {
    font-size: 1rem;
    position: relative;
    word-wrap: break-word;
  } */
`;

export const WrapIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 5%;
`;

export const EditIcon = styled(EditOutlined)`
  font-size: 20px;
  cursor: pointer;
  margin-right: 25px;
  opacity: 0.7;
  text-align: center;
`;

export const DeleteIcon = styled(CloseOutlined)`
  font-size: 20px;
  cursor: pointer;
  opacity: 0.7;
  text-align: center;
`;

// export const AnswerIcon = styled.img`
//   width: 23px;
//   height: 23px;
//   margin-left: 20px;
//   cursor: pointer;
//   @media ${breakPoints.mobile} {
//     width: 16px;
//     height: 16px;
//   }
// `;

export const FooterWrapper = styled.div``;
