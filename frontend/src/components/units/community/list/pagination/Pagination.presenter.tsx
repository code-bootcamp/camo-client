import { Div, Page } from "./Pagination.styles";
import { CommunityPaginationUIProps } from "./Pagination.types";

export default function CommunityPaginationUI(props: CommunityPaginationUIProps) {
  return (
    <Div>
      <Page onClick={props.onClickPrevPage}>{`<`}</Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <Page
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + Number(index) === props.activePage}
            >
              {props.startPage + index}
            </Page>
          )
      )}
      <Page onClick={props.onClickNextPage}>{`>`}</Page>
    </Div>
  );
}
