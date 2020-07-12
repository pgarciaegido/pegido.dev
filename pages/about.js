import Layout from '../components/layout/layout'

export default function About() {
  return(
    <Layout>
      <p>About</p>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
