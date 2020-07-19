export const GOODREADS_USER_ID = '52153242'
export const GOODREADS_API_BASE = 'https://www.goodreads.com'

export const GOODREADS_GET_CURRENTLY_READING_URL = `${GOODREADS_API_BASE}/review/list/${GOODREADS_USER_ID}?v=2&key=${process.env.GOODREADS_API_KEY}&shelf=currently-reading`;
