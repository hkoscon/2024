import PropTypes from 'prop-types';
import Image from 'next/image';
import speakerPlaceholder from '../../assets/images/placeholder.png';

export default function SpeakerRow({
  name, thumbnail, country, community,
}) {
  return (
    <div className="media my-1 px-4 py-2 speakerList__speaker">
      <figure className="image is-64x64 media-left">
        {thumbnail ? (
          <img src={thumbnail} alt={name} />
        ) : (
          <Image src={speakerPlaceholder} alt={name} height="64" width="64" />
        )}
      </figure>
      <div className="media-content ml-4 mt-2">
        <p className="title is-5 has-text-brand-color-yellow">{country ? `${name} / ${country}` : name}</p>
        {community && (<p className="subtitle is-6 has-text-brand-color-yellow">{community}</p>)}
      </div>
    </div>
  );
}

SpeakerRow.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  country: PropTypes.string,
  community: PropTypes.string,
};

SpeakerRow.defaultProps = {
  thumbnail: null,
  country: undefined,
  community: undefined,
};
