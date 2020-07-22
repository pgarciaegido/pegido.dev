import Head from 'next/head'
import { Layout } from '../components/layout/layout'
import { Landing } from '../components/landing/Landing'

import { getCurrentlyReadingBooks } from '../lib/index/index';

export default function Home({books = []}) {
  return (
    <Layout> 
      <Head>
        <title>Pablo G. Egido. Javascript Developer</title>
      </Head>
      <Landing />

      {books.map((book, index) => <p key={index}>{book.name} {book.author}</p>) }
    </Layout>
  )
}

export async function getStaticProps() {
  const books = await getCurrentlyReadingBooks()

  return {
    props: {
      books
    }
  }
}
