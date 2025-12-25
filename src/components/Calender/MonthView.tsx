import { CalendarCell } from "./CalendarCell";

export function MonthView() {
  const days = Array.from({ length: 42 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-7 gap-px">
      {days.map((day) => (
        <CalendarCell
          key={day}
          day={day}
          isToday={day === 15}
        />
      ))}
    </div>
  );
}
