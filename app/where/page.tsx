
"use client";


import "./page.css";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button.tsx";
import { PlacePicker } from "../../components/place_picker.tsx";


export interface WhereProps {
  searchParams: Promise<{ date?: string, time?: string }>;
}

const SUGGESTED_PLACES=[
  "Lake View Park",
  "Differential Eqations Date 😭",
  "Random Walk",
  "St. Paul's Cathedral",
  "Victoria Memorial",
  "Mother's Wax Meuseum",
  "Indian Meuseum",
  "Shaheed Minar",
  "Maidan",
  "Elliot Park",
];

const MEETUP_PLACES=[
  "Dakshineswar",
  "Baranagar",
  "Bally",
];


export default function Where({ searchParams }: WhereProps) {
  const [meetupPlace,setMeetupPlace]=React.useState<string>();
  const [nextPlace,setNextPlace]=React.useState<string>();

  const router=useRouter();
  async function submit() {
    const { time, date }=await searchParams;

    if(!date || !time || !meetupPlace || !nextPlace) {
      return;
    }

    const payload={
      date,
      time,
      nextPlace,
      meetupPlace,
    };

    try {
      const res=await fetch("https://planner-backend.nearest-river.deno.net",{
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if(!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      router.push("/xd");
    } catch(err) {
      console.error('xd: Error:',err);
    }
  }

  return (
    <div className="location-container w-fit" >
    <PlacePicker places={MEETUP_PLACES} value={meetupPlace} setValue={setMeetupPlace} placeholder="Where do we meet?"/>
    <PlacePicker places={SUGGESTED_PLACES} value={nextPlace} setValue={setNextPlace} placeholder="Where do we go next?"/>
    <Button className="next-btn" variant="ghost" onClick={submit}>
      <span className="btn-txt">Submit</span>
    </Button>
    </div>
  );
}





