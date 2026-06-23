"use client";

import "./plan.css";
import React from "react";
import { useRouter } from 'next/navigation';
import { Button } from "../../components/ui/button.tsx";
import { DatePickerTime } from "../../components/date_time_picker.tsx";


export default function When() {
  const [date, setDate]=React.useState<Date>();
  const [time, setTime]=React.useState<string|undefined>("10:30:00");
  const router=useRouter();

  function redirect() {
    if(!date || !time) {
      return;
    }

    const params=new URLSearchParams({
      time,
      date: date.toLocaleDateString(),
    }).toString();

    router.push(`/where?${params}`);
  }

  return (
    <div className="pick-date-container">
      <h1>Pick A Day</h1>
      <DatePickerTime date={date} setDate={setDate} time={time} setTime={setTime} />
      <Button className="next-btn" variant="ghost" onClick={redirect}>
        <span className="btn-txt">Next</span>
      </Button>
    </div>
  );
}






