import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Layout from "@/components/Layout";
import matter from "gray-matter";
import ContentContainer from "@/components/ContentContainer";
import CodeSnippet from "@/components/ui/CodeSnippet";

const components = { CodeSnippet };

export default function ContentPage({ mdxSource, meta }) {
  return (
    <Layout pageHeader={{ title: meta.title, description: meta.description }}>
      <ContentContainer>
        <MDXRemote {...mdxSource} components={components} />
      </ContentContainer>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content"));
  const paths = files.map((file) => ({
    params: { slug: file.replace(/\.mdx?$/, "") },
  }));

  return {
    paths,
    fallback: false, // false = 404 if path not found
  };
}

// Fetch content for each page
export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join("content", `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(source);

  // Serialize content for MDX
  const mdxSource = await serialize(content);

  return { props: { mdxSource, meta: data } };
}
