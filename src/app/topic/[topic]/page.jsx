import PropTypes from 'prop-types';
import Image from 'next/image';
import { timetable } from '../../data';
import TopicDescription from './TopicDescription';
import speakerPlaceholder from '../../../assets/images/placeholder.png';

import './page.scss';

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

export async function generateMetadata({ params: { topic: topicId } }) {
  const topic = topicsMap.get(topicId);
  return {
    title: topic.display,
    openGraph: {
      title: `${topic.display} | Hong Kong Open Source Conference 2024`,
    },
  };
}

export default function Page({ params: { topic: topicId } }) {
  const topic = topicsMap.get(topicId);
  return (
    <>
      <section className="hero is-medium has-background-brand-color-blue">
        <div className="hero-body">
          <h1 className="title has-text-brand-color-yellow">{topic.display}</h1>
        </div>
      </section>
      <section className="container my-4 content topicPage__metadata">
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
      <section className="container my-4 topicPage__description">
        <TopicDescription description={topic.description} />
      </section>
      <section className="container my-4">
        {topic.speakers.map(({
          name,
          country,
          community,
          thumbnail,
          description,
        }) => (
          <div className="box my-2" key={name}>
            <div className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  {thumbnail ? (
                    <img src={thumbnail} alt={name} />
                  ) : (
                    <Image src={speakerPlaceholder} width="128" height="128" alt={name} />
                  )}
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{`${name} / ${country}`}</strong>
                  </p>
                  <p>{community}</p>
                  <hr />
                  <TopicDescription description={description} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

Page.propTypes = {
  params: PropTypes.shape({
    topic: PropTypes.string.isRequired,
  }).isRequired,
};
