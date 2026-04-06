"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "./utils";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Calendar } from "./calendar";

interface MonthPickerProps {
  selectedMonth: string; // YYYY-MM format
  onMonthChange: (month: string) => void;
  availableMonths?: string[];
  className?: string;
}

export function MonthPicker({
  selectedMonth,
  onMonthChange,
  availableMonths,
  className,
}: MonthPickerProps) {
  const [open, setOpen] = React.useState(false);
  const [currentDate, setCurrentDate] = React.useState<Date>(
    new Date(selectedMonth + "-01")
  );

  const handleMonthSelect = (date: Date | undefined) => {
    if (date) {
      const monthStr = format(date, "yyyy-MM");
      
      // If availableMonths is provided, check if this month is available
      if (availableMonths && availableMonths.length > 0) {
        if (availableMonths.includes(monthStr)) {
          onMonthChange(monthStr);
          setCurrentDate(date);
          setOpen(false);
        }
      } else {
        onMonthChange(monthStr);
        setCurrentDate(date);
        setOpen(false);
      }
    }
  };

  const isMonthDisabled = (date: Date) => {
    if (!availableMonths || availableMonths.length === 0) {
      return false;
    }
    const monthStr = format(date, "yyyy-MM");
    return !availableMonths.includes(monthStr);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "justify-start text-left font-normal",
            !selectedMonth && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedMonth
            ? format(new Date(selectedMonth + "-01"), "MMMM yyyy")
            : "Select month"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={currentDate}
          onSelect={handleMonthSelect}
          disabled={isMonthDisabled}
          month={currentDate}
          onMonthChange={setCurrentDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
