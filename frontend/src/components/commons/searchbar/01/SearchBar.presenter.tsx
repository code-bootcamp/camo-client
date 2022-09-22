import { SearchBar, SearchBarInput } from "./SearchBar.styles";

export default function SearchBarUI(props: any) {
  return (
    <SearchBar>
      <SearchBarInput placeholder="검색어를 입력해 주세요." onChange={props.onChangeSearchBar} />
      {/* <SearchBtn onChange={props.onChangeSearch}>검색하기</SearchBtn> */}
    </SearchBar>
  );
}
