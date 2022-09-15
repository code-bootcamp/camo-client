import Link from "next/link";
import * as S from "./CommunityList.styles";
import { v4 as uuidv4 } from "uuid";
import Paginations01 from "../../../commons/pagination/01/Paginations01.container";
import LayoutFooterUI from "../../../commons/layout/footer/LayoutFooter.presenter";
import Searchbars01UI from "../../../commons/searchbar/01/Searchbars01.presenter";
import { IBoardListUIProps } from "./CommunityList.types";

export default function CommunityListUI(props: IBoardListUIProps) {
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
              refetchBoardsNumber={props.refetchBoardsNumber}
              onChangeKeyword={props.onChangeKeyword}
            />
            <S.WriteBtn>검색</S.WriteBtn>
          </S.InputWrapper>

          <Link href="/community/new">
            <a>
              <S.WriteBtn>글쓰기</S.WriteBtn>
            </a>
          </Link>
        </S.NavWrapper>

        <S.ItemWrapper>
          {props.data?.fetchBoards.map((el) => (
            <S.ItemContent key={uuidv4()} onClick={props.onClickMoveToDetail(el)}>
              <S.ItemImgWrapper>
                <S.ItemImg
                  src={
                    el.images[0]?.url ||
                    el.images[1]?.url ||
                    el.images[2]?.url ||
                    !null ||
                    !undefined
                      ? `https://storage.googleapis.com/team04-storage/${el.images[0]?.url}`
                      : "https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYwfHxjYWZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  }
                  onError={props.onErrorImg}
                />
              </S.ItemImgWrapper>
              <S.ItemTextWrapper>
                <S.ItemTextTitleWrapper>
                  <S.ItemTextTitle>{el.title}</S.ItemTextTitle>
                  {(el.tags || []).map(({ name }) => {
                    return <S.ItemTextTag key={uuidv4()}>{`#${name}`}</S.ItemTextTag>;
                  })}
                </S.ItemTextTitleWrapper>

                <S.ItemTextUserWrapper>
                  <S.ItemTextLikeWrapper>
                    <S.ItemTextLike />
                    <S.ItemTextLikeCount>{el.likeCount}</S.ItemTextLikeCount>
                  </S.ItemTextLikeWrapper>
                  <S.ItemTextUser>{el.user?.nickName}</S.ItemTextUser>
                </S.ItemTextUserWrapper>
              </S.ItemTextWrapper>
            </S.ItemContent>
          ))}
        </S.ItemWrapper>

        <S.PaginationStyle>
          <Paginations01 refetch={props.refetch} boardsNumber={props.dataBoardsNumber} />
        </S.PaginationStyle>
      </S.BodyWrapper>

      <LayoutFooterUI />
    </S.Wrapper>
  );
}
