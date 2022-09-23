import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState, MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { reservedState } from "../../../commons/store";
import { IMutation, IMutationCreatePaymentArgs } from "../../../commons/types/generated/types";
import { getTime } from "../../commons/getDate";
import ReservationUI from "./Reservation.presenter";
import {
  CREATE_CAFE_RESERVATION,
  CREATE_PAYMENT,
  FETCH_CAFE_LIST,
  FETCH_LOGINED_USER,
} from "./Reservation.queries";

declare const window: typeof globalThis & {
  IMP: any;
};
type timeTable = {
  start_time: string;
  end_time: string;
  reserved: boolean;
};

const hour: Array<timeTable> = [
  { start_time: "11:00", end_time: "12:00", reserved: false },
  { start_time: "12:00", end_time: "13:00", reserved: false },
  { start_time: "13:00", end_time: "14:00", reserved: false },
  { start_time: "14:00", end_time: "15:00", reserved: false },
  { start_time: "15:00", end_time: "16:00", reserved: false },
  { start_time: "16:00", end_time: "17:00", reserved: false },
  { start_time: "17:00", end_time: "18:00", reserved: false },
  { start_time: "18:00", end_time: "19:00", reserved: false },
  { start_time: "19:00", end_time: "20:00", reserved: false },
  { start_time: "20:00", end_time: "21:00", reserved: false },
];

