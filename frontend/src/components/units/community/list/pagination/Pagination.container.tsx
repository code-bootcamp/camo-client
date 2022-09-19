import { MouseEvent, useState } from "react";
import CommunityPaginationUI from "./Pagination.presenter";

export default function CommunityPagination(props: any) {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  // const [isActive, setIsActive] = useState(false);

  const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof Element)) return;
    const activePage = Number(event.target.id);
    setActivePage(activePage);
    props.refetch({ page: activePage });
  };

  const onClickPrevPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    setActivePage(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    setActivePage(startPage + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <CommunityPaginationUI
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      activePage={activePage}
      // isActive={isActive}
    />
  );
}
