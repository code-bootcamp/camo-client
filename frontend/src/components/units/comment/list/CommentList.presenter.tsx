import InfiniteScroll from "react-infinite-scroller";
import CommentListItemUI from "./CommentListItem.presenter";
import { ICommentListUIProps } from "./CommentList.types";

export default function CommentListUI(props: ICommentListUIProps) {
  if (!props.data) return <div />;
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true} useWindow={false}>
      {props.data?.fetchComments.map((el) => <CommentListItemUI key={el.id} el={el} />) || (
        <div></div>
      )}
    </InfiniteScroll>
  );
}
