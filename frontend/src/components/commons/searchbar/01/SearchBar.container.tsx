import SearchBarUI from "./SearchBar.presenter";
import _ from "lodash";

export default function SearchBar(props: any) {
  const getDebounce = _.debounce((value: string) => {
    props.refetch({ search: value, page: 1 });
    props.refetchSearch({ search: value });
    props.onChangeKeyword(value);
  }, 200);

  function onChangeSearchBar(event: any) {
    getDebounce(event.target.value);
  }

  return <SearchBarUI onChangeSearchBar={onChangeSearchBar} />;
}
