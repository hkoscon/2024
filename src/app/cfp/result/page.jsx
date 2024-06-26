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
                {events.map((event) => event.display).sort().reduce((acc, event) => {
                  switch (event) {
                    case 'Lunch':
                    case 'Break':
                    case 'Keynote Session':
                    case 'Closing':
                    case 'Opening':
                    case 'Lightning Talk':
                      return acc;
                    default:
                      if (event.startsWith('Group Photo')) return acc;
                  }
                  if (event !== acc[acc.length - 1]) {
                    acc.push(event);
                  }
                  return acc;
                }, []).map((event) => (
                  <li key={event}>{event}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
