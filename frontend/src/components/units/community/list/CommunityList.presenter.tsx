import Link from "next/link";
import * as S from "./CommunityList.styles";
// import Paginations01 from "../../../commons/pagination/01/Paginations01.container";
import Searchbars01UI from "../../../commons/searchbar/01/Searchbars01.presenter";
import { IBoardListUIProps } from "./CommunityList.types";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import CommunityCreatedAtList from "./createdAt/CommunityCreatedAtList.container";
import CommunityLikeCountList from "./likeCount/CommunityLikeCountList.container";

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
            <Searchbars01UI
              placeholder="게시글을 검색해보세요"
              refetch={
                props.alignment === "createdAt" ? props.CreatedAtRefetch : props.LikeCountRefetch
              }
              refetchBoardsNumber={props.refetchBoardsNumber}
              onChangeKeyword={props.onChangeKeyword}
            />
            <S.SearchBtn>검색</S.SearchBtn>
          </S.InputWrapper>
        </S.NavWrapper>
        <Link href="/community/new">
          <a>
            <S.WriteBtn></S.WriteBtn>
          </a>
        </Link>
        {props.alignment === "createdAt" ? <CommunityCreatedAtList /> : <CommunityLikeCountList />}
        {/* <S.PaginationStyle>
          <Paginations01 refetch={props.alignment === "createdAt" ? props.CreatedAtRefetch : props.LikeCountRefetch} boardsNumber={props.dataBoardsNumber} />
        </S.PaginationStyle> */}
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
