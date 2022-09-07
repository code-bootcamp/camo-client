import LayoutSidebar from "../../../commons/layout/sidebar/LayoutSidebar.container";
import * as B from "../MyPage.styles";
import { IMyPageUIProps } from "../MyPage.types";
import * as S from "./MyLike.styles";

export default function MyLikeUI(props: IMyPageUIProps) {
  return (
    <>
      <B.Wrapper>
        <LayoutSidebar />
        <B.Body>
          <B.StayMenu>찜목록</B.StayMenu>
          <B.Line />
          {/**  찜 리스트 맵 돌리기 */}
          <S.LikeWrapper>
            <S.CafeWrapper>
              <S.CafeImage src="/Rectangle 3118.png" />
              <S.CafeName>
                달콤 카페 <S.HeartIcon />
              </S.CafeName>
              <S.CafeDetail>Cafe Location Cafe Location</S.CafeDetail>
            </S.CafeWrapper>
            <S.CafeWrapper>
              <S.CafeImage src="/Rectangle 3118.png" />
              <S.CafeName>
                달콤 카페 <S.HeartIcon />
              </S.CafeName>
              <S.CafeDetail>Cafe Location Cafe Location</S.CafeDetail>
            </S.CafeWrapper>
            <S.CafeWrapper>
              <S.CafeImage src="/Rectangle 3118.png" />
              <S.CafeName>
                달콤 카페 <S.HeartIcon />
              </S.CafeName>
              <S.CafeDetail>Cafe Location Cafe Location</S.CafeDetail>
            </S.CafeWrapper>
            <S.CafeWrapper>
              <S.CafeImage src="/Rectangle 3118.png" />
              <S.CafeName>
                달콤 카페 <S.HeartIcon />
              </S.CafeName>
              <S.CafeDetail>Cafe Location Cafe Location</S.CafeDetail>
            </S.CafeWrapper>
            <S.CafeWrapper>
              <S.CafeImage src="/Rectangle 3118.png" />
              <S.CafeName>
                달콤 카페 <S.HeartIcon />
              </S.CafeName>
              <S.CafeDetail>Cafe Location Cafe Location</S.CafeDetail>
            </S.CafeWrapper>
            <S.CafeWrapper>
              <S.CafeImage src="/Rectangle 3118.png" />
              <S.CafeName>
                달콤 카페 <S.HeartIcon />
              </S.CafeName>
              <S.CafeDetail>Cafe Location Cafe Location</S.CafeDetail>
            </S.CafeWrapper>
          </S.LikeWrapper>
        </B.Body>
      </B.Wrapper>
    </>
  );
}
