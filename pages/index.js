import Head from 'next/head'
import Layout from '../components/layout/layout'
import Landing from '../components/landing/landing'

import { getCurrentlyReadingBooks } from '../lib/index/index';

export default function Home({books = []}) {
  return (
    <Layout> 
      <Head>
        <title>Pablo Egido. Frontend Engineer</title>
      </Head>
      <Landing books={books}/>
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
