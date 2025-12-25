import { MonthView } from "./MonthView";
export interface CalendarEvent {
  id: string;
  title: string;
  date: number;
}

export function CalendarView() {
    const events: CalendarEvent[] = [
  { id: "1", title: "Meeting", date: 15 },
  { id: "2", title: "Lunch", date: 15 },
];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Calendar</h1>
      <MonthView />
    </div>
  );
}
