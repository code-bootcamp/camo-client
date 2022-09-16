import { CloseOutlined, EditOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100vw;
  background-color: #fff;
  padding: 10%;
  border: 1px solid brown;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

export const Title = styled.h1`
  font-weight: 700;
`;

export const EditIcon = styled(EditOutlined)`
  width: 23px;
  height: 23px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 16px;
    height: 16px;
  }
`;

export const DeleteIcon = styled(CloseOutlined)`
  padding-top: 2px;
  margin-left: 20px;
  width: 21px;
  height: 22px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 16px;
    height: 16px;
  }
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

export const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainImgWrapper = styled.div`
  width: 70%;
  height: auto;
  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const MainImg = styled.img`
  height: auto;
  width: 100%;
  object-fit: scale-down;
`;

export const SubImgWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  height: 150px;
  margin: 1rem 0;
  width: 70%;
  background-color: pink;
  @media ${breakPoints.mobile} {
    grid-template-columns: repeat(3, 3fr);
    width: 90%;
  }
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  padding: 3%;
  @media ${breakPoints.mobile} {
  }
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
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  padding: 5%;
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
