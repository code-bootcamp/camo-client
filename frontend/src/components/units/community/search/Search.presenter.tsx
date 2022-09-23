import * as S from "./Search.styles";
import SearchBarContainer from "../search/Search.container";
import DOMPurify from "dompurify";
import { v4 as uuidv4 } from "uuid";
import { ISearchPresenterProps } from "./Search.types";
import CommunityPagination from "../list/pagination/Pagination.container";

export default function SearchPresenter(props: ISearchPresenterProps) {
  return (
    <>
      <S.Wrap>
        <S.SearchInputWrap>
          <SearchBarContainer refetch={props.refetch} onChangeKeyword={props.onChangeKeyword} />
        </S.SearchInputWrap>
        {props.data?.searchBoards.length === 0 ? (
          <S.GridWrap2>
            <S.NoImage
              src="/images/search/face-with-monocle_1f9d0.gif"
              alt="찾는 게시글이 없습니다"
            />
          </S.GridWrap2>
        ) : (
          <S.GridWrap>
            {props.data?.searchBoards.map((el: any) => (
              <S.ItemWrap onClick={props.onClickMoveToDetail(el)} id={el.id} key={el}>
                <S.ItemInfo>
                  <S.ItemName>
                    {el.title
                      .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                      .split("@#$%")
                      .map((el: any) => (
                        <S.TextToken key={uuidv4()} isMatched={props.keyword === el}>
                          {el}
                        </S.TextToken>
                      ))}
                  </S.ItemName>
                </S.ItemInfo>
                <S.Contents
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(el.contents),
                  }}
                ></S.Contents>
              </S.ItemWrap>
            ))}
          </S.GridWrap>
        )}
      </S.Wrap>
      <S.PagesWrapper>
        <CommunityPagination data={props.data} refetch={props.refetch} />
      </S.PagesWrapper>
    </>
  );
}
