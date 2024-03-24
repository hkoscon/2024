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
        &nbsp;
        <span>Logos and trademarks belong to their respective owners.</span>
      </div>
    </footer>
  );
}
