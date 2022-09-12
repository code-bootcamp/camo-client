import Link from "next/link";
import CommentList from "../../comment/list/CommentList.container";
import CommentWrite from "../../comment/write/CommentWrite.container";
import { getDate } from "../../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";

import * as S from "./CommunityDetail.styles";
import KakaoMapPage from "../../../commons/map/kakao";

export default function CommunityDetailUI(props) {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>제목{props.data?.fetchBoard?.title}</S.Title>
        <S.UserWrapper>
          <S.UserImg></S.UserImg>
          <S.UserInfoWrapper>
            <S.UserName>이름{props.data?.fetchBoard?.user?.name}</S.UserName>

            <S.PostWrapper>
              <S.PostDetail>
                게시일
                {getDate(props.data?.fetchBoard?.createdAt)}
              </S.PostDetail>
              <S.PostDetail>조회: 80</S.PostDetail>
              <S.PostDetail>댓글: 30</S.PostDetail>
            </S.PostWrapper>
          </S.UserInfoWrapper>
        </S.UserWrapper>
      </S.TitleWrapper>
      <hr />
      <S.ContentsWrapper>
        <S.MainImg></S.MainImg>
        <S.ImgWrapper>
          {props.data?.fetchBoard.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <S.SubImg key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
          <S.SubImg></S.SubImg>
          <S.SubImg></S.SubImg>
        </S.ImgWrapper>
        <S.Contents>내용</S.Contents>

        <div>
          주소{props.data?.fetchBoard.address} {props.data?.fetchBoard.addressDetail}
        </div>
        <div
          style={{
            width: "22rem",
            height: "20rem",
          }}
        >
          <KakaoMapPage
            data={props.data?.fetchBoard}
            address={props.data?.fetchBoard.address as string}
          />
        </div>
        <S.Tags>
          #태그
          {props.data?.fetchBoard.tags?.map((el, index) => (
            <div key={uuidv4()} className="tag">
              # {el}
            </div>
          ))}
        </S.Tags>
        <S.ContentsIcons>
          <S.CommentIcon />
          30
          <S.LikeIcon />
          70
        </S.ContentsIcons>
      </S.ContentsWrapper>
      <br />
      <S.ListBtn onClick={props.onClickDelete}>삭제하기</S.ListBtn>
      <br />
      <Link href="/community/">
        <a>
          <S.ListBtn>목록으로</S.ListBtn>
        </a>
      </Link>
      <hr />
      <div> 댓글 </div>
      <CommentWrite />
      <CommentList />
    </S.Wrapper>
  );
}
