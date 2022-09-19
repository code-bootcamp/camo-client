import { gql, useQuery } from "@apollo/client";
import _ from "lodash";
import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const SEARCH_BOARDS = gql`
  query searchBoards($search_board: String) {
    searchBoards(search_board: $search_board) {
      id
      title
    }
  }
`;

const FETCH_CAFE_LISTS = gql`
  query fetchCafeLists($page: Float = 1) {
    fetchCafeLists(page: $page) {
      id
      title
    }
  }
`;

export default function LandingTemp() {
  const { data } = useQuery(FETCH_CAFE_LISTS);
  const { data: searchData, refetch } = useQuery(SEARCH_BOARDS);
  const [searchedData, setSearchedData] = useState(data?.fetchCafeLists);

  console.log(data);
  console.log(data?.fetchCafeLists?.[0].id);

  const getDebounce = _.debounce((value) => {
    // refetch({ search: value, page: 1 });
    // setKeyword(value);
    const filtered = data?.fetchCafeLists.filter((asd: any) => {
      return asd.title.includes(data);
    });
    setSearchedData(filtered);
  }, 1000); // 1sec

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const onClickPage = (event: any) => {
    if (!(event.target instanceof HTMLSpanElement)) return;
    // refetch({ search, page: Number(event.target.id) });
    refetch({ page: Number(event.target.id) }); // 해당 결과는 리패치하므로, 입력되지 않은 인자는 굳이 입력안해도 재사용됨
  };

  return (
    <>
      검색어입력 : <input type="text" onChange={onChangeSearch} />
      {data?.fetchBoards?.map((el: any) => (
        <div key={el._id}>
          <div>{el.writer}</div>
          <div>
            {el.title
              .replaceAll(searchedData, `#$%${searchedData}#$%`)
              .split("#$%")
              .map((el: any) => (
                <span key={uuidv4()} style={{ color: searchedData === el ? "red" : "black" }}>
                  {el}
                </span>
              ))}
          </div>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
