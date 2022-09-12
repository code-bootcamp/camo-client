import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_NUMBERS,
} from "../../../units/community/list/CommunityList.queries";
import Paginations01UI from "./Paginations01.presenter";

export default function Paginations01(props: any) {
  const { refetch } = useQuery(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_NUMBERS);

  const lastPage = dataBoardsCount ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10) : 0;

  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);
  // const lastPage = props.count ? Math.ceil(props.count / 10) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (!(event.target instanceof Element)) return;
    const activedPage = Number(event.target.id);
    setActivedPage(activedPage);
    props.refetch({ page: activedPage });
  };

  const onClickPrevPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    setActivedPage(startPage - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    setActivedPage(startPage + 10);
    refetch({ page: startPage + 10 });
  };

  return (
    <Paginations01UI
      refetch={refetch}
      startPage={startPage}
      lastPage={lastPage}
      activedPage={activedPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
