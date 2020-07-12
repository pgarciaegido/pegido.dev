import Head from 'next/head'
import Layout from '../../components/layout/layout'

export default function Post({post}) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        el post ma men!
      </article>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      post: {
        title: 'yoo!'
      }
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: { id: 'hola' }}
    ],
    fallback: false
  }
}
