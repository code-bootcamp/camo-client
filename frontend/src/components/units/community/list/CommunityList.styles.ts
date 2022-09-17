import { LikeFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Banner = styled.div`
  width: 100%;
  height: 55vh;
  background-image: url("https://images.unsplash.com/photo-1615322958568-7928d3291f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80");
  background-size: cover;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  gap: 20px 0;
  padding-bottom: 50px;
`;

export const NavWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    // 모바일
    width: 100%;
    height: 100px;
  }
`;

export const SortList = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;

export const NewList = styled.div`
  width: 50%;
  padding: 10px 25px;
  background-color: #ebebf0;
  border-radius: 10px 0 0 10px;
  text-align: center;
  line-height: 25px;
`;

export const LikeList = styled.div`
  width: 50%;
  border: 1px solid #ebebf0;
  padding: 10px 25px;
  border-radius: 0 10px 10px 0;
  background-color: #fff;
  text-align: center;
`;

export const InputWrapper = styled.div`
  width: 290px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Search = styled.input`
  width: 12rem;
  height: 2rem;
  padding-left: 0.7erem;
`;

export const SearchBtn = styled.button`
  width: 4rem;
  height: 2rem;
  background-color: #3c565b;
  border: none;
  color: white;
  cursor: pointer;
`;

export const WriteBtn = styled.button`
  width: 5rem;
  height: 5rem;
  background-color: #3c565b;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  position: fixed;
  color: #fff;
  right: 3%;
  bottom: 5%;

  ::before {
    content: "+";
    font-size: 3rem;
    line-height: 2rem;
  }
  :hover::before {
    content: "글쓰기";
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
`;

// export const WriteBtn = styled(PlusCircleFilled)`
//   width: 5rem;
//   height: 5rem;
//   background-color: #3c565b;
//   border: none;
//   border-radius: 50%;
//   color: white;
//   cursor: pointer;
//   position: fixed;
//   color: #fff;
//   right: 3%;
//   bottom: 5%;

//   ::before {
//     content: "+";
//     font-size: 3rem;
//     line-height: 2rem;
//   }
//   :hover::before {
//     content: "글쓰기";
//     font-size: 1.2rem;
//     line-height: 1.3rem;
//   }
// `;

export const ItemWrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 600px);
  @media ${breakPoints.mobile} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 0 3%;
  }
`;

export const ItemContent = styled.div`
  width: 95%;
  height: 200px;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
  @media ${breakPoints.mobile} {
    width: 95%;
    height: 200px;
  }
`;

export const ItemImgWrapper = styled.div`
  width: 50%;
  height: 100%;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: 4px 0 0 4px;
`;

export const ItemTextWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5%;
`;

export const ItemTextTitleWrapper = styled.div`
  width: 100%;
`;

export const ItemTextTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
`;

export const TagsWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ItemTextTag = styled.span`
  font-size: 0.9rem;
  margin-right: 0.3rem;
  color: #3c565b;
`;

export const ItemTextUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ItemTextLikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemTextLike = styled(LikeFilled)`
  font-size: 1rem;
  margin-bottom: 0.1rem;
`;

export const ItemTextLikeCount = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;

export const ItemTextUser = styled.div`
  padding: 5px 0;
`;

export const PaginationStyle = styled.div`
  cursor: pointer;
  width: 33rem;
  height: 3rem;
  line-height: 3rem;
  display: flex;
  background: green;
`;
