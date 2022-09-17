import Searchbars01UI from "./Searchbars01.presenter";
import _ from "lodash";

export default function Searchbars01(props: any) {
  const getDebounce = _.debounce((value: string) => {
    props.refetch({ search: value, page: 1 });
    props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 200);

  function onChangeSearchbar(event: any) {
    getDebounce(event.target.value);
  }

  return <Searchbars01UI onChangeSearchbar={onChangeSearchbar} />;
}
