import PropTypes from 'prop-types';
import SponsorInfo from './SponsorInfo';

import './sponsorTier.scss';

export default function SponsorTier({ name, sponsors }) {
  return (
    <section className="section">
      <h3 className="title sponsorTier__title">{name}</h3>
      {sponsors.map(({
        title, logo, description, links,
      }) => (
        <SponsorInfo
          key={title}
          title={title}
          logo={logo}
          description={description}
          links={links}
        />
      ))}
    </section>
  );
}

SponsorTier.propTypes = {
  name: PropTypes.string.isRequired,
  sponsors: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
};
