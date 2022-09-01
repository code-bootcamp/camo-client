import * as B from "../MyPage.styles";
import * as S from "./MyLike.styles";

export default function MyLikeUI() {
  return (
    <>
      <B.Wrapper>
        <B.SideBar>
          <B.StaySideMenu>찜목록</B.StaySideMenu>
          <B.SideMenu>예약내역</B.SideMenu>
          <B.SideMenu>정보수정</B.SideMenu>
        </B.SideBar>
        <B.Body>
          <B.StayMenu>찜목록</B.StayMenu>
          <B.Line />
          {/**  찜 리스트 맵 돌리기 */}
          <S.LikeWrapper>
            <S.CafeWrapper>
              <S.CafeImage src="/Rectangle 3118.png" />
              <S.CafeName>카페이름</S.CafeName>
            </S.CafeWrapper>
            <S.CafeWrapper>
              <S.CafeImage src="/Rectangle 3118.png" />
              <S.CafeName>카페이름</S.CafeName>
            </S.CafeWrapper>
            <S.CafeWrapper>
              <S.CafeImage src="/Rectangle 3118.png" />
              <S.CafeName>카페이름</S.CafeName>
            </S.CafeWrapper>
            <S.CafeWrapper>
              <S.CafeImage src="/Rectangle 3118.png" />
              <S.CafeName>카페이름</S.CafeName>
            </S.CafeWrapper>
          </S.LikeWrapper>
        </B.Body>
      </B.Wrapper>
    </>
  );
}