export default function Reservation() {
  const router = useRouter();
  // 날짜, 시간, 인원, 가격
  const [price, setPrice] = useState(0);
  const [guest, setGuest] = useState(0);
  const [clicked, setClicked] = useState<string[]>([]);
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [timeTable, setTimeTable] = useState(false);
  const [disabled, setDisabled] = useState(false);
  // const [reserved, setReserved] = useRecoilState<any>(reservedState);
  const [reserved] = useRecoilState<any>(reservedState);
  const [open, setOpen] = useState(false);
  // const size = useWindowSize();

  const { data: UserData } = useQuery(FETCH_LOGINED_USER);
  const { data: CafeData } = useQuery(FETCH_CAFE_LIST, {
    variables: { cafeListId: String(router.query.cafeId) },
  });

  // console.log("ReservationContainer", CafeData);

  const [createPayment] = useMutation<Pick<IMutation, "createPayment">, IMutationCreatePaymentArgs>(
    CREATE_PAYMENT
  );
  const [createCafeReservation] =
    useMutation<Pick<IMutation, "createCafeReservation">>(CREATE_CAFE_RESERVATION);

  // 모바일
  useEffect(() => {
    setOpen(true);
  }, []);

  const onDismiss = () => {
    setOpen(false);
  };

  const onClickSetTime = (event: MouseEvent<HTMLButtonElement>) => {
    const newClicked = [];
    newClicked.push((event.target as HTMLButtonElement).value);
    setClicked(newClicked);
    if (Number(startTime.slice(0, 2)) > Number(endTime.slice(0, 2))) {
      setPrice(10000);
    } else {
      setPrice(100);
    }
    console.log(price, clicked);
    setTimeTable(false);
  };
  const onClickCancel = () => {
    setTimeTable((prev) => !prev);
  };

  useEffect(() => {
    setStartTime(clicked.length === 0 ? "" : clicked[0].slice(0, 5));
    setEndTime(clicked.length === 0 ? "" : clicked[0].slice(6));
    if (Number(startTime.slice(0, 2)) > Number(endTime.slice(0, 2))) {
      setPrice(100);
    } else if (Number(startTime.slice(0, 2)) < Number(endTime.slice(0, 2))) {
      setPrice(100);
    } else {
      setPrice(0);
    }
  }, [clicked, startTime]);

  useEffect(() => {
    console.log("changeDate", date);
  }, [date]);

  const onIncrease = () => {
    setGuest((prev) => prev + 1);
  };
  const onDecrease = () => {
    if (guest === 0) return;
    setGuest((prev: number) => prev - 1);
  };

  const onClickTime = () => {
    if (!date) {
      Modal.error({ content: "날짜를 선택해주세요." });
      return;
    }
    setTimeTable((prev) => !prev);
  };

  const NextDay = new Date();
  const MaxDay = new Date();

  NextDay.setDate(NextDay.getDate() + 1);
  MaxDay.setDate(MaxDay.getDate() + 30);

  const onChangeDate = async (newValue: string) => {
    console.log("onChangeDate", newValue);
    const date = getTime(newValue);
    console.log("onChangeDate", date);
    setDisabled(false);
    setDate(date);
  };

  const onClickPayment = async () => {
    if (!date) {
      Modal.error({ content: "예약일을 선택해주세요." });
      return;
    } else if (!startTime) {
      Modal.error({ content: "시간을 선택해주세요." });
    } else if (!guest) {
      Modal.error({ content: "인원을 선택해주세요." });
      return;
    }
    const IMP = window.IMP;
    IMP.init("imp27128482");
    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        name: "CAMO",
        amount: CafeData?.fetchCafeList.deposit,
        // amount: 100,
        buyer_email: UserData?.fetchLoginedUser.email,
        buyer_name: UserData?.fetchLoginedUser.name,
        buyer_tel: UserData?.fetchLoginedUser.phoneNumber,
        // m_redirect_url: "http://localhost:3000/myPage/myReservation",
        m_redirect_url: "https://cafemoment.stie/myPage/myReservation",
      },
      async (rsp: any) => {
        if (rsp.success) {
          // 결제 성공 시 로직
          try {
            const paymentResult = await createPayment({
              variables: {
                impUid: String(rsp.imp_uid),
                // amount: 100,
                amount: CafeData?.fetchCafeList.deposit,
              },
            });
            console.log(paymentResult);
            // router.push("/myPage/myReservation");
          } catch (error) {
            console.log(error);
          }
          try {
            await createCafeReservation({
              variables: {
                createReservationInput: {
                  orderRequest: "",
                  reservedPeople: guest,
                  reservationDate: date,
                  startTime,
                  endTime,
                  cafeListId: String(router.query.cafeId),
                  userId: UserData?.fetchLoginedUser.id,
                },
              },
            });
            // console.log(ReservationResult);
            router.push("/myPage/myReservation");
          } catch (error) {
            // console.log(error);
          }
          // console.log(rsp);
        } else {
          // 결제 실패 시 로직
          alert("결제에 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
  };

  const onClickMobileReservationBtn = () => {
    router.push("/reservationMobile");
  };
  return (
    <>
      <div>
        <Head>
          {/* <!-- jQuery --> */}
          <script
            type="text/javascript"
            src="https://code.jquery.com/jquery-1.12.4.min.js"
          ></script>
          {/* <!-- iamport.payment.js --> */}
          <script
            type="text/javascript"
            src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
          ></script>
        </Head>
      </div>
      {/* {size.width > 767 ? (
        <ReservationUI
          hour={hour}
          price={price}
          date={date}
          NextDay={NextDay}
          MaxDay={MaxDay}
          onChangeDate={onChangeDate}
          guest={guest}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onClickTime={onClickTime}
          timeTable={timeTable}
          startTime={startTime}
          endTime={endTime}
          onClickPayment={onClickPayment}
          onClickCancel={onClickCancel}
          clicked={clicked}
          reserved={reserved}
          disabled={disabled}
          onClickSetTime={onClickSetTime}
          CafeData={CafeData}
          // 모바일
          open={open}
          setOpen={setOpen}
          onDismiss={onDismiss}
        />
      ) : (
        <ReservationMobileUI
          hour={hour}
          price={price}
          date={date}
          NextDay={NextDay}
          MaxDay={MaxDay}
          onChangeDate={onChangeDate}
          guest={guest}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onClickTime={onClickTime}
          timeTable={timeTable}
          startTime={startTime}
          endTime={endTime}
          onClickPayment={onClickPayment}
          onClickCancel={onClickCancel}
          clicked={clicked}
          reserved={reserved}
          disabled={disabled}
          onClickSetTime={onClickSetTime}
          CafeData={CafeData}
          // 모바일
          open={open}
          setOpen={setOpen}
          onDismiss={onDismiss}
        />
      )} */}
      <ReservationUI
        hour={hour}
        price={price}
        date={date}
        NextDay={NextDay}
        MaxDay={MaxDay}
        onChangeDate={onChangeDate}
        guest={guest}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onClickTime={onClickTime}
        timeTable={timeTable}
        startTime={startTime}
        endTime={endTime}
        onClickPayment={onClickPayment}
        onClickCancel={onClickCancel}
        clicked={clicked}
        reserved={reserved}
        disabled={disabled}
        onClickSetTime={onClickSetTime}
        CafeData={CafeData}
        // 모바일
        open={open}
        setOpen={setOpen}
        onDismiss={onDismiss}
        onClickMobileReservationBtn={onClickMobileReservationBtn}
      />
    </>
  );
}
