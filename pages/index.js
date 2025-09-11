import Layout from "@/components/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ContentCard from "@/components/ui/ContentCard";

export default function Home({ pages }) {
  return (
    <Layout
      pageHeader={{
        subTitle: "No App Needed",
        title: "Boost Conversions with Free Shopify Custom Code",
        description:
          "Instantly boost your store conversions custom Shopify code you can copy and paste.",
        cta: "Browse Code",
        ctaLink: "/#sections",
      }}
    >
      <div className="max-w-[1200px] mx-auto mt-[60px] p-[20px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pages.map((page) => (
            <ContentCard
              key={page.url}
              href={`${page.url}`}
              image={page.img}
              title={page.title}
              description={page.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("content"));

  const pages = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const filePath = path.join("content", filename);
    const source = fs.readFileSync(filePath, "utf8");
    const { data } = matter(source);

    return {
      title: data.title || slug,
      description: data.description || "",
      img: data.img || "",
      url: data.url || "",
    };
  });

  return {
    props: {
      pages,
    },
  };
}
