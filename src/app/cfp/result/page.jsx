import Link from 'next/link';
import CfpHeader from '../CfpHeader';
import { name, events } from '../../data';
import { enableCfpResult, enableTimetable } from '../../features';

export default function Page() {
  if (!enableCfpResult) {
    return (
      <>
        <CfpHeader title={name} />
        <main className="container">
          <section className="section">
            <p>The CFP result is not available for now.</p>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <CfpHeader title={name} subtitle="Call for Proposals Result" />
      <main className="container">
        <section className="section">
          <p>Thanks for supporting us. Here is the CFP result</p>
          {enableTimetable && (
            <Link
              className="button has-text-brand-color-blue has-background-brand-color-blue"
              href="/timetable"
            >
              Timetable is ready.
            </Link>
          )}
        </section>
        <section className="section">
          <div className="card">
            <div className="card-header">
              <h3 className="card-header-title">Accepted Proposal(more to come)</h3>
            </div>
            <div className="card-content content">
              <ul>
                {events.map((event) => (
                  <li key={event.id}>{event.display}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
