import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function Test() {
  registerLocale("ko", ko);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <DatePicker
        locale="ko"
        dateFormat="yyyy년 MM월 dd일"
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        // customInput={<CustomInput inputType={type} />}
      />
      <select name="choice">
        <option value="first">11:00</option>
        <option value="second" selected>
          12:00
        </option>
        <option value="third">13:00</option>
        <option value="third">14:00</option>
        <option value="third">15:00</option>
        <option value="third">16:00</option>
      </select>
    </>
  );
}
