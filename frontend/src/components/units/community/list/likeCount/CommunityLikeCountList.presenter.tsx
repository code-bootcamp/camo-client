import * as S from "../CommunityList.styles";
import { v4 as uuidv4 } from "uuid";
// import Paginations01 from "../../../commons/pagination/01/Paginations01.container";
import { ILikeCountListUIProps, ITagsProps } from "../CommunityList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function CommunityLikeCountListUI(props: ILikeCountListUIProps) {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onFetchMore} hasMore={true}>
      <S.ItemWrapper>
        {props.data?.fetchBoardsLikeCount.map((el: any) => (
          <S.ItemContent key={uuidv4()} onClick={props.onClickMoveToDetail(el)}>
            <S.ItemImgWrapper>
              <S.ItemImg
                src={
                  el.images
                    ? `https://storage.googleapis.com/${el.images[0]?.url}`
                    : "https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYwfHxjYWZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                }
                onError={props.onErrorImg}
              />
            </S.ItemImgWrapper>
            <S.ItemTextWrapper>
              <S.ItemTextTitleWrapper>
                <S.ItemTextTitle>{el.title}</S.ItemTextTitle>
                {el.tags?.map(({ name }: ITagsProps) => {
                  return <S.ItemTextTag key={uuidv4()}>{`#${name}`}</S.ItemTextTag>;
                })}
              </S.ItemTextTitleWrapper>

              <S.ItemTextUserWrapper>
                <S.ItemTextLikeWrapper>
                  <S.ItemTextLikeCount>
                    {el.likeCount === null || undefined ? 0 : el.likeCount}
                  </S.ItemTextLikeCount>
                  <S.ItemTextLike />
                </S.ItemTextLikeWrapper>
                <S.ItemTextUser>{el.user?.nickName}</S.ItemTextUser>
              </S.ItemTextUserWrapper>
            </S.ItemTextWrapper>
          </S.ItemContent>
        ))}
      </S.ItemWrapper>
    </InfiniteScroll>
  );
}
