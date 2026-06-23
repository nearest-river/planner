
"use client";

import "./place_picker.css";
import * as React from "react"
import { Check, ChevronsUpDown, Plus } from "lucide-react"

import { Button } from "@/components/ui/button.tsx"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command.tsx"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx"


export interface PlacePickerProps {
  places: string[],
  placeholder: string,
  value?: string,
  setValue: (val: string)=> void;
}

export function PlacePicker(props: PlacePickerProps) {
  const [open, setOpen]=React.useState(false);
  const [places, setPlaces]=React.useState(props.places);

  function add_custom_location() {
    const input=(document.querySelector('input[placeholder="Search location..."]') as HTMLInputElement).value;
    if(!input) {
      return;
    }

    setPlaces(prev=> [...prev,input]);
    props.setValue(input);
    setOpen(false);
  };

  function on_item_select(place: string) {
    props.setValue(place);
    setOpen(false);
  }


  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[250px] justify-between">
          {props.value || props.placeholder}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[250px] p-0 cmd-group">
        <Command>
          <CommandInput placeholder="Search location..." />
          <CommandEmpty>
            <Button className="w-full justify-start" onClick={add_custom_location}>
              <Plus className="mr-2 h-4 w-4" />
              Add custom location
            </Button>
          </CommandEmpty>

          <CommandGroup>
            {
              places.map((place) => (
                <CommandItem key={place} value={place} onSelect={()=> on_item_select(place)}>
                  <Check className={`mr-2 h-4 w-4 ${props.value===place?"opacity-100":"opacity-0"}`} />
                  {place}
                </CommandItem>
              ))
            }
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
