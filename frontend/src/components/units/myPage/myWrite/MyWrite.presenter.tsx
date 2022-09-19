import { v4 as uuidv4 } from "uuid";
import { IBoard } from "../../../../commons/types/generated/types";
import { IMyWriteUIProps } from "./MyWrite.types";
import PaginationContainer from "../myReservation/pagination/Pagination.container";
import { PaginationWrapper } from "../myReservation/MyReservation.styles";

export default function MyWriteUI(props: IMyWriteUIProps) {
  return (
    <>
      <B.Wrapper>
        <LayoutSidebar />
        <B.Body>
          <B.StayMenu>내가 쓴 글</B.StayMenu>
          <B.Line />
          {/* {props.WriteData?.fetchUserMyBoard?.board?.map((el: IBoard) => ( */}
          {props.WriteData?.fetchUserbyId?.board?.map((el: IBoard) => (
            <S.MainWrapper key={uuidv4()}>
              <S.RowWrapper>
                <S.ContentBackGround>
	@@ -27,6 +31,12 @@ export default function MyWriteUI(props: IMyWriteUIProps) {
              </S.RowWrapper>
            </S.MainWrapper>
          ))}
          <PaginationWrapper>
            <PaginationContainer
              refetch={props.refetch}
              count={props.count?.fetchCafeReservationNumber}
            />
          </PaginationWrapper>
        </B.Body>
      </B.Wrapper>
    </>
