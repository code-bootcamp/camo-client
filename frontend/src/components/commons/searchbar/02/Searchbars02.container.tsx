import _ from "lodash";
import { ChangeEvent } from "react";
import Searchbars02UI from "./Searchbars02.presenter";

export default function Searchbars02(props: any) {
  const getDebounce = _.debounce((value: string) => {
    props.refetch({ page: 1 });
    props.refetchSearchBoards({ search_board: value });
    props.onChangeKeyword(value);
  }, 200);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <Searchbars02UI onChangeSearch={onChangeSearch} />;
}
