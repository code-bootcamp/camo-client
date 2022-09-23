import * as S from "./SearchBar.styles";
import { useRecoilState } from "recoil";
import { searchKeyword } from "../../../../commons/store";
import { ISearchBarsUIProps } from "./SearchBar.types";

export default function SearchBarPresenter(props: ISearchBarsUIProps) {
  const [camoKeyword] = useRecoilState(searchKeyword);

  return (
    <S.Wrap>
      <S.SearchBarInput
        defaultValue={camoKeyword}
        placeholder="검색어를 입력하세요"
        onChange={props.onChangeSearchBar}
      />
    </S.Wrap>
  );
}
