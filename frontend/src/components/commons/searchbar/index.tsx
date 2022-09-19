import { ChangeEvent } from "react";
import _ from "lodash";

// 검색테스트
export interface ISearchBarProps {
  refetch: any;
  refetchBoardsCount: any;
  onChangeKeyword: (value: string) => void;
}

export default function SearchBar(props: ISearchBarProps) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data, page: 1 });
    props.refetchBoardsCount({ search: data });
    props.onChangeKeyword(data);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <>
      검색어입력
      <input type="text" onChange={onChangeSearch} />
    </>
  );
}
