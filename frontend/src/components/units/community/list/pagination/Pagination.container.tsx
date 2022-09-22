import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import { IQuery } from "../../../../../commons/types/generated/types";
import CommunityPaginationUI from "./Pagination.presenter";
import { FETCH_BOARDS_NUMBER } from "./Pagination.querise";

export default function CommunityPagination(props: any) {
  const { data: dataBoardsNumber } =
    useQuery<Pick<IQuery, "fetchBoardsNumber">>(FETCH_BOARDS_NUMBER);

  const [isActive, setIsActive] = useState(false);
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);

  const onClickPage = (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    props.refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      setIsActive(true);
      return;
    }
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
    setActivePage(activePage + 10);
    setIsActive(false);
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= props.lastPage) {
      setStartPage((prev) => prev + 10);
      props.refetch({ page: startPage + 10 });
      setActivePage(activePage - 10);
      setIsActive(false);
    } else {
      setIsActive(true);
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
      isActive={isActive}
      activePage={activePage}
    />
  );
}
