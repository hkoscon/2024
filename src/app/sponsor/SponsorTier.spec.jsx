/* eslint-env jest */

// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import SponsorTier from './SponsorTier';

describe('SponsorTier', () => {
  it('match snapshot', () => {
    const sponsors = [
      {
        title: 'Testing',
        logo: 'sponsor.png',
        description: 'Testing sponsor',
        links: [
          { title: 'Test 1', url: 'http://example.com/test1' },
          { title: 'Test 2', url: 'http://example.com/test2' },
        ],
      },
    ];
    const { container } = render(
      <SponsorTier
        name="Testing Tier"
        sponsors={sponsors}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
