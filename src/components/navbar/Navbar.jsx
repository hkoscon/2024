'use client';

import { useCallback, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import brandLogo from './brand.png';

import './navbar.scss';

const archivedYears = [
  '2023',
  '2022',
  '2021',
  '2020',
  '2019',
  '2018',
  '2017',
  '2016',
  '2015',
  '2014',
  '2013',
];

export default function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false);
  const toggleNavOpen = useCallback(() => {
    setNavOpen(!isNavOpen);
  }, [isNavOpen]);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" href="/">
          <Image className="app-navbar__logo" src={brandLogo} alt="HKOSCon Logo" height="160" />
        </Link>

        <button
          type="button"
          className={clsx('navbar-burger', { 'is-active': isNavOpen })}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={toggleNavOpen}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div className={clsx('navbar-menu', { 'is-active': isNavOpen })}>
        <div className="navbar-start">
          {process.env.NEXT_PUBLIC_ENABLE_CFP === '1' && (
            <Link href="/cfp" className="navbar-item">
              Call for Proposal
            </Link>
          )}

          <div className="navbar-item has-dropdown is-hoverable">
            <button type="button" className="navbar-link">
              About
            </button>

            <div className="navbar-dropdown">
              <a href="https://info.hkoscon.org/introduction/" className="navbar-item" target="_blank" rel="noreferrer">About Us</a>
              <a href="https://info.hkoscon.org/code-of-conduct/" className="navbar-item" target="_blank" rel="noreferrer">Code of Conduct</a>
              <a href="https://info.hkoscon.org/organizers/" className="navbar-item" target="_blank" rel="noreferrer">Organizers</a>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <button type="button" className="navbar-link">
              Archive
            </button>

            <div className="navbar-dropdown">
              {archivedYears.map((year) => (
                <a key={year} href={`/${year}`} className="navbar-item" rel="noreferrer" target="_blank">
                  {`HKOSCon ${year}`}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}
