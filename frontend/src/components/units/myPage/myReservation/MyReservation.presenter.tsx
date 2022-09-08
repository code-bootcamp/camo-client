import LayoutSidebar from "../../../commons/layout/sidebar/LayoutSidebar.container";
import * as B from "../MyPage.styles";
import * as S from "./MyReservation.styles";

export default function MyReservationUI(props) {
  return (
    <>
      <B.Wrapper>
        <LayoutSidebar />
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
        </B.Body>
      </B.Wrapper>
    </>
  );
}
