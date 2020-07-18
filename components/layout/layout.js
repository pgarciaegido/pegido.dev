import Head from 'next/head'
import Link from 'next/link'

const name = 'Pablo García Egido'
export const siteTitle = 'Pablo García Egido. Frontend developer'

export default function Layout({ children }) {
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
      <header>
        <div>
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        </div>
      </header>

      <main>{children}</main>
    </div>
  )
}