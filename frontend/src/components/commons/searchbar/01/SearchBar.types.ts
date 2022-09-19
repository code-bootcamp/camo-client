import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQuerySearchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface ISearchBarProps {
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchSearchBoards: (
    variables: Partial<IQuerySearchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "searchBoards">>>;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchBarUIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
