import _ from "lodash";
import { ChangeEvent } from "react";
import Searchbars02UI from "./Searchbars02.presenter";

export default function Searchbars02(props: any) {
  const getDebounce = _.debounce((data) => {
    // const filtered = props.data?.search_cafelist.filter(
    //   (cafeList: any) => {
    //     return cafeList.name.toUpperCase().includes(data);
    //   }
    // );

    props.refetch({
      search_cafelist: "",
    });
    props.refetchCafeListNumber({ search: data });
    props.onChangeKeyword(data);
  }, 300);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <Searchbars02UI onChangeSearch={onChangeSearch} />;
}
