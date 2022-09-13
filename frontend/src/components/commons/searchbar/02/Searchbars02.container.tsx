import _ from "lodash";
import Searchbars02UI from "./Searchbars02.presenter";

export default function Searchbars02(props) {
  const getDebounce = _.debounce((value: string) => {
    props.refetch({ search: value, page: 1 });
    props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 200);

  function onChangeSearchbar(event) {
    getDebounce(event.target.value);
  }

  return <Searchbars02UI onChangeSearchbar={onChangeSearchbar} />;
}
