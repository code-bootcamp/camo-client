import * as S from "./CommunityList.styles";

export default function CommunityListUI() {
  const cafeImg = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2047&q=80",
    "https://images.unsplash.com/photo-1567880905822-56f8e06fe630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
    "https://images.unsplash.com/photo-1529676468696-f3a47aba7d5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1600353565737-2427a1ba3d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1601205741712-b261aff33a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=982&q=80",
    "https://images.unsplash.com/photo-1580927942227-c7748860b1b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  ];

  return (
    <S.Wrapper>
      <S.Banner></S.Banner>
      <S.BodyWrapper>
        <S.NavWrapper>
          <S.SortList>
            <S.NewList>최신순</S.NewList>
            <S.LikeList>인기순</S.LikeList>
          </S.SortList>
          <S.InputWrapper>
            <S.Search placeholder="게시글을 검색해보세요" />
            <S.WriteBtn>글쓰기</S.WriteBtn>
          </S.InputWrapper>
        </S.NavWrapper>
        <S.ItemWrapper>
          {cafeImg.map((e, i) => (
            <S.ItemContent key={e}>
              <S.ItemImgWrapper>
                <S.ItemImg src={e} />
              </S.ItemImgWrapper>
              <S.ItemTextWrapper>
                <S.ItemTextTitleWrapper>
                  <S.ItemTextTitle>제목</S.ItemTextTitle>
                  <S.ItemTextTag>#태그 #태그 #태그</S.ItemTextTag>
                </S.ItemTextTitleWrapper>

                <S.ItemTextUserWrapper>
                  <S.ItemTextLikeWrapper>
                    <S.ItemTextLike />
                    <S.ItemTextLikeCount>32</S.ItemTextLikeCount>
                  </S.ItemTextLikeWrapper>
                  <S.ItemTextUser>닉네임</S.ItemTextUser>
                </S.ItemTextUserWrapper>
              </S.ItemTextWrapper>
            </S.ItemContent>
          ))}
        </S.ItemWrapper>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
