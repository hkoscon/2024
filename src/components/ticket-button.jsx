/**
 * Get the ticket URL from the environment variables and append the affiliation code
 *
 * @returns {string|null}
 */
function getTicketUrl() {
  const isSSR = typeof window === 'undefined';
  // Determine the ticket URL from built data source
  let ticketUrl = process.env.NEXT_PUBLIC_TICKET_URL || null;
  if (!isSSR && ticketUrl) {
    const ticketUrlObj = new URL(ticketUrl);
    const windowUrl = new URL(window.location.href);

    if (windowUrl.searchParams.has('aff')) {
      // If the window URL has an affilication code, set it to the ticket URL
      // Also remember it in localStorage
      window.localStorage.setItem('aff', windowUrl.searchParams.get('aff'));
      const ticketSearchParams = new URLSearchParams(ticketUrlObj.search);
      ticketSearchParams.set('aff', windowUrl.searchParams.get('aff'));
      ticketUrlObj.search = ticketSearchParams.toString();
      ticketUrl = ticketUrlObj.toString();
    } else if (window.localStorage.getItem('aff')) {
      // if the window URL does not have an affilication code but localStorage has it
      // set it to the ticket URL
      const ticketSearchParams = new URLSearchParams(ticketUrlObj.search);
      ticketSearchParams.set('aff', window.localStorage.getItem('aff'));
      ticketUrlObj.search = ticketSearchParams.toString();
      ticketUrl = ticketUrlObj.toString();
    }
  }
  return ticketUrl;
}

export default function TicketButton() {
  const ticketUrl = getTicketUrl();
  return (
    <a
      className="button has-background-brand-color-yellow has-text-brand-color-blue"
      href={ticketUrl}
      target="_blank"
      rel="noreferrer noopener"
    >
      Get Ticket
    </a>
  );
}
