import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../../commons/types/generated/types";

export interface CommunityPaginationProps {
  count?: number;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export interface CommunityPaginationUIProps {
  startPage: number;
  lastPage: number;
  activePage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
