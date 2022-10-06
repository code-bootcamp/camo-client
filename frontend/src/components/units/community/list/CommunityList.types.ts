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
  data?: Pick<IQuery, "fetchFreeBoardsCreatedAt"> | Pick<IQuery, "fetchFreeBoardsLikeCount">;
  onClickMoveToNew: () => void;
  // (event: MouseEvent<HTMLDivElement>) => void;
  // refetch: (
  //   variables?: Partial<IQueryFetchBoardsCreatedAtArgs> | null | undefined
  // ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchFreeBoardsCreatedAt">>>;
  refetchCreatedAt: any;
  refetchLikeCount: any;
  refetchBoardsNumber: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchFreeBoardsNumber">>>;
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
  // onFetchMore: () => void;
  data: Pick<IQuery, "fetchFreeBoardsCreatedAt"> | undefined;
  onErrorImg: (e: SyntheticEvent<HTMLImageElement>) => void;
  onClickMoveToDetail: (el: any) => (event: any) => void;
  keyword: string;
  onChangeKeyword: (value: string) => void;
  refetch: any;
}

export interface ILikeCountListUIProps {
  // onFetchMore: () => void;
  data: Pick<IQuery, "fetchFreeBoardsLikeCount"> | undefined;
  onErrorImg: (e: SyntheticEvent<HTMLImageElement>) => void;
  onClickMoveToDetail: (el: any) => (event: any) => void;
  keyword: string;
  onChangeKeyword: (value: string) => void;
  refetch: any;
}

export interface ITextTokenProps {
  isMatched: boolean;
}

export interface ITagsProps {
  name: string;
}
