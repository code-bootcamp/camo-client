import * as S from "./Reservation.styles";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
export default function ReservationUI() {
  return (
    <>
      <S.Wrapper>
        <S.MainWrapper>
          <S.TextWrapper>
            <S.Label>예약하기</S.Label>
          </S.TextWrapper>
          {/* <DatePicker/> */}
        </S.MainWrapper>
      </S.Wrapper>
    </>
  );
}
