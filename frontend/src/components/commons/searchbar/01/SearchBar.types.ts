import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCreatedAtArgs,
  IQuerySearchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface ISearchBarProps {
  // refetchList: (
  //   variables: Partial<IQueryFetchBoardsArgs>
  // ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchCreatedAt: (
    variables: Partial<IQueryFetchBoardsCreatedAtArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCreatedAt">>>;
  refetchSearchBoards: (
    variables: Partial<IQuerySearchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "searchBoards">>>;
  onChangeKeyword: (value: string) => void;
}

export interface ISearchBarUIProps {
  onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
