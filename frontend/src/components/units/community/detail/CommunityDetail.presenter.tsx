import CommentList from "../../comment/list/CommentList.container";
import CommentWrite from "../../comment/write/CommentWrite.container";
import * as S from "./CommunityDetail.styles";

export default function CommunityDetailUI() {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>오늘 친구들과 같이 달콤 카페를 다녀와 봤습니다.</S.Title>
        <S.UserWrapper>
          <S.UserImg></S.UserImg>
          <S.UserInfoWrapper>
            <S.UserName>홍길동</S.UserName>

            <S.PostWrapper>
              <S.PostDetail>2022.8.6 16:30</S.PostDetail>
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
          <S.SubImg></S.SubImg>
          <S.SubImg></S.SubImg>
          <S.SubImg></S.SubImg>
          <S.SubImg></S.SubImg>
        </S.ImgWrapper>
        <S.Contents>내용</S.Contents>
        <S.Tags>#태그</S.Tags>
        <S.ContentsIcons>
          <S.CommentIcon />
          30
          <S.LikeIcon />
          70
        </S.ContentsIcons>
      </S.ContentsWrapper>
      <hr />

      <div> 댓글 컴포넌트 삽입하기 </div>
      <CommentWrite />
      <CommentList />
    </S.Wrapper>
  );
}
