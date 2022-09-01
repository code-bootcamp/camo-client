import { HeartOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
`;

export const Banner = styled.div`
  width: 100%;
  height: 20vh;
  background-image: url("https://images.unsplash.com/photo-1615322958568-7928d3291f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80");
  background-size: cover;
`;

export const NavWrapper = styled.div`
  width: 100%;
  height: 20%;
  padding: 0% 10%;
`;

export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0% 10%;
  /* gap: 1.25rem, 1.875rem; */

  border: 1px solid gray;
`;

export const ItemContent = styled.div`
  /* width: 41vw;
  height: 15vh; */
  width: 98%;
  height: 15vh;
  display: flex;
  flex-direction: row;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const ItemImgWrapper = styled.div`
  width: 15vw;
  /* height: 15vh; */
`;

export const ItemImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const ItemTextWrapper = styled.div`
  width: 26vw;
  height: 15vh;
`;

export const ItemTextTitleWrapper = styled.div``;

export const ItemTextTitle = styled.div``;

export const ItemTextTag = styled.div``;

export const ItemTextUserWrapper = styled.div``;

export const ItemTextLikeWrapper = styled.div``;

export const ItemTextLike = styled(HeartOutlined)``;

export const ItemTextLikeCount = styled.div``;

export const ItemTextUser = styled.div``;
