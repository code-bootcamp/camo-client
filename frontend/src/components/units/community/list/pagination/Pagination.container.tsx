import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";
import CommunityPaginationUI from "./Pagination.presenter";
import { FETCH_BOARDS_NUMBER } from "./Pagination.querise";

export default function CommunityPagination(props: any) {
  const { data: dataBoardsNumber } =
    useQuery<Pick<IQuery, "fetchBoardsNumber">>(FETCH_BOARDS_NUMBER);

  const [startPage, setStartPage] = useState(1);

  const onClickPage = (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    props.refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= props.lastPage) {
      setStartPage((prev) => prev + 10);
      props.refetch({ page: startPage + 10 });
    }
  };

  const lastPage = dataBoardsNumber ? Math.ceil(dataBoardsNumber?.fetchBoardsNumber / 10) : 0;

  return (
    <CommunityPaginationUI
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
    />
  );
}
