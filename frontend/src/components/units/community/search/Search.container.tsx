import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import SearchPresenter from "./Search.presenter";
import { SEARCH_BOARDS } from "./Search.queries";
import { Iel } from "./Search.types";

export default function SearchContainer() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery(SEARCH_BOARDS, {
    variables: {
      search_board: keyword,
    },
  });

  const onClickMoveToDetail = (el: Iel) => (event: MouseEvent) => {
    router.push(`/community/${event.currentTarget.id}`);
  };

  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

  return (
    <SearchPresenter
      data={data}
      keyword={keyword}
      onClickMoveToDetail={onClickMoveToDetail}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
