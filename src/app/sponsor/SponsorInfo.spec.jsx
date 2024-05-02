/* eslint-env jest */

// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import SponsorInfo from './SponsorInfo';

describe('SponsorInfo', () => {
  it('match snapshot', () => {
    const links = [
      { title: 'Test 1', url: 'http://example.com/test1' },
      { title: 'Test 2', url: 'http://example.com/test2' },
    ];
    const { container } = render(
      <SponsorInfo
        title="Testing"
        logo="sponsor.png"
        description="Testing sponsor"
        links={links}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
