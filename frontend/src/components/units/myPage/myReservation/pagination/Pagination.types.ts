import { MouseEvent } from "react";

export interface IPaginationProps {
  data?: any;
  onClickPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  startPage: number;
  lastPage: number;
  currentPage: number;
  isActive: boolean;
}

// 타입 바꾸기
export interface IPaginationToContainerProps {
  // refetch: (
  //   variables?: Partial<IQueryFetchMyCafeReservationArgs> | undefined
  // ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchMyCafeReservation">>>;
  // count?: number;
  refetch: any;
  count: any;
}

export interface ISlideButtonProps {
  isActive: boolean;
}
