import * as B from "../MyPage.styles";
import { IMyPageUIProps } from "../MyPage.types";
import * as S from "./MyLike.styles";

export default function MyLikeUI(props: IMyPageUIProps) {
  return (
    <>
      <B.Wrapper>
        <B.SideBar>
          <B.UserWrapper>
            <B.Profile src="/profile.jpeg" />
            <B.ColumnWrapper>
              <B.UserName>{props.data?.fetchUser.name}님</B.UserName>
              <B.UserButton>
                <img src="/userEditIcon.png" />
                회원정보수정
              </B.UserButton>
            </B.ColumnWrapper>
          </B.UserWrapper>
          <B.ColumnWrapper>
            <B.StaySideMenu>찜목록</B.StaySideMenu>
            <B.SideMenu>예약내역</B.SideMenu>
            <B.SideMenu>내가쓴글</B.SideMenu>
          </B.ColumnWrapper>
        </B.SideBar>
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
