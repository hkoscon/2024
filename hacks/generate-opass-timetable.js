const fs = require('node:fs');
const path = require('node:path');

const source = path.resolve(__dirname, '../src/app/timetable.json');
const dest = path.resolve(__dirname, '../public/opass-timetable.json');

function readData() {
  return new Promise((resolve, reject) => {
    fs.readFile(source, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

function writeData(data) {
  return new Promise((resolve, reject) => {
    fs.mkdir(path.dirname(dest), (err) => {
      if (err) { reject(err); } else {
        fs.writeFile(dest, JSON.stringify(data, null, 2), (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }
    });
  });
}

function findAllVenue(days) {
  const rooms = days
    .flatMap(
      ({ timeslots }) => timeslots.flatMap(({ events }) => (events.map(({ venue }) => venue.name))),
    )
    .filter((venue) => !!venue);
  return Array.from(new Set(rooms))
    .map((room) => ({
      id: room,
      zh: { name: room },
      en: { name: room },
    }));
}

function findAllSpeakers(days) {
  const speakerMap = new Map();
  days.forEach(({ timeslots }) => {
    timeslots.forEach(({ events }) => {
      events.forEach(({ speakers }) => {
        speakers.forEach((speaker) => {
          speakerMap.set(`${speaker.name}:${speaker.country}:${speaker.community}`, speaker);
        });
      });
    });
  });
  return Array.from(speakerMap.entries())
    .map(([id, speaker]) => ({
      id,
      avatar: speaker.thumbnail || 'https://hkcota.org/wp-content/uploads/2024/06/nAcTmnXK9a9vhnkh-hkoscon_2024_avatar_white_bg.png',
      zh: { name: speaker.name, bio: '' },
      en: { name: speaker.name, bio: '' },
    }));
}

function findAllSessions(days) {
  return days
    .flatMap(
      ({ date, timeslots }) => timeslots.flatMap(({ events, startTime, endTime }) => (events.map(({
        id, venue, display, speakers, internal, topic,
      }) => {
        const link = internal.match(/([\w-]+)$/)[0];
        return {
          id,
          type: topic ? 'speech' : 'event',
          room: venue.name,
          start: `${date}T${startTime}:00+08:00`,
          end: `${date}T${endTime}:00+08:00`,
          url: `https://hkoscon.org/2024/topic/${link}`,
          zh: { title: display },
          en: { title: display },
          speakers: speakers.map((speaker) => `${speaker.name}:${speaker.country}:${speaker.community}`),
        };
      }))),
    );
}

(async () => {
  const { days } = await readData();
  const timetable = {
    rooms: findAllVenue(days),
    sessions: findAllSessions(days),
    speakers: findAllSpeakers(days),
    session_types: [
      {
        id: 'speech',
        zh: { name: 'Speech' },
        en: { name: 'Speech' },
      },
      {
        id: 'event',
        zh: { name: 'Event' },
        en: { name: 'Event' },
      },
    ],
    tags: [],
  };
  await writeData(timetable);
})();
