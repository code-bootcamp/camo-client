import { LikeOutlined, MessageOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  background-color: #fff;
  padding: 10%;
  border: 1px solid brown;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

export const Title = styled.h1`
  font-weight: 700;
`;

export const UserWrapper = styled.div`
  width: 100%;
`;

export const UserImg = styled.div``;

export const UserInfoWrapper = styled.div`
  width: 100%;
`;

export const UserName = styled.div``;

export const PostWrapper = styled.div`
  width: 100%;
`;

export const PostDetail = styled.div``;

export const ContentsWrapper = styled.div`
  width: 100%;
`;

export const MainImg = styled.img`
  height: 30rem;
  width: 70%;
  background-color: #eee;
  background-image: url("https://images.unsplash.com/photo-1494346480775-936a9f0d0877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1116&q=80");
  background-size: contain;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 4rem;
  margin: 1rem 0;
  width: 100%;
`;

export const SubImg = styled.div`
  height: 4rem;
  width: 4rem;
  margin-right: 0.5rem;
  background-color: #ddd;
  border: 1px solid red;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Contents = styled.div``;

export const Tags = styled.div``;

export const ContentsIcons = styled.div``;

export const CommentIcon = styled(MessageOutlined)``;

export const LikeIcon = styled(LikeOutlined)``;

export const AddressWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid gray;
`;

export const MapWrapper = styled.div`
  width: 22rem;
  height: 10rem;
  border: 1px solid gray;
`;

export const ListBtn = styled.div`
  height: 2rem;
  width: 5rem;
  text-align: center;
  font-size: 1rem;
  line-height: 2rem;
  background-color: #ddd;
  cursor: pointer;
`;
