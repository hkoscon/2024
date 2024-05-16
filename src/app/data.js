// eslint-disable-next-line import/no-unresolved
import meta from './meta.json';
// eslint-disable-next-line import/no-unresolved
import eventData from './events.json';

const { conference } = meta;

export const { name } = conference;

export const sponsors = conference.sponsors || {};

export const { events } = eventData;
