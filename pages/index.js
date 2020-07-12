import Head from 'next/head'
import Layout from '../components/layout/layout'
import { getPostsStoryBlok } from '../lib/posts'
import Landing from '../components/landing/landing'

export default function Home({allPostsData}) {
  return (
    <Layout> 
      <Head>
        <title>Pablo G. Egido. Javascript Developer</title>
      </Head>
      <Landing />

      { allPostsData.map((data, index) => <p key={index}>{data.content.title}</p>) }
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await getPostsStoryBlok();

  return {
    props: {
      allPostsData: res.data.stories
    }
  }
}
