import "antd/dist/antd.css";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroller";
import { Footer } from "../../../commons/layout/footer/LayoutFooter.style";
import Searchbars02 from "../../../commons/searchbar/02/Searchbars02.container";
import * as C from "./CafeList.styles";
import { v4 as uuidv4 } from "uuid";

export default function CafeListUI(props: any) {
  const IMAGES = [
    "https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1564327367919-cb377ea6a88f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1598797259268-14875817f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    "https://images.unsplash.com/photo-1567880905822-56f8e06fe630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    "https://images.unsplash.com/photo-1603915101731-aec4e7f58b33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    "https://images.unsplash.com/photo-1601923157894-eb2f7fffd7d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2047&q=80",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1598452498516-76a50b446f23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1586882448657-a2fc2d5106aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    "https://images.unsplash.com/photo-1602956033956-003e7180d339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1591242825378-ba17ddd7975c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
    "https://images.unsplash.com/photo-1565650839149-2c48a094196c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2066&q=80",
    "https://images.unsplash.com/photo-1615322958568-7928d3291f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    "https://images.unsplash.com/photo-1587337657836-5084db88308c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  ];
  console.log(props.data);

  return (
    <>
      <C.Wrapper>
        <C.TopWrapper>
          <C.LogoBody>
            <div>
              당신이 원하는 <span>카</span>페들을 <span>모</span>았습니다
            </div>
            <C.LogoImage src="/CAMO.png" />
          </C.LogoBody>

          <C.BigTitle>Reserve Your Cafe</C.BigTitle>
          <C.MiddleText>
            가고 싶은 카페를 찾아서 예약하세요 <br /> 이제 웨이팅 없이 편하게 방문하세요!
          </C.MiddleText>
          <br />

          <C.CafeRegisterBox>
            <Link href="./cafe/new">
              <C.CafeRegister>
                <a>
                  <span>카페 등록하기</span>{" "}
                </a>
              </C.CafeRegister>
            </Link>
          </C.CafeRegisterBox>

          <Searchbars02
            refetch={props.refetch}
            refetchCafeListNumbers={props.refetchCafeListNumbers}
            onChangeKeyword={props.onChangeKeyword}
          />
        </C.TopWrapper>

        <InfiniteScroll pageStart={0} loadMore={props.onFetchMore} hasMore={true}>
          <C.PostAllWrap>
            {props.data?.fetchCafeListsCreatedAt.map((el: any, index: any) => (
              <>
                <C.PostWrapper id={el.id} onClick={props.onClickDetail(el)}>
                  <C.imageBox>
                    <C.DetailImage>
                      {/* <img src={`${props.data?.fetchCafeList?.cafeListImage[0]?.url}`} /> */}

                      <img
                        src={
                          `${el.cafeListImage[0]?.url}` ? `${el.cafeListImage[0]?.url}` : IMAGES[1]
                        }
                      />
                    </C.DetailImage>
                  </C.imageBox>

                  <C.TextWrap>
                    <C.CafeTag key={uuidv4()}>
                      #태그, #{el.cafeListTag[index]?.name}
                      {/* #{el.cafeListTag[0]?.name} &nbsp; #{el.cafeListTag[1]?.name} */}
                    </C.CafeTag>

                    {/* 
{props.data?.fetchCafeListsCreatedAt.cafeListTag?.map((el: any, index: any) => (
                      <C.CafeTag key={uuidv4()}># {el} </C.CafeTag>
                    ))} */}

                    <C.CafeName>카페명 ㅣ {el.title}</C.CafeName>
                    <C.CafeIntro>안국역에 위치한 작은 스콘 맛집</C.CafeIntro>
                    <div>
                      <C.Star />
                      {/* <C.CafeRate>4.39/5</C.CafeRate> */}
                      &nbsp;&nbsp;
                      <C.CafeReview>방문자리뷰 22</C.CafeReview>
                    </div>
                    <C.CafeAddress>주소 ㅣ {el.address}</C.CafeAddress>
                  </C.TextWrap>
                </C.PostWrapper>
              </>
            ))}
          </C.PostAllWrap>
        </InfiniteScroll>
        {/*        
          <C.PostAllWrap>
            {IMAGES.map((el, index) => (
              <>
                <C.PostWrapper id={el.id} onClick={props.onClickDetail(el)}>
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
         */}

        <Footer />
        {/* <C.Footer>
          <div>
            <C.FooterText>Cafe Moment 소개</C.FooterText>
            <C.FooterText>cafemoment.site</C.FooterText>
            <C.FooterText>Contact with Us</C.FooterText>
            <C.FooterText>(000) 8282-1234</C.FooterText>
          </div>
          <C.FooterText2>
            평일 10:00~17:00 | 점심시간 12:30~14:00 주말 및 공휴일 휴무
            <br /> <br />
            (주)카모 서울특별시 구로구 디지털로 300 13층 Made by 2022 CAMO Corp.
            <br /> © 2022 Betheme by Muffin group | All Rights Reserved | Powered by WordPress
          </C.FooterText2>
        </C.Footer> */}
      </C.Wrapper>
    </>
  );
}
