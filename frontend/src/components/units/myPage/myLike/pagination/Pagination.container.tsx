import { MouseEvent, useState } from "react";
import PaginationUI from "./Pagination.presenter";
import { IPaginationToContainerProps } from "./Pagination.types";

export default function PaginationContainer(props: IPaginationToContainerProps) {
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const lastPage = props.count ? Math.ceil(props.count / 6) : 0;

  const onClickPage = (event: MouseEvent<HTMLButtonElement>) => {
    if (!(event.target instanceof HTMLButtonElement)) return;
    props.refetch({ page: Number(event.target.id) });
    setCurrentPage(Number(event.target.id));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) {
      setIsActive(true);
      return;
    }
    setStartPage((prev) => prev - 6);
    props.refetch({ page: startPage - 6 });
    setCurrentPage(currentPage + 6);
    setIsActive(false);
  };

  const onClickNextPage = () => {
    if (startPage + 6 <= lastPage) {
      setStartPage((prev) => prev + 6);
      props.refetch({ page: startPage + 6 });
      setCurrentPage(currentPage - 6);
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  // jsx
  return (
    <PaginationUI
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      currentPage={currentPage}
      isActive={isActive}
    />
  );
}
