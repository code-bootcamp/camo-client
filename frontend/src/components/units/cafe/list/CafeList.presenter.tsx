import "antd/dist/antd.css";
import Link from "next/link";
import {
  BigTitle,
  CafeAddress,
  CafeIntro,
  CafeName,
  CafeRate,
  CafeReview,
  CafeTag,
  CityBox,
  DetailImage,
  MiddleText,
  NewBtn,
  PostAllWrap,
  PostWrapper,
  SearchBar,
  SearchbarBtn,
  SearchBarWrap,
  SearchBtnWrap,
  SearchText,
  Star,
  TextWrap,
  TopWrapper,
  Wrapper,
} from "./CafeList.styles";

export default function CafeListUI() {
  return (
    <>
      <Wrapper>
        <TopWrapper>
          <BigTitle>Reserve Your Cafe</BigTitle>
          <MiddleText>가고 싶은 카페를 찾아서 예약하고 편하게 방문하세요</MiddleText>
        </TopWrapper>

        <SearchBarWrap>
          <SearchText>카페 찾기</SearchText>
          <CityBox>지역</CityBox>

          <SearchBtnWrap>
            <SearchBar>검색</SearchBar>
            <SearchbarBtn>SEARCH</SearchbarBtn>
          </SearchBtnWrap>
        </SearchBarWrap>

        <PostAllWrap>
          <PostWrapper>
            <div>
              <DetailImage src="https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <TextWrap>
              <CafeTag>#조용한 카페</CafeTag>
              <CafeName>카페 레이어드</CafeName>
              <CafeIntro>안국역에 위치한 작은 스콘 맛집</CafeIntro>
              <div>
                <Star />
                &nbsp;
                <CafeRate>4.39/5</CafeRate>
                &nbsp;&nbsp;&nbsp;
                <CafeReview>방문자리뷰 22</CafeReview>
              </div>
              <CafeAddress>서울 종로구 북촌2길 2-3</CafeAddress>
            </TextWrap>
          </PostWrapper>

          <PostWrapper>
            <div>
              <DetailImage src="https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <TextWrap>
              <CafeTag>#조용한 카페</CafeTag>
              <CafeName>카페 레이어드</CafeName>
              <CafeIntro>안국역에 위치한 작은 스콘 맛집</CafeIntro>
              <div>
                <Star />
                &nbsp;
                <CafeRate>4.39/5</CafeRate>
                &nbsp;&nbsp;&nbsp;
                <CafeReview>방문자리뷰 22</CafeReview>
              </div>
              <CafeAddress>서울 종로구 북촌2길 2-3</CafeAddress>
            </TextWrap>
          </PostWrapper>
          <PostWrapper>
            <div>
              <DetailImage src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" />
            </div>
            <TextWrap>
              <CafeTag>#조용한 카페</CafeTag>
              <CafeName>카페 레이어드</CafeName>
              <CafeIntro>안국역에 위치한 작은 스콘 맛집</CafeIntro>
              <div>
                <Star />
                &nbsp;
                <CafeRate>4.39/5</CafeRate>
                &nbsp;&nbsp;&nbsp;
                <CafeReview>방문자리뷰 22</CafeReview>
              </div>
              <CafeAddress>서울 종로구 북촌2길 2-3</CafeAddress>
            </TextWrap>
          </PostWrapper>
        </PostAllWrap>

        <Link href="/cafe/new">
          <a>
            <NewBtn>카페 사장님 등록하기</NewBtn>
          </a>
        </Link>
      </Wrapper>
    </>
  );
}
