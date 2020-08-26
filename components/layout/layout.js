import Head from 'next/head';
import styles from './layout.module.css';


export default ({ children }) => {
  return (
    <>
      <div className={styles.diagonal}></div>

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
          <meta name="og:title" content="Pablo Egido." />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>        

        <main>{children}</main>
      </div>
    </>
  )
}