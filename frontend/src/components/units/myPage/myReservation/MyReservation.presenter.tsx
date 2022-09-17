import LayoutSidebar from "../../../commons/layout/sidebar/LayoutSidebar.container";
import * as B from "../MyPage.styles";
import * as S from "./MyReservation.styles";
import { IMyReservationUIProps } from "./MyReservation.types";
import { v4 as uuidv4 } from "uuid";
import { ICafeReservation } from "../../../../commons/types/generated/types";
import PaginationContainer from "./pagination/Pagination.container";

export default function MyReservationUI(props: IMyReservationUIProps) {
  // console.log(props.ReservationData);
  console.log(props.count);
  return (
    <>
      <B.Wrapper>
        <LayoutSidebar />
        <B.Body>
          <B.StayMenu>예약내역</B.StayMenu>
          <B.Line />
          {/* {props.count?.fetchMyCafeReservation?.map((el: ICafeReservation) => ( */}
          {props.ReservationData?.fetchUserbyId?.cafeReservation?.map((el: ICafeReservation) => (
            <div key={uuidv4()}>
              <S.MainWrapper>
                <S.RowWrapper>
                  <S.Image src="/images/sample/cafe_sample4.jpeg" />
                  <S.ContentBackGround>
                    <S.ContentWrapper>
                      <S.Title>{el.title}</S.Title>
                      <S.RowWrapper>
                        <S.LeftContent>인원 </S.LeftContent>
                        <S.RightContent>| {el.reservedPeople}명</S.RightContent>
                      </S.RowWrapper>
                      <S.RowWrapper>
                        <S.LeftContent>예약금</S.LeftContent>
                        <S.RightContent>| {el.deposit}원</S.RightContent>
                      </S.RowWrapper>
                      <S.RowWrapper>
                        <S.LeftContent>예약 시간 </S.LeftContent>
                        <S.RightContent>
                          | {el.startTime} - {el.endTime}
                          <S.CancelButton onClick={props.onClickCancelButton}>
                            예약 취소
                          </S.CancelButton>
                        </S.RightContent>
                      </S.RowWrapper>
                    </S.ContentWrapper>
                  </S.ContentBackGround>
                </S.RowWrapper>
              </S.MainWrapper>
            </div>
          ))}
          <S.PaginationWrapper>
            <PaginationContainer refetch={props.refetch} count={props.count} />
          </S.PaginationWrapper>
        </B.Body>
      </B.Wrapper>
    </>
  );
}
