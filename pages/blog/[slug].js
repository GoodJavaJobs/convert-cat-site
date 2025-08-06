import {
  getPublishedPosts,
  getPageContent,
  getPostBySlug,
} from "@/notion-blog/notion";
import ReactMarkdown from "react-markdown";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function Post({ post }) {
  if (!post) return <div>Post not found</div>;

  return (
    <Layout>
      <Head>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
      </Head>
      <div className="max-w-2xl mx-auto p-8 markdown-content">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <img src={post.image} alt={post.title} className="w-full h-auto mb-4" />
        <p className="text-sm text-gray-500 mb-4">Published on {post.date}</p>
        <ReactMarkdown>{post.content.parent}</ReactMarkdown>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getPublishedPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) return { notFound: true };

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}
