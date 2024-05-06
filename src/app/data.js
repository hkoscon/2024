// eslint-disable-next-line import/no-unresolved
import { conference } from './meta.json';
// eslint-disable-next-line import/no-unresolved
import { events } from './events.json';

const { name } = conference;

const sponsors = conference.sponsors || {};

export {
  name,
  sponsors,
  events,
};
