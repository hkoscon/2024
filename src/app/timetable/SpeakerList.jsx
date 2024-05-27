import PropTypes from 'prop-types';
import SpeakerRow from './SpeakerRow';

import './speakerList.scss';

export default function SpeakerList({ id, speakers }) {
  return (
    <div className="card-footer has-background-brand-color-blue is-flex-direction-column">
      {speakers.map(({
        name, thumbnail, country, community,
      }) => (
        <SpeakerRow
          key={`${id}-${name}`}
          country={country}
          thumbnail={thumbnail}
          name={name}
          community={community}
        />
      ))}
    </div>
  );
}

SpeakerList.propTypes = {
  id: PropTypes.number.isRequired,
  speakers: PropTypes.arrayOf(PropTypes.shape(SpeakerRow.propTypes)).isRequired,
};
