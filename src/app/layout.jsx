import PropTypes from 'prop-types';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import './globals.scss';

/** @type {import('next').Viewport} */
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3cb02' },
    { media: '(prefers-color-scheme: dark)', color: '#294454' },
  ],

};

/** @type {import('next').Metadata} */
export const metadata = {
  title: {
    default: 'Hong Kong Open Source Conference 2024',
    template: '%s | Hong Kong Open Source Conference 2024',
  },
  description: 'Hong Kong Open Source Conference is the biggest annual open source event in Hong Kong.',
  authors: [
    { name: 'Team 404 Busters' },
  ],
  openGraph: {
    title: 'Hong Kong Open Source Conference 2024',
    siteName: 'Hong Kong Open Source Conference 2024',
    type: 'website',
    images: 'https://hkoscon.org/logo.png',
    description: 'Hong Kong Open Source Conference is the biggest annual open source event in Hong Kong.',
  },
  icons: {
    icon: 'https://hkoscon.org/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};

RootLayout.defaultProps = {
  children: null,
};
