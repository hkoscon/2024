import PropTypes from 'prop-types';
import EventCard from './EventCard';

import './timeslot.scss';

export default function Timeslot({ startTime, events }) {
  return (
    <div className="columns">
      <div className="column is-1 timeslot__startTime">
        <span className="timeslot__startTime__hour">{startTime.substring(0, 2)}</span>
        <span className="timeslot__startTime__minute">{startTime.substring(3, 5)}</span>
      </div>
      {events.map(({
        id, display, venue, speakers, internal, topic,
      }) => (
        <EventCard
          key={id}
          id={id}
          display={display}
          venue={venue}
          speakers={speakers}
          internal={internal}
          topic={topic}
        />
      ))}
    </div>
  );
}

Timeslot.propTypes = {
  startTime: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape(EventCard.propTypes)).isRequired,
};
