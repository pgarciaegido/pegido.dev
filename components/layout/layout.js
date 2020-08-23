import Head from 'next/head'

const diagonalStyles = {
  width: '100%',
  height: '750px',
  backgroundColor: '#E5F7F3',
  transform: 'skewY(12deg)',
  position: 'absolute',
  top: '-400px',
  zIndex: '-1'
};

export default ({ children }) => {
  return (
    <>
      <div style={diagonalStyles}></div>

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