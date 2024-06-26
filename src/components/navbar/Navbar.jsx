'use client';

import { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import brandLogo from './brand.png';

import {
  enableCfp,
  enableCfpResult,
  enableSponsor,
  enableTimetable,
  enableTicketSales,
} from '../../app/features';

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
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isArchiveOpen, setArchiveOpen] = useState(false);

  const toggleNavOpen = useCallback(() => {
    setNavOpen(!isNavOpen);
  }, [isNavOpen]);

  const toggleAboutOpen = useCallback(() => {
    setAboutOpen(!isAboutOpen);
  }, [isAboutOpen]);

  const toggleArchiveOpen = useCallback(() => {
    setArchiveOpen(!isArchiveOpen);
  }, [isArchiveOpen]);

  const LoadingButton = useCallback(() => (
    // eslint-disable-next-line
    <a className="button is-fullwidth is-warning has-background-brand-color-yellow has-text-brand-color-blue" disabled>Loading...</a>
  ), []);

  const TicketButton = dynamic(() => import('./TicketButton'), {
    ssr: false,
    loading: LoadingButton,
  });

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
          {enableTicketSales && (
            <div className="navbar-item is-hidden-desktop">
              <div className="buttons">
                <TicketButton />
              </div>
            </div>
          )}

          {enableCfp && !enableCfpResult && (
            <Link href="/cfp" className="navbar-item">
              Call for Proposal
            </Link>
          )}

          {enableCfpResult && !enableTimetable && (
            <Link href="/cfp/result" className="navbar-item">
              Call for Proposal Result
            </Link>
          )}

          {enableTimetable && (
            <Link href="/timetable" className="navbar-item">
              Timetable
            </Link>
          )}

          <div className="navbar-item has-dropdown is-hoverable">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" role="button" type="button" className="navbar-link" onClick={toggleAboutOpen}>
              About
            </a>

            <div className={`navbar-dropdown ${isAboutOpen ? '' : ' is-invisible is-hidden'}`}>
              <a href="https://info.hkoscon.org/introduction/" className="navbar-item" target="_blank" rel="noreferrer">About Us</a>
              <a href="https://info.hkoscon.org/code-of-conduct/" className="navbar-item" target="_blank" rel="noreferrer">Code of Conduct</a>
              <a href="https://info.hkoscon.org/organizers/" className="navbar-item" target="_blank" rel="noreferrer">Organizers</a>
            </div>
          </div>

          {enableSponsor && (
            <Link href="/sponsor" className="navbar-item">
              Sponsor & Supporting Organization
            </Link>
          )}

          <div className="navbar-item has-dropdown is-hoverable">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" type="button" className="navbar-link" onClick={toggleArchiveOpen}>
              Archive
            </a>

            <div className={`navbar-dropdown ${isArchiveOpen ? '' : ' is-invisible is-hidden'}`}>
              {archivedYears.map((year) => (
                <a key={year} href={`/${year}`} className="navbar-item" rel="noreferrer" target="_blank">
                  {`HKOSCon ${year}`}
                </a>
              ))}
            </div>
          </div>
        </div>
        {enableTicketSales && (
          <div className="navbar-end is-hidden-touch">
            <div className="navbar-item">
              <div className="buttons">
                <TicketButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
