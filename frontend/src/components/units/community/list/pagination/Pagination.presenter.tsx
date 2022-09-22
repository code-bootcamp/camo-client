import { PageWrapper, Page, PageMoveBtn } from "./Pagination.styles";
import { CommunityPaginationUIProps } from "./Pagination.types";

export default function CommunityPaginationUI(props: CommunityPaginationUIProps) {
  return (
    <PageWrapper>
      <PageMoveBtn
        isActive={props.isActive ? true : props.isActive}
        onClick={props.onClickPrevPage}
      >{`<`}</PageMoveBtn>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <Page
              key={index + props.startPage}
              onClick={props.onClickPage}
              id={String(index + props.startPage)}
              isActive={props.startPage + Number(index) === props.activePage}
            >
              {index + props.startPage}
            </Page>
          )
      )}
      <PageMoveBtn
        isActive={props.isActive ? true : props.isActive}
        onClick={props.onClickNextPage}
      >{`>`}</PageMoveBtn>
    </PageWrapper>
  );
}
