import Head from 'next/head'

import { Navbar } from '../navbar/Navbar';

const name = 'Pablo García Egido'
export const siteTitle = 'Pablo García Egido. Frontend developer'

export default ({ children }) => {
  return (
    <div className="container">

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content="/images/profile.jpeg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar />
      

      <main>{children}</main>
    </div>
  )
}