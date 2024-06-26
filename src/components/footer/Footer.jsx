import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="has-text-right is-size-3 app-footer__hashtag">
        #HKOSCon2024
      </div>
      <div className="content has-text-centered">
        <span>
          This work is licensed under&nbsp;
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">
            CC BY-SA 4.0
            <img
              className="app-footer__cc-logo"
              src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
              alt="Creative Commons Logo"
            />
            <img
              className="app-footer__cc-logo"
              src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
              alt="Creative Commons BY Logo"
            />
            <img
              className="app-footer__cc-logo"
              src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"
              alt="Creative Commons SA Logo"
            />
          </a>
        </span>
        .&nbsp;
        <span>Logos and trademarks belong to their respective owners.</span>
      </div>
      <div className="organisingCommittee">
        <span>This event is organised and brought to you by the following organisations.</span>
        <div className="organisingCommitteeCarousel">
          <div className="organisingCommitteeCarousel__item">
            <img
              src="https://hkcota.org/wp-content/uploads/2024/06/HKCOTAofficiallogo_indiegogo-squared.png"
              alt="Hong Kong Creative Open Technology Association"
            />
          </div>
          <div className="organisingCommitteeCarousel__item">
            <img
              src="https://hkcota.org/wp-content/uploads/2015/04/OS_logoV-icon.png"
              alt="Open Source Hong Kong"
            />
          </div>
          <div className="organisingCommitteeCarousel__item">
            <img
              src="https://hkcota.org/wp-content/uploads/2015/04/hklug.png"
              alt="Hong Kong Linux User Group"
            />
          </div>
          <div className="organisingCommitteeCarousel__item">
            <img
              src="https://events.cota.hk/sites/default/files/styles/width_550/public/2024-06/hku_csa_logo.png?itok=Pek-MIn4"
              alt="Computer Science Association, Engineering Society, HKU"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
