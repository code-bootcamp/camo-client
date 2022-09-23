import { MouseEvent } from "react";

export interface Iel {}
export interface ISearchContainerProps {
  onClickMoveToDetail: (el: Iel) => (event: MouseEvent<HTMLDivElement>) => void;
}

export interface ISearchPresenterProps {
  data?: any;
  keyword: string;
  onClickMoveToDetail: any;
  refetch: any;
  onChangeKeyword: (value: string) => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
