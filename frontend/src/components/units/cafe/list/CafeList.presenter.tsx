import "antd/dist/antd.css";
import Link from "next/link";
import * as C from "./CafeList.styles";

export default function CafeListUI(props) {
  const IMAGES = [
    "https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1564327367919-cb377ea6a88f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1598797259268-14875817f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",

    "https://images.unsplash.com/photo-1615322958568-7928d3291f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1603915101731-aec4e7f58b33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    "https://images.unsplash.com/photo-1601923157894-eb2f7fffd7d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2047&q=80",
    "https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1598452498516-76a50b446f23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1586882448657-a2fc2d5106aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    "https://images.unsplash.com/photo-1602956033956-003e7180d339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1591242825378-ba17ddd7975c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
    "https://images.unsplash.com/photo-1565650839149-2c48a094196c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2066&q=80",
  ];

  return (
    <>
      <C.Wrapper>
        <C.TopWrapper>
          <C.BigTitle>Reserve Your Cafe</C.BigTitle>
          <C.MiddleText>가고 싶은 카페를 찾아서 예약하고 편하게 방문하세요</C.MiddleText>

          <C.CafeRegisterBox>
            <Link href="./cafe/new">
              <C.CafeRegister>
                <a>
                  <span>카페 등록하기</span>
                </a>
              </C.CafeRegister>
            </Link>
          </C.CafeRegisterBox>
        </C.TopWrapper>

        <C.SearchBarWrap>
          <C.SearchText>카페 찾기</C.SearchText>
          <C.CityBox>지역</C.CityBox>

          <C.SearchBtnWrap>
            <C.SearchBar>검색</C.SearchBar>
            <C.SearchbarBtn>SEARCH</C.SearchbarBtn>
          </C.SearchBtnWrap>
        </C.SearchBarWrap>

        <C.PostAllWrap>
          {IMAGES.map((el, index) => (
            <>
              <C.PostWrapper onClick={props.onClickDetail(el)}>
                <C.imageBox>
                  <C.DetailImage className="IMG">
                    <img src={IMAGES[index]} />
                  </C.DetailImage>
                </C.imageBox>
                <C.TextWrap>
                  <C.CafeTag>#조용한 카페</C.CafeTag>
                  <C.CafeName>카페 레이어드</C.CafeName>
                  <C.CafeIntro>안국역에 위치한 작은 스콘 맛집</C.CafeIntro>
                  <div>
                    <C.Star />
                    &nbsp;
                    <C.CafeRate>4.39/5</C.CafeRate>
                    &nbsp;&nbsp;&nbsp;
                    <C.CafeReview>방문자리뷰 22</C.CafeReview>
                  </div>
                  <C.CafeAddress>서울 종로구 북촌2길 2-3</C.CafeAddress>
                </C.TextWrap>
              </C.PostWrapper>
            </>
          ))}
        </C.PostAllWrap>

        <Link href="/cafe/new">
          <a>
            <C.NewBtn>카페 사장님 등록하기</C.NewBtn>
          </a>
        </Link>
      </C.Wrapper>
    </>
  );
}
