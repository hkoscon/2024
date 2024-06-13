// eslint-disable-next-line import/no-unresolved
import meta from './meta.json';
// eslint-disable-next-line import/no-unresolved
import eventData from './events.json';
// eslint-disable-next-line import/no-unresolved
import timetableData from './timetable.json';

const { conference } = meta;

export const { name } = conference;

export const sponsors = conference.sponsors || {};

export const supportOrg = {
  'Supporting Organization': {
    name: 'Supporting Organization',
    sponsors: conference.supporting_organizations || {},
  },
};

export const { events } = eventData;

export const { days: timetable } = timetableData;
