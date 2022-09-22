// import SearchBarUI from "./SearchBar.presenter";
// import _ from "lodash";
// import { ISearchBarProps } from "./SearchBar.types";
// import { ChangeEvent } from "react";

import SearchBarUI from "./SearchBar.presenter";
import { ISearchBarProps } from "./SearchBar.types";
import _ from "lodash";
import { ChangeEvent } from "react";

export default function SearchBar(props: ISearchBarProps) {
  const getDebounce = _.debounce((value: string) => {
    props.refetchCreatedAt({ page: 1 });
    props.refetchSearchBoards({ search_board: value });
    props.onChangeKeyword(value);
  }, 1000);

  const onChangeSearchBar = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
    // console.log(event.target.value);
  };

  return <SearchBarUI onChangeSearchBar={onChangeSearchBar} />;
}
