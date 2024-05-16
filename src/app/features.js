export const enableCfp = process.env.NEXT_PUBLIC_ENABLE_CFP === '1';
export const enableCfpResult = process.env.NEXT_PUBLIC_ENABLE_CFP_RESULT === '1';
export const enableTimetable = process.env.NEXT_PUBLIC_ENABLE_TIMETABLE === '1';
export const enableSponsor = process.env.NEXT_PUBLIC_ENABLE_SPONSOR === '1';
export const enableTicketSales = !!process.env.NEXT_PUBLIC_TICKET_URL;
