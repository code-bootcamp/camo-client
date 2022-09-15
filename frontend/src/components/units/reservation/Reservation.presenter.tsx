import * as S from "./Reservation.styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

export default function ReservationUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.MainWrapper>
          <S.TextWrapper>
            <S.Label>예약하기</S.Label>
          </S.TextWrapper>
          {/* <DatePicker/> */}
          <br></br>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="예약일"
              value={props.date}
              minDate={props.Nextday}
              maxDate={props.MaxDay}
              inputFormat={"yyyy-MM-dd"}
              mask={"____-__-__"}
              onChange={props.onChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <S.SelectWrapper>
            <S.SelectPeople name="selectPeople">
              <option value="first">1명</option>
              <option value="second">2명</option>
              <option value="second">3명</option>
              <option value="second">4명</option>
              <option value="second">5명</option>
            </S.SelectPeople>
            <S.SelectTime name="selectTime">
              <option value="first">11:00</option>
              <option value="second">12:00</option>
              <option value="third">13:00</option>
              <option value="third">14:00</option>
              <option value="third">15:00</option>
              <option value="third">16:00</option>
            </S.SelectTime>
          </S.SelectWrapper>
          <S.MoneyWrapper>
            <S.MoneyLabel>예약금</S.MoneyLabel>
            <S.Money>5000원</S.Money>
          </S.MoneyWrapper>
          <S.SubmitButton>결제하기</S.SubmitButton>
        </S.MainWrapper>
      </S.Wrapper>
    </>
  );
}
