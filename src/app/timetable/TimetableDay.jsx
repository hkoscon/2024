import PropTypes from 'prop-types';
import Timeslot from './Timeslot';

export default function TimetableDay({ day, timeslots }) {
  return (
    <div id={`day${day}`} className="my-4">
      <div className="columns">
        <div className="column is-12 my-4">
          <h4 className="is-size-3 has-text-weight-semibold">
            {`Day ${day}`}
          </h4>
        </div>
      </div>
      {timeslots.map(({ startTime, events }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Timeslot key={`day${day}-timeslot-${index}`} startTime={startTime} events={events} />
      ))}
    </div>
  );
}

TimetableDay.propTypes = {
  day: PropTypes.string.isRequired,
  timeslots: PropTypes.arrayOf(PropTypes.shape(Timeslot.propTypes)).isRequired,
};
