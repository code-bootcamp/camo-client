import Link from "next/link";
import * as S from "./CommunityList.styles";
import { IBoardListUIProps } from "./CommunityList.types";
import CommunityCreatedAtList from "./createdAt/CommunityCreatedAtList.container";
import CommunityLikeCountList from "./likeCount/CommunityLikeCountList.container";
import SearchBar from "../../../commons/searchbar/01/SearchBar.container";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import CommunitySearchList from "./CommunitySearchList";

export default function CommunityListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.Banner></S.Banner>
      <S.BodyWrapper>
        <S.NavWrapper>
          {/* <S.SortList> */}
          <StyledEngineProvider injectFirst>
            <ToggleButtonGroup
              color="standard"
              value={props.alignment}
              exclusive
              onChange={props.handleChange}
              aria-label="Platform"
            >
              <ToggleButton style={{ padding: "10px" }} value="createdAt">
                최신순
              </ToggleButton>
              <ToggleButton style={{ padding: "10px" }} value="likeCount">
                인기순
              </ToggleButton>
            </ToggleButtonGroup>
          </StyledEngineProvider>
          {/* </S.SortList> */}

          <S.InputWrapper>
            {props.alignment === "createdAt" ? (
              // <SearchBar
              //   refetchCreatedAt={props.refetchCreatedAt}
              //   refetchSearchBoards={props.refetchSearchBoards}
              //   refetchSearch={props.refetchSearch}
              //   onChangeKeyword={props.onChangeKeyword}
              // />
              <>
                <S.SearchButton onClick={props.onClickSearchPage} src="/images/search/search.svg" />
                <S.SearchInput onChange={props.onChangeSearchBar} value={props.nputs} />
              </>
            ) : (
              <></>
            )}
            <Link href="/community/new">
              <a>
                <S.WriteBtn>글쓰기</S.WriteBtn>
              </a>
            </Link>
          </S.InputWrapper>
        </S.NavWrapper>
        {props.alignment === "createdAt" ? (
          <CommunityCreatedAtList search={props.search} />
        ) : (
          <CommunityLikeCountList />
        )}
        {/* {props.keyword !== "" ? <CommunitySearchList search={props.search} /> : <></>} */}
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
