import { Div, Page } from "./Pagination.styles";
import { CommunityPaginationUIProps } from "./Pagination.types";

export default function CommunityPaginationUI(props: CommunityPaginationUIProps) {
  return (
    <Div>
      <Page onClick={props.onClickPrevPage}>{`<`}</Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <Page
              key={index + props.startPage}
              onClick={props.onClickPage}
              id={String(index + props.startPage)}
              // isActive={props.startPage + Number(index) === props.activePage}
            >
              {index + props.startPage}
            </Page>
          )
      )}
      <Page onClick={props.onClickNextPage}>{`>`}</Page>
    </Div>
  );
}
