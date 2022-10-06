import { LikeFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { ITextTokenProps } from "./CommunityList.types";

export const Wrapper = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Banner = styled.div`
  width: 100%;
  height: 55vh;
  background-image: url("https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  gap: 20px 0;
  padding-bottom: 50px;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  /* background-color: pink; */
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    .toggle {
      display: none;
    }
  }
`;

export const SortList = styled.div`
  @media (max-width: 1100px) {
  }
`;

export const InputWrapper = styled.div`
  /* width: 320px; */
  height: 40px;
  display: flex;
  /* justify-content: space-between; */
  justify-content: end;
  align-items: center;
  background-color: pink;
`;

export const WriteBtn = styled.button`
  width: 70px;
  height: 40px;
  background-color: #1e3932;
  border: none;
  color: white;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  font-size: 16px;

  /* ::before {
    content: "+";
    font-size: 3rem;
    line-height: 2rem;
  } */
  /* :hover::before {
    content: "글쓰기";
    font-size: 1.2rem;
    line-height: 1.3rem;
  } */
`;

export const ItemWrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 600px);
  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(1, 350px);
    padding: 0 0 0 0;
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
  @media (max-width: 1100px) {
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
  color: steelblue;
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

export const PagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) => (props.isMatched ? "red" : "black")};
`;

export const SearchButton = styled.img``;

export const SearchInput = styled.input`
  width: 90%;
  border: none;
  background-color: #f2f2f2;
  padding-left: 10px;
  color: #808080;
  &:focus {
    outline: none;
  }
`;
