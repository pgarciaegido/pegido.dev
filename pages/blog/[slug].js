import React from 'react'
import Layout from '../../components/layout/layout';
import matter from 'gray-matter';
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import { getAllPostSlugs, getPostdata } from '../../lib/posts';

export default function PostTemplate({ source, frontMatter }) {
  const content = hydrate(source/*, { components  }*/);

  return (
      <Layout>
        <h1>{frontMatter.title}</h1>
        <h2>{frontMatter.date}</h2>
        <div>
          { content }
        </div> 
      </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false
  };
}
export async function getStaticProps({ params }) {
  const postContent = await getPostdata(params.slug);
  const { data, content } = matter(postContent);
  const mdxSource = await renderToString(content, {
    // components,
    scope: data
  });
  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  };
}