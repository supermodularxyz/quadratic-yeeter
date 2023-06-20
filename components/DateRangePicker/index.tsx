"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange, SelectRangeEventHandler } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  from: Date
  placeholder?: string
  selected?: DateRange,
  selectionHandler?: SelectRangeEventHandler,
  defaultRange?: DateRange
}

export default function DateRangePicker({
  className,
  from,
  placeholder,
  selected,
  selectionHandler,
  defaultRange
}: Props) {
  const [date, setDate] = React.useState<Props["defaultRange"]>(defaultRange)

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal text-brand-green border-brand-outline focus:border-brand-green placeholder:text-brand-outline hover:bg-transparent hover:text-brand-green",
              !selected && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selected?.from ? (
              selected.to ? (
                <>
                  {format(selected.from, "LLL dd, y")} -{" "}
                  {format(selected.to, "LLL dd, y")}
                </>
              ) : (
                format(selected.from, "LLL dd, y")
              )
            ) : (
              <span>{placeholder || "Pick a date"}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={defaultRange?.from}
            selected={selected}
            fromDate={from}
            onSelect={selectionHandler}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
