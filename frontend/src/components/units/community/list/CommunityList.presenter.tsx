import Link from "next/link";
import * as S from "./CommunityList.styles";
import { IBoardListUIProps } from "./CommunityList.types";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import CommunityCreatedAtList from "./createdAt/CommunityCreatedAtList.container";
import CommunityLikeCountList from "./likeCount/CommunityLikeCountList.container";
import SearchBar from "../../../commons/searchbar/01/SearchBar.container";
// import CommunityPagination from "./pagination/Pagination.container";

export default function CommunityListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.Banner></S.Banner>
      <S.BodyWrapper>
        <S.NavWrapper>
          <S.SortList>
            {/* <S.NewList>최신순</S.NewList>
            <S.LikeList>인기순</S.LikeList> */}
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
          </S.SortList>

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
        {/* <CommunityPagination
          refetch={
            props.alignment === "createdAt" ? props.refetchCreatedAt : props.refetchLikeCount
          }
          boardsNumber={props.dataBoardsNumber}
        /> */}
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
