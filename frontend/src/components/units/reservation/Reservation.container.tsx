import { useState } from "react";
import ReservationUI from "./Reservation.presenter";

export default function Reservation() {
  // const client = useApolloClient();
  const [date, setDate] = useState<Date | null>(null);
  // const [reservationDate, setReservationDate] = useState();
  // const [price, setPrice] = useState(0);
  // const
  // const onChangeDate = () => {
  //   const date = getTime(newValue);
  //   setDisabled(false);
  //   setDate(True);
  // const reserved = await client.query({

  // })
  // };
  return <ReservationUI />;
}
