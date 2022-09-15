import { useApolloClient } from "@apollo/client";
import ReservationUI from "./Reservation.presenter";

export default function Reservation() {
  const client = useApolloClient();

  const onChangeDate = () => {
    const date = getTime();
    // const reserved = await client.query({

    // })
  };
  return <ReservationUI />;
}
