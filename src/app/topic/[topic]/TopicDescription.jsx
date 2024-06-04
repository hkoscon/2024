'use client';

import PropTypes from 'prop-types';

export default function TopicDescription({ description }) {
  // eslint-disable-next-line react/no-danger
  return <div className="content" dangerouslySetInnerHTML={{ __html: description }} />;
}

TopicDescription.propTypes = {
  description: PropTypes.string.isRequired,
};
