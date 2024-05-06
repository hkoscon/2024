import PropTypes from 'prop-types';

import './header.scss';

export default function CfpHeader({ title, subtitle }) {
  return (
    <header className="hero is-medium cfpPage__hero">
      <div className="hero-body">
        <h1 className="title cfpPage__hero__title">{title}</h1>
        <h2 className="subtitle cfpPage__hero__subtitle">{subtitle}</h2>
      </div>
    </header>
  );
}

CfpHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

CfpHeader.defaultProps = {
  subtitle: 'Call for Proposals',
};
