
import React from "react";
import { format } from "date-fns";
import { Button } from "./ui/button.tsx";
import { ChevronDownIcon } from "lucide-react";

import { Input } from "@/components/ui/input.tsx";
import { Calendar } from "@/components/ui/calendar.tsx";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field.tsx";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover.tsx";


export interface DatePickerProps {
  date?: Date,
  setDate: (date?: Date)=> void,
  time?: string,
  setTime: (time?: string)=> void,
}

export function DatePickerTime({ date, setDate, time, setTime }: DatePickerProps) {
  const [open, setOpen] = React.useState(false)
  // const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <FieldGroup className="mx-auto max-w-xs flex-row">
      <Field>
        <FieldLabel htmlFor="date-picker-optional">Date</FieldLabel>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker-optional"
              className="w-32 justify-between font-normal"
            >
              {date ? format(date, "PPP") : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              defaultMonth={date}
              onSelect={(date)=> {
                setDate(date);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </Field>
      <Field className="w-32">
        <FieldLabel htmlFor="time-picker-optional">Time</FieldLabel>
        <Input
          type="time"
          id="time-picker-optional"
          step="1"
          value={time}
          onChange={(time)=> {
            setTime(`${time}`);
          }}
          className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </Field>
    </FieldGroup>
  )
}


