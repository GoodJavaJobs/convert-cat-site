import ContentContainer from "@/components/ContentContainer";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <ContentContainer>
        <h1 id="tools" className="text-center">
          Free Shopify Tools
        </h1>
        <ul>
          <li>
            <a href="/tools/add-products-to-shopify-blog-post">
              Embed Products On Your Shopify Blog Post
            </a>
          </li>
        </ul>
      </ContentContainer>
    </Layout>
  );
}
