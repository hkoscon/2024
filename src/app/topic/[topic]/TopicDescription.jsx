'use client';

import PropTypes from 'prop-types';

export default function TopicDescription({ description }) {
  return <div className="content" dangerouslySetInnerHTML={{ __html: description }} />;
}

TopicDescription.propTypes = {
  description: PropTypes.string.isRequired,
};
