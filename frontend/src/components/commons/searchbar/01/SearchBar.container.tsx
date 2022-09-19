import SearchBarUI from "./SearchBar.presenter";
import _ from "lodash";
import { ISearchBarProps } from "./SearchBar.types";
import { ChangeEvent } from "react";

export default function SearchBar(props: ISearchBarProps) {
  const getDebounce = _.debounce((value: string) => {
    props.refetch({ page: 1 });
    props.refetchSearchBoards({ search_board: value });
    props.onChangeKeyword(value);
  }, 200);

  function onChangeSearchBar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <SearchBarUI onChangeSearchBar={onChangeSearchBar} />;
}
