import Link from 'next/link';
import CfpHeader from './CfpHeader';
import { name } from '../data';
import { enableCfpResult, enableTimetable } from '../features';
import './page.scss';

const cfpLink = process.env.NEXT_PUBLIC_CFP_LINK || 'https://forms.gle/rTXGZgdEJNUPxnnv5';

function CfpContent() {
  return (
    <>
      <section className="section">
        <h3 className="title">Motto</h3>
        <p className="has-text-weight-medium mt-3">Open Source Horizon</p>
      </section>
      <section className="section">
        <h3 className="title">Session Duration</h3>
        <ul>
          <li>Short: 15 minutes</li>
          <li>Regular: 25 minutes</li>
        </ul>
      </section>
      <section className="section">
        <h3 className="title">Important Date</h3>
        <ul>
          <li>
            CFP Submission Deadline:
            <time dateTime="2024-04-17T23:59:59+08:00">17th April 2024 (Wed) 23:59 HKT</time>
          </li>
          <li>
            Vetting Result Notification:
            <time dateTime="2024-04-29">29th April 2024 (Mon)</time>
          </li>
          <li>
            Program Publish Date:
            <time dateTime="2024-06-03">3th June 2024 (Mon)</time>
          </li>
          <li>
            Conference Date:
            <time dateTime="2024-07-05">5</time>
            -
            <time dateTime="2024-07-06">6</time>
            {' '}
            July 2024 (Fri & Sat)
          </li>
        </ul>
      </section>
      <section className="section">
        <a className="button cfpPage__button" target="_blank" rel="noreferrer noopener" href={cfpLink}>Submit Now</a>
      </section>
    </>
  );
}

export default function CfpPage() {
  return (
    <>
      <CfpHeader title={name} />
      <main className="container">
        {!enableCfpResult && (<CfpContent />)}
        {enableCfpResult && (
          <section className="section">
            <p>CFP has ended</p>
            <Link
              className="button cfpPage__button"
              href={enableTimetable ? '/timetable' : '/cfp/result'}
            >
              {enableTimetable ? 'Timetable' : 'CFP Result'}
            </Link>
          </section>
        )}
      </main>
    </>
  );
}
