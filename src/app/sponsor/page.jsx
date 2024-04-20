import { conference } from './sponsor.json';
import SponsorTier from './SponsorTier';

const { sponsors: sponsorData } = conference;

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
          <p>We would like to thank the following sponsors for their support.</p>
        </section>
        {Object.values(sponsorData).map(({ name, sponsors }) => (
          <SponsorTier key={name} name={name} sponsors={sponsors} />
        ))}
      </main>
    </>
  );
}
