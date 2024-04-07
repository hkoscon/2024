import './page.scss';

const cfpLink = process.env.NEXT_PUBLIC_CFP_LINK || 'https://forms.gle/rTXGZgdEJNUPxnnv5';

export default function CfpPage() {
  return (
    <>
      <header className="hero is-medium cfpPage__hero">
        <div className="hero-body">
          <h1 className="title cfpPage__hero__title">HKOSCon 2024</h1>
          <h2 className="subtitle cfpPage__hero__subtitle">Call for Proposals</h2>
        </div>
      </header>
      <main className="container">
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
              <time dateTime="2024-04-10T23:59:59+08:00">17th April 2024 (Wed) 23:59 HKT</time>
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
      </main>
    </>
  );
}
