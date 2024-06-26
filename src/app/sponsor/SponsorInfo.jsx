import PropTypes from 'prop-types';

import './sponsorInfo.scss';

export default function SponsorInfo({
  title, logo, description, links,
}) {
  return (
    <div className="columns">
      <div className="column">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <div className="columns sponsorInfo">
                <div className="column is-3">
                  <div className="card-image">
                    <figure className="image sponsorInfo__logo">
                      <img src={logo} alt={title} />
                    </figure>
                  </div>
                </div>
                <div className="column is-9">
                  <h4 className="title">{title}</h4>
                  {/* eslint-disable-next-line react/no-danger */}
                  <div className="content" dangerouslySetInnerHTML={{ __html: description }} />
                  <div className="card-footer">
                    {links.map(({ title: dispalyText, url }) => (
                      <a href={url} key={url} target="_blank" rel="noopener noreferrer" className="card-footer-item">
                        {dispalyText}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SponsorInfo.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};
