import PropTypes from 'prop-types';
import { timetable } from '../../data';

const topicsMap = new Map();
timetable.forEach(({ day, date, timeslots }) => {
  timeslots.forEach(({ startTime, endTime, events }) => {
    events
      .filter((event) => event.topic)
      .forEach((e) => {
        const key = e.internal.match(/([\w-]+)$/)[0];
        topicsMap.set(key, {
          day,
          date,
          startTime,
          endTime,
          ...e,
        });
      });
  });
});

export async function generateStaticParams() {
  return Array.from(topicsMap.keys())
    .map((key) => ({ topic: key }));
}

export default function Page({ params: { topic: topicId } }) {
  const topic = topicsMap.get(topicId);
  console.log(topic);
  return (
    <>
      <section className="hero is-medium">
        <div className="hero-body">
          <h2 className="title">{topic.display}</h2>
        </div>
      </section>
      <section className="container my-4">
        <p>
          Time:&nbsp;
          <time dateTime={`${topic.date}T${topic.startTime}:00+08:00`}>
            {` Day ${topic.day} (${topic.date}) ${topic.startTime} - ${topic.endTime}`}
          </time>
        </p>
        <p>{`Venue: ${topic.venue.name}`}</p>
        <p>{`Language: ${topic.language}`}</p>
        <p>{`Level: ${topic.level}`}</p>
      </section>
      <section className="container my-4">
        {/* eslint-disable-next-line react/no-danger */}
        <p dangerouslySetInnerHTML={{ __html: topic.description }} />
      </section>
    </>
  );
}

Page.propTypes = {
  params: PropTypes.shape({
    topic: PropTypes.string.isRequired,
  }).isRequired,
};
