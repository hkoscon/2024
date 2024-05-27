import PropTypes from 'prop-types';
import Link from 'next/link';
import SpeakerList from './SpeakerList';

export default function EventCard({
  id, internal, display, venue, speakers, topic,
}) {
  const card = (
    <div className="card">
      <div className="card-content">
        <p className="title has-text-weight-medium is-size-4">{display}</p>
        <p className="subtitle is-size-6">{venue.name}</p>
      </div>
      {speakers && (<SpeakerList id={id} speakers={speakers} />)}
    </div>
  );

  if (!topic) {
    return (
      <div className="column">
        {card}
      </div>
    );
  }

  const link = internal.match(/([\w-]+)$/)[0];
  return (
    <Link href={`/topic/${link}`} className="column" target="_blank" rel="noopener noreferrer">
      {card}
    </Link>
  );
}

EventCard.propTypes = {
  id: PropTypes.number.isRequired,
  topic: PropTypes.bool.isRequired,
  internal: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
  venue: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  speakers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    country: PropTypes.string,
    community: PropTypes.string,
  })),
};

EventCard.defaultProps = {
  speakers: null,
};
