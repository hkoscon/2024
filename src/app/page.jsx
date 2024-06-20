import Image from 'next/image';
import logo from '../assets/images/kv-logo-600.webp';
import transportationMap from '../assets/images/hku-mingwah-location.webp';
import './page.scss';

export default function Home() {
  return (
    <main className="homePage">
      <section className="homePage__keyvisual">
        <div className="homePage__keyvisual__foreground">
          <div className="homePage__cover">
            <div className="container homePage__main">
              <div className="homePage__logo-wrapper">
                <Image src={logo} alt="HKOSCon logo" className="homePage__logo m-auto" />
              </div>
              <div className="homePage__key-content is-align-self-center">
                <div className="homePage__date">5 - 6 Jul, 2024</div>
                <div className="homePage__venue">
                  Meng Wah Complex,
                  <br />
                  The University of Hong Kong
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homePage__transportation">
        <div className="homePage__mask">
          <div className="container columns">
            <div className="column is-align-self-center">
              <div className="homePage__transportation__box">
                <h2 className="title">Transportation</h2>
                <p>
                  The University of Hong Kong is easily accessible by public transportation.
                  The closest MTR station is HKU station on the Island Line.
                </p>
                <div className="homePage__transportation__box__actions">
                  <a
                    className="button is-link"
                    rel="noreferrer"
                    target="_blank"
                    href={transportationMap.src}
                  >
                    Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
