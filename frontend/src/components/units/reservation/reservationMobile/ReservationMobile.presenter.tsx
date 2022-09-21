import * as S from "./ReservationMobile.styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { IReservationUIProps } from "./ReservationMobile.types";
import { v4 as uuidv4 } from "uuid";

export default function ReservationUI(props: IReservationUIProps) {
  return (
    <>
      <S.MainWrapper>
        <S.TextWrapper>
          <S.Label>예약하기</S.Label>
        </S.TextWrapper>
        <S.ContentsWrapper>
          {/* fetch.cafeName */}
          <S.ContentsLabel>Starbucks</S.ContentsLabel>
          <S.ContentsAddress>카페주소 어쩌고 저쩌고</S.ContentsAddress>
        </S.ContentsWrapper>
        <br />
        <S.ContentsWrapper>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="예약일을 선택해주세요."
              value={props.date}
              minDate={props.NextDay}
              maxDate={props.MaxDay}
              inputFormat={"yyyy-MM-dd"}
              mask={"____-__-__"}
              onChange={props.onChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </S.ContentsWrapper>
        <br></br>
        <S.ContentsWrapper>
          <S.CheckInWrapper>
            <S.TimeWrapper>
              <S.ViewSetTime value={props.startTime} readOnly />
              <S.ViewSetTimeLine>-</S.ViewSetTimeLine>
              <S.ViewSetTime value={props.endTime} readOnly />
            </S.TimeWrapper>
            <S.CheckInTime onClick={props.onClickTime}>시간선택</S.CheckInTime>
            {props.timeTable && (
              <S.TimesWrapper>
                <S.TimeHead style={{ width: "100%" }}></S.TimeHead>
                {props.hour.map((el) => (
                  <S.TimeBox
                    disabled={props.reserved?.includes(`${el.start_time} - ${el.end_time}`) && true}
                    reserved={el.reserved}
                    value={el.start_time + "-" + el.end_time}
                    id={String(props.hour.indexOf(el))}
                    onClick={props.onClickSetTime}
                    key={uuidv4()}
                  >
                    {el.start_time} - {el.end_time}
                  </S.TimeBox>
                ))}
                <S.TimeToggleCancel onClick={props.onClickCancel} style={{ width: "100%" }}>
                  닫기
                </S.TimeToggleCancel>
              </S.TimesWrapper>
            )}
          </S.CheckInWrapper>
          <S.RowWrapper>
            <S.Text>인원</S.Text>
            <S.CheckInWrapper>
              <S.CheckGuest>
                <S.GuestBtn disabled={!!props.disabled} onClick={props.onDecrease}>
                  <S.PlusMinusBtn>﹣</S.PlusMinusBtn>
                </S.GuestBtn>
                {props.guest}
                <S.GuestBtn disabled={!!props.disabled} onClick={props.onIncrease}>
                  <S.PlusMinusBtn>﹢</S.PlusMinusBtn>
                </S.GuestBtn>
              </S.CheckGuest>
            </S.CheckInWrapper>
          </S.RowWrapper>
        </S.ContentsWrapper>
        <S.MoneyWrapper>
          <S.MoneyLabel>예약금</S.MoneyLabel>
          <S.Money>{props.CafeData?.fetchCafeList.deposit}원</S.Money>
        </S.MoneyWrapper>
        <br></br>
        <S.SubmitButton onClick={props.onClickPayment}>결제하기</S.SubmitButton>
      </S.MainWrapper>
    </>
  );
}
