import * as B from "../MyPage.styles";
import * as S from "./MyReservation.styles";

export default function MyReservationUI() {
  return (
    <>
      <B.Wrapper>
        <B.SideBar>
          <B.StaySideMenu>찜목록</B.StaySideMenu>
          <B.SideMenu>예약내역</B.SideMenu>
          <B.SideMenu>정보수정</B.SideMenu>
        </B.SideBar>
        <B.Body>
          <B.StayMenu>예약내역</B.StayMenu>
          <B.Line />
          <S.MainWrapper></S.MainWrapper>
          <S.MainWrapper></S.MainWrapper>
        </B.Body>
      </B.Wrapper>
    </>
  );
}
