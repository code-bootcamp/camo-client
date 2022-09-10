import { HeartOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  padding: 0 5%;

  /* background-color: pink; */
`;

export const Banner = styled.div`
  width: 100%;
  height: 55vh;
  background-image: url("https://images.unsplash.com/photo-1615322958568-7928d3291f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80");
  background-size: cover;
`;

export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 2% 2% 0 2%;

  @media screen and (max-width: 767px) {
    // 모바일
    width: 500px;
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
  width: 100px;
  padding: 10px 25px;
  background-color: #ebebf0;
  border-radius: 10px 0 0 10px;
`;
export const LikeList = styled.div`
  width: 100px;
  border: 1px solid #ebebf0;
  padding: 10px 25px;
  border-radius: 0 10px 10px 0;
`;

export const InputWrapper = styled.div`
  width: 18rem;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Search = styled.input`
  width: 12rem;
  height: 2rem;
  padding-left: 0.7erem;
`;

export const WriteBtn = styled.button`
  width: 4rem;
  height: 2rem;
  background-color: #3c565b;
  border: none;
  color: white;
  cursor: pointer;
`;

export const ItemWrapper = styled.div`
  width: 1200px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  background-color: #ffffff;
  padding: 3%;
  /* border: 1px solid red; */
  @media ${breakPoints.mobile} {
    display: grid;
    grid-template-columns: repeat(1, 500px);
  }
`;

export const ItemContent = styled.div`
  width: 95%;
  height: 150px;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  cursor: pointer;
`;

export const ItemImgWrapper = styled.div`
  width: 40%;
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
  margin-bottom: 0.1rem;
`;

export const ItemTextLike = styled(HeartOutlined)`
  font-size: 0.7rem;
  margin-bottom: 0.1rem;
`;

export const ItemTextLikeCount = styled.div`
  font-size: 0.7rem;
  margin-bottom: 0.2rem;
`;

export const ItemTextUser = styled.div``;

// 푸터 테스트

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 18rem;
  background-color: #786d5f;
`;

export const FooterText = styled.span`
  display: inline-block;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  margin: 1.3rem;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const FooterText2 = styled.span`
  display: inline-block;
  text-align: center;
  color: white;
  margin-top: 1rem;
  font-size: 0.7rem;
  font-weight: 100;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
