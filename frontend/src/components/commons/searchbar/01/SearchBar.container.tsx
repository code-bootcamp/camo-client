import SearchBarPresenter from "./SearchBar.presenter";
import { ISearchBarsProps } from "./SearchBar.types";

import _ from "lodash";
import { useEffect } from "react";
import { searchKeyword } from "../../../../commons/store";
import { useRecoilState } from "recoil";

export default function SearchBarContainer(props: ISearchBarsProps) {
  const [camoKeyword] = useRecoilState(searchKeyword);

  const getDebounce = _.debounce((data: string) => {
    props.refetch({ search_board: data });
    props.onChangeKeyword(data);
  }, 500);

  function onChangeSearchBar(event: any) {
    getDebounce(event.target.value);
  }

  useEffect(() => {
    props.onChangeKeyword(camoKeyword);
    if (camoKeyword !== "") {
      props.refetch({
        search_board: camoKeyword,
      });
    }
  }, [camoKeyword]);

  return <SearchBarPresenter onChangeSearchBar={onChangeSearchBar} />;
}
