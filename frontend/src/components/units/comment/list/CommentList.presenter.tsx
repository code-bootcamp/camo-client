import InfiniteScroll from "react-infinite-scroller";
import { ICommentListUIProps } from "./CommentList.types";

export default function CommentListUI(props: ICommentListUIProps) {
  if (!props.data) return <div />;
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.map((el) => (
        <CommentListUIItem key={el.id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
