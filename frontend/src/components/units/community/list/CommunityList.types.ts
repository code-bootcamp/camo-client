import { ApolloQueryResult, OperationVariables } from "@apollo/client";
// import { MouseEvent } from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  dataBoardsNumber: any;
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToNew: () => void;
  onClickMoveToDetail: any;
  // (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsNumber: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsNumber">>>;
  boardsNumber?: number;
  keyword: string;
  onChangeKeyword: (value: string) => void;
  lastPage: any;
  onClickPage: any;
  onFetchMore: any;
  onErrorImg: any;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
