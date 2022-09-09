import Link from "next/link";
import * as S from "./CommunityList.styles";
import { v4 as uuidv4 } from "uuid";
import Paginations01 from "../../../commons/pagination/01/Paginations01.container";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./CommunityList.queries";

export default function CommunityListUI(props) {
  // const cafeImg = [
  //   "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2047&q=80",
  //   "https://images.unsplash.com/photo-1567880905822-56f8e06fe630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
  //   "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
  //   "https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  //   "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  //   "https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
  //   "https://images.unsplash.com/photo-1529676468696-f3a47aba7d5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  //   "https://images.unsplash.com/photo-1600353565737-2427a1ba3d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  //   "https://images.unsplash.com/photo-1601205741712-b261aff33a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=982&q=80",
  //   "https://images.unsplash.com/photo-1580927942227-c7748860b1b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  // ];

  const { refetch } = useQuery(FETCH_BOARDS);

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };

  return (
    <S.Wrapper>
      <S.Banner></S.Banner>
      <S.BodyWrapper>
        <S.NavWrapper>
          <S.SortList>
            <S.NewList>최신순</S.NewList>
            <S.LikeList>인기순</S.LikeList>
          </S.SortList>
          <S.InputWrapper>
            <S.Search placeholder="게시글을 검색해보세요" />
            <Link href="/community/write">
              <a>
                <S.WriteBtn>글쓰기</S.WriteBtn>
              </a>
            </Link>
          </S.InputWrapper>
        </S.NavWrapper>
        <S.ItemWrapper>
          {props.data?.fetchBoards.map((el, index) => (
            <S.ItemContent key={uuidv4()} onClick={props.onClickDetail(el)}>
              <S.ItemImgWrapper>
                <S.ItemImg />
              </S.ItemImgWrapper>
              <S.ItemTextWrapper>
                <S.ItemTextTitleWrapper>
                  <S.ItemTextTitle>제목: {el.title}</S.ItemTextTitle>

                  {(el.tags || []).map(({ name }) => {
                    return <S.ItemTextTag key={uuidv4()}>{`#${name}`}</S.ItemTextTag>;
                  })}
                </S.ItemTextTitleWrapper>

                <S.ItemTextUserWrapper>
                  <S.ItemTextLikeWrapper>
                    <S.ItemTextLike />
                    <S.ItemTextLikeCount>{el.likeCount}</S.ItemTextLikeCount>
                  </S.ItemTextLikeWrapper>
                  <S.ItemTextUser>닉네임</S.ItemTextUser>
                </S.ItemTextUserWrapper>
              </S.ItemTextWrapper>
            </S.ItemContent>
          ))}
        </S.ItemWrapper>

        <div
          style={{
            cursor: "pointer",
            width: "300px",
            height: "50px",
            display: "flex",
            flexDirection: "row",
            lineHeight: "50px",
          }}
        >
          {new Array(10).fill(1).map((_, index) => (
            <Paginations01 key={index + 1} id={String(index + 1)} onClick={onClickPage}>
              {index + 1}
            </Paginations01>
          ))}
        </div>
      </S.BodyWrapper>

      <S.Footer>
        <div>
          <S.FooterText>Cafe Moment 소개</S.FooterText>
          <S.FooterText>cafemoment.site</S.FooterText>
          <S.FooterText>Contact with Us</S.FooterText>
          <S.FooterText>(000) 8282-1234</S.FooterText>
        </div>
        <S.FooterText2>
          평일 10:00~17:00 | 점심시간 12:30~14:00 주말 및 공휴일 휴무
          <br /> <br />
          (주)카모 서울특별시 구로구 디지털로 300 13층 Made by 2022 CAMO Corp.
          <br /> © 2022 Betheme by Muffin group | All Rights Reserved | Powered by WordPress
        </S.FooterText2>
      </S.Footer>
    </S.Wrapper>
  );
}
