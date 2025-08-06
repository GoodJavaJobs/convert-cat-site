import ContentContainer from "@/components/ContentContainer";
import Layout from "@/components/Layout";
import CopyCode from "@/components/ui/CopyCode";
import TextInput from "@/components/ui/TextInput";
import ToolTabs from "@/components/ui/ToolTabs";
import { useEffect, useState } from "react";
import { TabPanel } from "react-tabs";

function ShoppableProductBlogPost() {
  return (
    <Layout>
      <ContentContainer large={true}>
        <h1>How Add Products To Your Shopify Blog Post</h1>

        <div className="bg-[#f2f2f2] px-8 py-2 mt-8">
          <h2 className="font-bold underline ">Highlight A Single Product</h2>
          <p>
            Use this design to highlight a single product. Ideal for listicle
            and product reveiw articles. You can use the{" "}
            <strong className="underline">input fields below to</strong>&nbsp;
            customize the design.
          </p>

          <div style={{ marginTop: "60px" }}>
            <SingleProductHighlight />
          </div>
        </div>
      </ContentContainer>
    </Layout>
  );
}

export default ShoppableProductBlogPost;

function SingleProductHighlight() {
  const [html, setHTML] = useState("");
  const [css, setCSS] = useState("");

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
    backgroundColor: "#70B346",
    textColor: "#fff",
  });

  useEffect(() => {
    updateCode();
  }, []);

  useEffect(() => {
    updateCode();
  }, [content]);

  const updateCode = () => {
    const newHTML = getHTMl();
    const newCSS = getCSS();

    setHTML(newHTML);
    setCSS(newCSS);
  };

  const getHTMl = () => {
    return `
      <div class="cc-single-product-highlight-container">
        <div>

        ${
          content.highlightText &&
          ` <div class="cc-single-product-highlight-text">
              ${content.highlightText}
            </div>`
        }

           <img src="${content.src}" alt="${content.alt}" />
         </div>
    

      <div class="cc-single-product-content-container">
        <h2 class="title">${content.title}</h2>
        <p class="sub-title">${content.subTitle}</p>
        <p class="description">${content.description}</p>
        <a class="cta-btn" target="_blank"  href="${content.ctaLink}">${
      content.ctaTitle
    }</a>
      </div>
    </div>
    `;
  };

  const getCSS = () => {
    return `
        :root {
          --cc-single-product-highlight-background-color: ${content.backgroundColor};
          --cc-single-product-highlight-text-color: ${content.textColor};
        }

        .cc-single-product-highlight-container {
  display: flex;
  gap: 25px;
  background-color: white;
  border: 4px solid var(--cc-single-product-highlight-background-color, black);
  padding: 20px;
  position: relative;
  align-items: center;
}

.cc-single-product-highlight-text {
  position: absolute;
  top: -20px;
  left: -20px;
  background-color: var(--cc-single-product-highlight-background-color, black);
  color: var(--cc-single-product-highlight-text-color, white);
  padding: 5px 15px;
  font-weight: bold;
  border-radius: 4px;
  transform: rotate(-10deg);
}

.cc-single-product-highlight-container > div {
  flex-basis: 50%;
}

.cc-single-product-highlight-container img {
  box-shadow: none !important;
  max-width: 100% !important;
}

.cc-single-product-content-container h2,
.cc-single-product-content-container p,
.cc-single-product-content-container a {
  margin: 0px;
}

.cc-single-product-content-container .title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 5px !important;
}

.cc-single-product-content-container .sub-title {
  font-size: 16px;
  margin-bottom: 13px;
  font-style: italic;
}

.cc-single-product-content-container .description {
  font-size: 16px;
  margin-bottom: 20px;
}

.cc-single-product-content-container .cta-btn {
  width: 100%;
  background-color: var(--cc-single-product-highlight-background-color, black);
  color: var(--cc-single-product-highlight-text-color, white);
  display: block;
  text-align: center;
  padding: 6px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none !important;
}

.cc-single-product-content-container .cta-btn:hover {
  color: var(--cc-single-product-highlight-text-color, white) !important;
}

@media (max-width: 768px) {
  .cc-single-product-highlight-container {
    flex-direction: column;
  }

  .cc-single-product-highlight-text {
    left: -12px;
  }
}
     
    `;
  };

  const updateContent = (key, value) => {
    const newContent = { ...content };
    newContent[key] = value;
    setContent(newContent);
  };

  return (
    <>
      <style>{`:root {
          --cc-single-product-highlight-background-color: ${content.backgroundColor};
          --cc-single-product-highlight-text-color: ${content.textColor};
        }`}</style>
      <div className="mt-10">
        <div className="cc-single-product-highlight-container">
          <div>
            {content.highlightText && (
              <div className="cc-single-product-highlight-text">
                {content.highlightText}
              </div>
            )}

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

        <ToolTabs>
          <TabPanel>
            <div className="tool-input-container">
              <TextInput
                placeholder="Ex: Top Pick"
                label="Callout Text"
                value={content.highlightText}
                onChange={(e) => updateContent("highlightText", e.target.value)}
              />

              <TextInput
                placeholder="Image URL"
                label="Image URL"
                value={content.src}
                onChange={(e) => updateContent("src", e.target.value)}
              />

              <TextInput
                placeholder="Image Alt Text"
                label="Image Alt Text"
                value={content.alt}
                onChange={(e) => updateContent("alt", e.target.value)}
              />

              <TextInput
                placeholder="Title"
                label="Title"
                value={content.title}
                onChange={(e) => updateContent("title", e.target.value)}
              />

              <TextInput
                placeholder="Subtitle"
                label="Subtitle"
                value={content.subTitle}
                onChange={(e) => updateContent("subTitle", e.target.value)}
              />

              <TextInput
                placeholder="Description"
                label="Description"
                value={content.description}
                onChange={(e) => updateContent("description", e.target.value)}
              />

              <TextInput
                placeholder="Ex: Shop Now"
                label="Button Label"
                value={content.ctaTitle}
                onChange={(e) => updateContent("ctaTitle", e.target.value)}
              />

              <TextInput
                placeholder="Ex: https://mystore.com/products/my-awesome-product"
                label="Button Link"
                value={content.ctaLink}
                onChange={(e) => updateContent("ctaLink", e.target.value)}
              />

              <TextInput
                placeholder="Ex: #000"
                label="Background Color"
                value={content.backgroundColor}
                onChange={(e) =>
                  updateContent("backgroundColor", e.target.value)
                }
              />

              <TextInput
                placeholder="Ex: #fff"
                label="Text Color"
                value={content.textColor}
                onChange={(e) => updateContent("textColor", e.target.value)}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mb-4">
              Please watch the video above if you need installation
              instructions.
            </div>
            <div className="space-y-4">
              <CopyCode label="HTML" code={html} />
              <CopyCode label="CSS" code={css} />
            </div>
          </TabPanel>
        </ToolTabs>
      </div>
    </>
  );
}
