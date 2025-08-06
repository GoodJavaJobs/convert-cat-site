import ContentContainer from "@/components/ContentContainer";
import Layout from "@/components/Layout";
import { useState } from "react";

function ShoppableProductBlogPost() {
  return (
    <Layout>
      <ContentContainer medium={true}>
        <h1>How Add Products To Your Shopify Blog Post</h1>

        <div>
          <h2 className="font-bold underline">Highlight Single Product</h2>
          <div className="my-4">
            <SingleProductHighlight />
          </div>
        </div>
      </ContentContainer>
    </Layout>
  );
}

export default ShoppableProductBlogPost;

function SingleProductHighlight() {
  const [content, setContent] = useState({
    highlightText: "Top Pick",
    src: "https://d34mvw1if3ud0g.cloudfront.net/37270/Ego-LM2135SP-Power--21----Select-Cut-Mower_20250418-044752_full.jpeg",
    alt: "Ego LM2135SP Power Select Cut Mower",
    title: "Ego Power Select Cut Mower",
    subTitle: "Great mover, budget friendly",
    description:
      "This mower isn’t as polished as our main pick. But if our top pick is out of stock, or you’re looking for a more-basic, self-propelled cordless model, it’s an excellent choice.",
    ctaTitle: "Shop Now",
    ctaLink: "#",
    backgroundColor: "#000",
    textColor: "#fff",
  });

  return (
    <div className="mt-10">
      <div className="cc-single-product-highlight-container">
        <div>
          <div className="cc-single-product-highlight-text">
            {content.highlightText}
          </div>
          <img src={content.src} alt={content.alt} />
        </div>
        <div className="cc-single-product-content-container">
          <h2 className="title">{content.title}</h2>
          <p className="sub-title">{content.subTitle}</p>
          <p className="description">{content.description}</p>
          <a className="cta-btn" href={content.ctaLink}>
            {content.ctaTitle}
          </a>
        </div>
      </div>

      <div></div>
    </div>
  );
}
