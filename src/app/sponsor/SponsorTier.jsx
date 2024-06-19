import PropTypes from 'prop-types';
import SponsorInfo from './SponsorInfo';

import './sponsorTier.scss';
import './supportOrgInfo.scss';

export default function SponsorTier({ name, sponsors }) {
  if (name !== 'Supporting Organization') {
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
  /* Supporting Organization */
  return (
    <section className="section">
      <h3 className="title sponsorTier__title">{name}</h3>
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-content">
              <div className="content">
                <div className="columns sponsorInfo supportOrgInfo">
                  {sponsors.map(({
                    title, logo,
                  }) => (
                    <div className="column is-3" key={title}>
                      <div className="card-image supportOrgAspect">
                        <figure className="image sponsorInfo__logo">
                          <img src={logo} alt={title} style={{ borderRadius: 0 }} />
                        </figure>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
