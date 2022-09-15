import { MouseEvent } from "react";

export interface IReservationUIProps {
  hour: { start_time: string; end_time: string; reserved: boolean }[];
  price: number;
  date: string;
  NextDay: any;
  MaxDay: any;
  onChangeDate: (newValue: any) => void;
  guest: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onClickTime: () => void;
  timeTable: boolean;
  startTime: string;
  endTime: string;
  onClickPayment: () => Promise<void>;
  onClickCancel: () => void;
  clicked: string[];
  reserved: any;
  disabled: boolean;
  onClickSetTime: (event: MouseEvent<HTMLButtonElement>) => void;
  CafeData: any;
}
