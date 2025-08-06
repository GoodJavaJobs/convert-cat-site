import { getPublishedPosts } from "@/notion-blog/notion";
import Layout from "@/components/Layout";

export default function Blog({ posts }) {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-8 ">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <a href={`/blog/${post.slug}`} className="text-blue-600">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getPublishedPosts();
  return { props: { posts }, revalidate: 60 };
}
