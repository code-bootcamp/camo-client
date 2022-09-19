import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { SyntheticEvent } from "react";
// import { MouseEvent } from "react";
import {
  IQuery,
  // IQueryFetchBoardsArgs,
  // IQueryFetchBoardsCreatedAtArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  dataBoardsNumber: any;
  data?: Pick<IQuery, "fetchBoardsCreatedAt"> | Pick<IQuery, "fetchBoardsLikeCount">;
  onClickMoveToNew: () => void;
  // (event: MouseEvent<HTMLDivElement>) => void;
  // refetch: (
  //   variables?: Partial<IQueryFetchBoardsCreatedAtArgs> | null | undefined
  // ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCreatedAt">>>;
  refetchCreatedAt: any;
  refetchLikeCount: any;
  refetchBoardsNumber: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsNumber">>>;
  boardsNumber?: number;
  keyword: string;
  onChangeKeyword: (value: string) => void;
  lastPage: any;
  onClickPage: any;
  alignment: string;
  handleChange: any;
  dataSearch: any;
  refetchSearch: any;
}

export interface ICreatedAtListUIProps {
  onFetchMore: () => void;
  data: Pick<IQuery, "fetchBoardsCreatedAt"> | undefined;
  onErrorImg: (e: SyntheticEvent<HTMLImageElement>) => void;
  onClickMoveToDetail: (el: any) => (event: any) => void;
  keyword: string;
  onChangeKeyword: (value: string) => void;
}

export interface ILikeCountListUIProps {
  onFetchMore: () => void;
  data: Pick<IQuery, "fetchBoardsLikeCount"> | undefined;
  onErrorImg: (e: SyntheticEvent<HTMLImageElement>) => void;
  onClickMoveToDetail: (el: any) => (event: any) => void;
  keyword: string;
  onChangeKeyword: (value: string) => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}

export interface ITagsProps {
  name: string;
}
