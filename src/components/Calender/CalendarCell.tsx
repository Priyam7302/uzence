interface Props {
  day: number;
  isToday: boolean;
}

export function CalendarCell({ day, isToday }: Props) {
  return (
    <div
      className={`border h-24 p-2 ${
        isToday ? "bg-blue-100" : ""
      }`}
    >
      <span className="text-sm">{day}</span>
    </div>
  );
}
