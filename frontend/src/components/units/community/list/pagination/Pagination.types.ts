import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import { IQuery, IQueryFetchFreeBoardsArgs } from "../../../../../commons/types/generated/types";

export interface CommunityPaginationProps {
  count?: number;
  refetch: (
    variables: Partial<IQueryFetchFreeBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchFreeBoards">>>;
}

export interface CommunityPaginationUIProps {
  startPage: number;
  lastPage: number;
  activePage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  isActive: boolean;
}
