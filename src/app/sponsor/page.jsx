// eslint-disable-next-line import/no-unresolved
import { sponsors as sponsorData } from '../data';
import SponsorTier from './SponsorTier';

export default function SponsorPage() {
  return (
    <>
      <header className="hero is-medium">
        <div className="hero-body">
          <h1 className="title cfpPage__hero__title">Sponsor</h1>
        </div>
      </header>
      <main className="container">
        <section className="section">
          <p>
            To cover expenses of conference,
            we are calling for sponsorships of HKOSCon and look for potential sponsors.
          </p>
          {Object.values(sponsorData).length > 0 && (
            <p>We would like to thank the following sponsors for their support.</p>
          )}
        </section>
        {Object.values(sponsorData).map(({ name, sponsors }) => (
          <SponsorTier key={name} name={name} sponsors={sponsors} />
        ))}
      </main>
    </>
  );
}
