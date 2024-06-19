import Image from 'next/image';
import logo from '../components/navbar/brand.png';
import './page.scss';

export default function Home() {
  return (
    <main className="homePage">
      <div className="homePage__cover">
        <div className="container columns">
          <div className="homePage__media column is-3-desktop is-flex">
            <Image src={logo} alt="HKOSCon logo" className="homePage__logo m-auto" />
          </div>
          <div className="column is-align-self-center">
            <h1 className="title has-text-brand-color-blue">HKOSCon 2024</h1>
            <h2 className="subtitle">5 - 6 Jul, 2024</h2>
            <h2 className="subtitle">The University of Hong Kong</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
