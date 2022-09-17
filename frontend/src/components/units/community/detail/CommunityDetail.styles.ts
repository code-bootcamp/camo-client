import {
  CloseOutlined,
  EditOutlined,
  LikeFilled,
  LikeOutlined,
  // MessageOutlined
} from "@ant-design/icons";
import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 5rem 10% 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  @media ${breakPoints.mobile} {
    width: 100%;
    padding-top: 3rem;
  }
`;

export const TitleWrapper = styled.div`
  width: 80%;
  border-bottom: 1px solid gray;
  padding-bottom: 2rem;
`;

export const TitleHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
  }
`;

export const TitleIconWrapper = styled.div`
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media ${breakPoints.mobile} {
    width: 60px;
  }
`;

export const EditIcon = styled(EditOutlined)`
  font-size: 24px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
`;

export const DeleteIcon = styled(CloseOutlined)`
  font-size: 24px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
`;

export const UserInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserName = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  color: gray;
  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const LikeWrapper = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LikeCount = styled.div`
  font-size: 1rem;
  color: black;
`;

export const LikeIcon = styled(LikeFilled)`
  font-size: 24px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
`;

export const DisLikeIcon = styled(LikeOutlined)`
  font-size: 24px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
`;

export const PostWrapper = styled.div`
  width: 100%;
`;

export const PostDetail = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  color: gray;
`;

export const BodyWrapper = styled.div`
  width: 80%;
  padding-top: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainImgWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const MainImg = styled.img`
  height: auto;
  width: 100%;
  object-fit: scale-down;
`;

export const SubImgWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  width: 100%;
  place-content: start space-between;
  align-items: center;
  gap: 0 1%;
  padding-top: 1%;
  @media ${breakPoints.mobile} {
    grid-template-columns: repeat(3, 3fr);
  }
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  padding-top: 1rem;
`;

export const Contents = styled.div`
  padding: 4% 0;
`;

export const AddressWrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5% 0;
`;

export const Tags = styled.div`
  width: auto;
  padding: 0 15px;
  font-size: 1rem;
  margin-right: 10px;
  background-color: burlywood;
  border-radius: 50px;
  text-align: center;
`;

// export const CommentIcon = styled(MessageOutlined)``;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const ListBtn = styled.button`
  border: none;
  border-radius: 5px;
  text-align: center;
  font-size: 1rem;
  line-height: 2rem;
  background-color: #33413e;
  cursor: pointer;
  padding: 5px 10px;
  margin: 3rem 0 2rem 0;
  color: #dfdfdf;
  @media ${breakPoints.mobile} {
    margin: 3rem 0 2rem 0;
  }
`;
