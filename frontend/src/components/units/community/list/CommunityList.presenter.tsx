import Link from "next/link";
import * as S from "./CommunityList.styles";
import { IBoardListUIProps } from "./CommunityList.types";
import CommunityCreatedAtList from "./createdAt/CommunityCreatedAtList.container";
import CommunityLikeCountList from "./likeCount/CommunityLikeCountList.container";
import SearchBar from "../../../commons/searchbar/01/SearchBar.container";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

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
              <ToggleButton value="createdAt">최신순</ToggleButton>
              <ToggleButton value="likeCount">인기순</ToggleButton>
            </ToggleButtonGroup>
          </StyledEngineProvider>
          {/* </S.SortList> */}

          <S.InputWrapper>
            <SearchBar
              placeholder="게시글을 검색해보세요"
              refetch={
                props.alignment === "createdAt" ? props.refetchCreatedAt : props.refetchLikeCount
              }
              refetchBoardsNumber={props.refetchBoardsNumber}
              refetchSearch={props.refetchSearch}
              onChangeKeyword={props.onChangeKeyword}
            />
          </S.InputWrapper>
        </S.NavWrapper>
        <Link href="/community/new">
          <a>
            <S.WriteBtn />
          </a>
        </Link>
        {props.alignment === "createdAt" ? <CommunityCreatedAtList /> : <CommunityLikeCountList />}
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
