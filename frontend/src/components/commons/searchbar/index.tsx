import { ChangeEvent, MouseEvent } from "react";
import _ from "lodash";
import { ApolloQueryResult, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";

// 검색에 props
export interface ISearchBarProps {
  refetch: any;
  refetchBoardsCount: (
    variables: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsNumber">>>;
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
