// eslint-disable-next-line import/no-unresolved
import { sponsors as sponsorData, supportOrg } from '../data';
import SponsorTier from './SponsorTier';

import './page.scss';

export default function SponsorPage() {
  return (
    <>
      <header className="hero is-medium">
        <div className="hero-body">
          <h1 className="title">Sponsor & Supporting Organization</h1>
        </div>
      </header>
      <main className="container">
        <section className="section">
          <p>
            Hong Kong Open Source Conference is running on its own budget,
            and we cannot make it without the support from our sponsors
            and supporting organizations.
            {Object.values(sponsorData).length > 0 && (
            <> Cordially, we would like to thank the following sponsors for their support.</>
            )}
          </p>
        </section>
        {Object.values(sponsorData).map(({ name, sponsors }) => (
          <SponsorTier key={name} name={name} sponsors={sponsors} />
        ))}
        {Object.values(supportOrg).map(({ name, sponsors }) => (
          <SponsorTier key={name} name={name} sponsors={sponsors} />
        ))}
      </main>
    </>
  );
}
