import { SearchBar, SearchBarInput, SearchBtn } from "./SearchBar.styles";

export default function SearchBarUI(props: any) {
  return (
    <SearchBar>
      <SearchBarInput placeholder="검색어를 입력해 주세요." onChange={props.onChangeSearchBar} />
      <SearchBtn>검색</SearchBtn>
    </SearchBar>
  );
}
