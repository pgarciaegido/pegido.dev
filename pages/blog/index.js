import { getSortedPosts } from '../../lib/posts';
import Layout from '../../components/layout/layout'

const BlogIndex = ({ allPostsData }) => {
    return (
        <>
          <Layout>
            {
              allPostsData.map((post) => 
                <p key={post.date}>{post.title}</p>
              )
            }
          </Layout>
        </>
      );
}

export default BlogIndex;

export async function getStaticProps() {
    const allPostsData = getSortedPosts();
    return {
      props: {
        allPostsData,
      },
    };
};
