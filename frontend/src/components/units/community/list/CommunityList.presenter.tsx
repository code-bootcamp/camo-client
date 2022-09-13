import Link from "next/link";
import * as S from "./CommunityList.styles";
import { v4 as uuidv4 } from "uuid";
import Paginations01 from "../../../commons/pagination/01/Paginations01.container";
import LayoutFooterUI from "../../../commons/layout/footer/LayoutFooter.presenter";
import Searchbars01UI from "../../../commons/searchbar/01/Searchbars01.presenter";

export default function CommunityListUI(props) {
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
            <Searchbars01UI
              placeholder="게시글을 검색해보세요"
              refetch={props.refetch}
              refetchBoardsCount={props.refetchBoardsCount}
              onChangeKeyword={props.onChangeKeyword}
            />
            <S.WriteBtn>검색</S.WriteBtn>
          </S.InputWrapper>

          <Link href="/community/write">
            <a>
              <S.WriteBtn>글쓰기</S.WriteBtn>
            </a>
          </Link>
        </S.NavWrapper>

        <S.ItemWrapper>
          {props.data?.fetchBoards.map((el: any) => (
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

        <S.PaginationStyle>
          <Paginations01
            lastPage={props.lastPage}
            refetch={props.refetch}
            onClick={props.onClickPage}
            count={props.dataBoardsCount}
          />
        </S.PaginationStyle>
      </S.BodyWrapper>

      <LayoutFooterUI />
    </S.Wrapper>
  );
}
