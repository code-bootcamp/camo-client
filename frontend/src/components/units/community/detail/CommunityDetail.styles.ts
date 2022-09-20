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
  font-size: 3rem;
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
  height: auto;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const MainImgWrapper = styled.div`
  width: 100%;
  height: 500px;
  padding-right: 2%;
  @media ${breakPoints.mobile} {
    padding-right: 0;
  }
`;

export const MainImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.1);
`;

export const SubImgWrapper = styled.div`
  grid-area: SubImgWrapper;
  display: grid;
  grid-template-rows: repeat(3);
  place-content: space-between center;
  width: 150px;
  height: 500px;
  @media ${breakPoints.mobile} {
    place-content: space-evenly center;
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  border-radius: 10px;
  box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.1);
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  padding-top: 1rem;
`;

export const Contents = styled.div`
  font-size: 1.5rem;
  padding: 4% 0;
`;

export const AddressWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const AddressTitle = styled.span`
  width: 50px;
  height: 100%;
  font-size: 1.3rem;
`;

export const Address = styled.span`
  width: 100%;
  height: 100%;
  font-size: 1.1rem;
  padding-left: 5px;
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 20rem;
  background-color: pink;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 5% 0;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const TagsWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${breakPoints.mobile} {
    display: flex;
    padding: 1rem 0;
  }
`;

export const Tags = styled.div`
  width: auto;
  height: 30px;
  padding: 0 15px;
  font-size: 1rem;
  margin-right: 10px;
  background-color: #1e3932;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  line-height: 30px;
`;

// export const CommentIcon = styled(MessageOutlined)``;

export const BtnWrapper = styled.div`
  width: 25%;
  /* height: 300px; */
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
  color: #dfdfdf;
`;
