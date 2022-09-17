import { useApolloClient, useMutation, useQuery } from "@apollo/client";
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
  FETCH_RESERVATION,
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
  { start_time: "16:00", end_time: "17:00", reserved: true },
];

export default function Reservation() {
  const client = useApolloClient();
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
  const [reserved, setReserved] = useRecoilState<any>(reservedState);

  const { data: UserData } = useQuery(FETCH_LOGINED_USER);

  // variables: { cafeListId: String(router.query.cafeId) },

  const { data: CafeData } = useQuery(FETCH_CAFE_LIST, {
    variables: { cafeListId: "f5998e10-0bca-465e-a294-b6af0b717183" },
  });

  // console.log("ReservationContainer", CafeData);

  const [createPayment] = useMutation<Pick<IMutation, "createPayment">, IMutationCreatePaymentArgs>(
    CREATE_PAYMENT
  );
  const [createCafeReservation] =
    useMutation<Pick<IMutation, "createCafeReservation">>(CREATE_CAFE_RESERVATION);

  const onClickSetTime = (event: MouseEvent<HTMLButtonElement>) => {
    const newClicked = [];
    newClicked.push((event.target as HTMLButtonElement).value);
    setClicked(newClicked);
    if (Number(startTime.slice(0, 2)) > Number(endTime.slice(0, 2))) {
      setPrice(100);
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
      alert("날짜를 선택해주세요.");
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

    // 카페에 있는 예약 항목 불러와야함
    // 예약된 시간 불러오기
    // const reserved = await client.query({
    //   query: FETCH_CAFE_LIST,
    //   variables: {
    //     cafeListId: "c6e87014-b5d9-4be1-a5f1-6dfc73af938d",
    //   },
    // });

    // console.log("onChangeDate", reserved);

    // const reservedTime = reserved.data.fetchCafeList.cafeReservation.startTime;
    // setReserved(reservedTime);

    // console.log(reservedTime);
  };

  const onClickPayment = async () => {
    const IMP = window.IMP;
    IMP.init("imp27128482");
    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        name: "CAMO",
        // 카페 리스트의 deposit을 가져와야함(props.deposit)
        amount: 100, // 최소 금액: 100원이라 100원 이상 결제해야 함
        buyer_email: UserData?.fetchLoginedUser.email,
        buyer_name: UserData?.fetchLoginedUser.name,
        buyer_tel: UserData?.fetchLoginedUser.phoneNumber,
        m_redirect_url: "http://localhost:3000/myPage/myReservation",
        // 배포 시 리다이렉션 바꾸기
        // "https://cafemoment.stie/myPage/myReservation"
      },
      async (rsp: any) => {
        if (rsp.success) {
          // 결제 성공 시 로직
          try {
            const paymentResult = await createPayment({
              variables: {
                impUid: String(rsp.imp_uid),
                amount: 100,
                // amount: CafeData?.fetchCafeList.deposit,
              },
            });
            console.log(paymentResult);
            // router.push("/myPage/myReservation")
          } catch (error) {
            console.log(error);
            alert(error);
            // location.reload();
          }
          try {
            const ReservationResult = await createCafeReservation({
              variables: {
                createReservationInput: {
                  orderRequest: "요청 하드코딩",
                  reservedPeople: guest,
                  reservationDate: date,
                  startTime,
                  endTime,
                  cafeListId: "01a152bc-a23a-4077-aafb-c4fa1fdae252",
                  userId: UserData?.fetchLoginedUser.id,
                },
              },
            });
            console.log(ReservationResult);
            // router.push("/myPage/myReservation")
          } catch (error) {
            console.log(error);
          }
          console.log(rsp);
        } else {
          // 결제 실패 시 로직
          alert("결제에 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
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
      />
    </>
  );
}
