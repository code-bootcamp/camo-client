import * as B from "../MyPage.styles";
import * as S from "./MyReservation.styles";

export default function MyReservationUI() {
  return (
    <>
      <B.Wrapper>
        <B.SideBar>
          <B.UserWrapper>
            <B.Profile src="/profile.jpeg" />
            <B.ColumnWrapper>
              <B.UserName> OOO 님</B.UserName>
              <B.UserButton>
                <img src="/userEditIcon.png" />
                회원정보수정
              </B.UserButton>
            </B.ColumnWrapper>
          </B.UserWrapper>
          <B.ColumnWrapper>
            <B.SideMenu>찜목록</B.SideMenu>
            <B.StaySideMenu>예약내역</B.StaySideMenu>
            <B.SideMenu>내가쓴글</B.SideMenu>
          </B.ColumnWrapper>
        </B.SideBar>
        <B.Body>
          <B.StayMenu>예약내역</B.StayMenu>
          <B.Line />
          <S.MainWrapper>
            <S.RowWrapper>
              <S.Image src="/cafe_sample.png" />
              <S.ContentBackGround>
                <S.ContentWrapper>
                  <S.Title>Cafe Name</S.Title>
                  <S.RowWrapper>
                    <S.LeftContent>인원 </S.LeftContent>
                    <S.RightContent> | 2명</S.RightContent>
                  </S.RowWrapper>
                  <S.RowWrapper>
                    <S.LeftContent>예약금</S.LeftContent>
                    <S.RightContent> | 5000원</S.RightContent>
                  </S.RowWrapper>
                  <S.RowWrapper>
                    <S.LeftContent>예약 시간 </S.LeftContent>
                    <S.RightContent> | 12:00</S.RightContent>
                  </S.RowWrapper>
                </S.ContentWrapper>
              </S.ContentBackGround>
            </S.RowWrapper>
          </S.MainWrapper>
          <S.MainWrapper>
            <S.RowWrapper>
              <S.Image src="/cafe_sample.png" />
              <S.ContentBackGround>
                <S.ContentWrapper>
                  <S.Title>Cafe Name</S.Title>
                  <S.RowWrapper>
                    <S.LeftContent>인원 </S.LeftContent>
                    <S.RightContent> | 2명</S.RightContent>
                  </S.RowWrapper>
                  <S.RowWrapper>
                    <S.LeftContent>예약금</S.LeftContent>
                    <S.RightContent> | 5000원</S.RightContent>
                  </S.RowWrapper>
                  <S.RowWrapper>
                    <S.LeftContent>예약 시간 </S.LeftContent>
                    <S.RightContent> | 12:00</S.RightContent>
                  </S.RowWrapper>
                </S.ContentWrapper>
              </S.ContentBackGround>
            </S.RowWrapper>
          </S.MainWrapper>
          <S.MainWrapper>
            <S.RowWrapper>
              <S.Image src="/cafe_sample.png" />
              <S.ContentBackGround>
                <S.ContentWrapper>
                  <S.Title>Cafe Name</S.Title>
                  <S.RowWrapper>
                    <S.LeftContent>인원 </S.LeftContent>
                    <S.RightContent> | 2명</S.RightContent>
                  </S.RowWrapper>
                  <S.RowWrapper>
                    <S.LeftContent>예약금</S.LeftContent>
                    <S.RightContent> | 5000원</S.RightContent>
                  </S.RowWrapper>
                  <S.RowWrapper>
                    <S.LeftContent>예약 시간 </S.LeftContent>
                    <S.RightContent> | 12:00</S.RightContent>
                  </S.RowWrapper>
                </S.ContentWrapper>
              </S.ContentBackGround>
            </S.RowWrapper>
          </S.MainWrapper>
        </B.Body>
      </B.Wrapper>
    </>
  );
}
