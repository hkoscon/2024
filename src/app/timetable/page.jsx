import { timetable } from '../data';
import TimetableDay from './TimetableDay';

export default function Page() {
  return (
    <div className="container is-fluid">
      {timetable.map(({ day, timeslots }) => (
        <TimetableDay key={`day${day}`} day={day} timeslots={timeslots} />
      ))}
    </div>
  );
}
