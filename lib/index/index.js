import { get } from 'axios'
import {xml2json} from 'xml-js'

import { GOODREADS_GET_CURRENTLY_READING_URL } from '../index.constants'

export const getCurrentlyReadingBooks = async () => {
  const res = await get(GOODREADS_GET_CURRENTLY_READING_URL)

  try{
    const parsed = JSON.parse(xml2json(res.data, {compact: true, spaces: 4}))
    const books = parsed.GoodreadsResponse.reviews.review

    return formatBooks(books);

  } catch(e) {
    return []
  } 
};

export const formatBooks = (books) => books.map(({book}) => ({
  name: book.title._text,
  author: book.authors.author.name._text,
  image: book.image_url._text
}));
