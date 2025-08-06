import ContentContainer from "@/components/ContentContainer";
import Layout from "@/components/Layout";
import ContentHighlight from "@/components/ui/ContentHighlight";
import CopyCode from "@/components/ui/CopyCode";
import TabPanelSection from "@/components/ui/TabPanelSection";
import TextInput from "@/components/ui/TextInput";
import ToolTabs from "@/components/ui/ToolTabs";
import { useEffect, useState } from "react";
import { TabPanel } from "react-tabs";

function ShoppableProductBlogPost() {
  return (
    <Layout>
      <ContentContainer large={true}>
        <h1>How Add Products To Your Shopify Blog Post</h1>

        <ContentHighlight
          heading="Highlight A Single Product"
          description={`Use this design to highlight a single product. Ideal for listicle
            and product reveiw articles. You can use the 
            <strong className="underline">input fields below to</strong>&nbsp;
            customize the design.`}
        >
          <SingleProductHighlight />
        </ContentHighlight>

        <ContentHighlight
          heading="Show Multiple Products"
          description={`Show multiple products in a grid design on your blog posts. Ideal for both listcle and info articles. You can use the 
            <strong className="underline">input fields below to</strong>&nbsp;
            customize the design.`}
        >
          <MultipleProductsHighlight />
        </ContentHighlight>

        <div className="my-10">
          <h2 className="font-bold underline ">
            Show Products Using Metafields
          </h2>
          <div className="mb-6">
            Below is the code mentioned in the video for showing products on
            your blog posts using metafields.{" "}
            <strong>Please watch the video</strong> to learn how to install
            this.
          </div>

          <div className="space-y-4">
            <CopyCode label="HTML" code="html code" />
            <CopyCode label="CSS" code="css code" />
          </div>
        </div>
      </ContentContainer>
    </Layout>
  );
}

export default ShoppableProductBlogPost;

function MultipleProductsHighlight() {
  const [html, setHTML] = useState("");
  const [css, setCSS] = useState("");

  const [content, setContent] = useState({
    heading: "Shop These Products",
    description:
      "This mower isn’t as polished as our main pick. But if our top pick is out of stock, or you’re looking for a more-basic, self-propelled cordless model, it’s an excellent choice.",
    backgroundColor: "#70B346",
    textColor: "#fff",
    product_title_1: "Lawn Mover 1",
    product_image_1:
      "https://d34mvw1if3ud0g.cloudfront.net/37270/Ego-LM2135SP-Power--21----Select-Cut-Mower_20250418-044752_full.jpeg",
    product_price_1: "$2,494",
    product_link_1: "#",

    product_title_2: "Lawn Mover 2",
    product_image_2:
      "https://d34mvw1if3ud0g.cloudfront.net/37270/Ego-LM2135SP-Power--21----Select-Cut-Mower_20250418-044752_full.jpeg",
    product_price_2: "$2,494",
    product_link_2: "#",

    product_title_3: "Lawn Mover 3",
    product_image_3:
      "https://d34mvw1if3ud0g.cloudfront.net/37270/Ego-LM2135SP-Power--21----Select-Cut-Mower_20250418-044752_full.jpeg",
    product_price_3: "$2,494",
    product_link_3: "#",

    cta_text: "Shop Now",
    backgroundColor: "#70B346",
    textColor: "#fff",
  });

  const updateContent = (key, value) => {
    const newContent = { ...content };
    newContent[key] = value;
    setContent(newContent);
  };

  useEffect(() => {
    updateCode();
  }, []);

  useEffect(() => {
    updateCode();
  }, [content]);

  const updateCode = () => {
    const newHTML = getHTML();
    const newCSS = getCSS();

    setHTML(newHTML);
    setCSS(newCSS);
  };

  const getHTML = () => {
    const getProduct = (title, image, price, link, btnLabel) => {
      return `<div class="cc-multiple-products-product">
        <img class="cc-product-image" src="${image}" alt="${title} image" />
        <h3 class="cc-product-title">${title}</h3>
        <p class="cc-product-price">${price}</p>
        <a class="cc-product-btn" href="${link}" target="_blank">${btnLabel}</a>
    </div>`;
    };

    return `<div class="cc-multiple-products-container">
            <div>
             ${
               content.heading &&
               `<h2 class="content-heading">${content.heading}</h2>`
             }
             ${
               content.description &&
               `<p class="content-description">${content.description}</p>`
             }
            </div>  
            <div class="cc-multiple-products-grid-container">
               ${getProduct(
                 content.product_title_1,
                 content.product_image_1,
                 content.product_price_1,
                 content.product_link_1,
                 content.cta_text
               )}
               ${getProduct(
                 content.product_title_2,
                 content.product_image_2,
                 content.product_price_2,
                 content.product_link_2,
                 content.cta_text
               )}
               ${getProduct(
                 content.product_title_3,
                 content.product_image_3,
                 content.product_price_3,
                 content.product_link_3,
                 content.cta_text
               )}
             </div>
    
    </div>`;
  };

  const getCSS = () => {
    return `
       :root {
         --cc-multiple-products-highlight-background-color: ${content.backgroundColor};
         --cc-multiple-products-highlight-text-color: ${content.textColor};
       }
    

       .cc-multiple-products-grid-container {
  display: flex;
  gap: 30px;
}

.cc-multiple-products-grid-container > div {
  flex-basis: 50%;
}

.cc-multiple-products-product .cc-product-image {
  box-shadow: none;
  max-width: 100% !important;
  margin: auto;
}

.cc-multiple-products-container .content-heading {
  margin: 0;
}

.cc-multiple-products-container .content-description {
  margin-top: 5px;
}

.cc-multiple-products-product h3,
.cc-multiple-products-product p,
.cc-multiple-products-product a {
  margin: 0px;
  text-align: center;
}

.cc-multiple-products-product .cc-product-btn {
  width: 100%;
  background-color: var(
    --cc-multiple-products-highlight-background-color,
    black
  );
  color: var(--cc-multiple-products-highlight-text-color, white);
  display: block;
  text-align: center;
  padding: 6px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none !important;
}

.cc-multiple-products-product .cc-product-btn:hover {
  color: var(--cc-multiple-products-highlight-text-color, white) !important;
}

.cc-multiple-products-grid-container {
  margin-top: 20px;
}

.cc-multiple-products-product .cc-product-title {
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
}

.cc-multiple-products-product .cc-product-price {
  font-size: 16px;
  margin-top: 3px;
  margin-bottom: 12px;
}

@media (max-width: 768px) {
  .cc-multiple-products-grid-container {
    flex-direction: column;
  }
}

    `;
  };

  return (
    <div className="mt-10">
      <div className="bg-black text-lime-300 px-4 py-1 font-medium">
        &#9679;&nbsp; Preview
      </div>
      <style>
        {` :root {
         --cc-multiple-products-highlight-background-color: ${content.backgroundColor};
         --cc-multiple-products-highlight-text-color: ${content.textColor};
       }`}
      </style>
      <div className="cc-multiple-products-container bg-white p-8">
        <div>
          <h2 className="content-heading">{content.heading}</h2>
          <p className="content-description">{content.description}</p>
        </div>
        <div className="cc-multiple-products-grid-container">
          <div>
            <Product
              title={content.product_title_1}
              price={content.product_price_1}
              btnLabel={content.cta_text}
              btnLink={content.product_link_1}
              image={content.product_image_1}
            />
          </div>
          <div>
            <Product
              title={content.product_title_2}
              price={content.product_price_2}
              btnLabel={content.cta_text}
              btnLink={content.product_link_2}
              image={content.product_image_2}
            />
          </div>
          <div>
            <Product
              title={content.product_title_3}
              price={content.product_price_3}
              btnLabel={content.cta_text}
              btnLink={content.product_link_3}
              image={content.product_image_3}
            />
          </div>
        </div>
      </div>

      <ToolTabs>
        <TabPanel>
          <TabPanelSection title="Product 1">
            <TextInput
              placeholder="Ex: Lawn Mover 1"
              label="Product 1 Title"
              value={content.product_title_1}
              onChange={(e) => updateContent("product_title_1", e.target.value)}
            />

            <TextInput
              placeholder="Ex: $2,494"
              label="Product 1 Price"
              value={content.product_price_1}
              onChange={(e) => updateContent("product_price_1", e.target.value)}
            />

            <TextInput
              placeholder="Ex: https://mystore.com/products/my-awesome-product"
              label="Product 1 Image"
              value={content.product_image_1}
              onChange={(e) => updateContent("product_image_1", e.target.value)}
            />

            <TextInput
              placeholder="Ex: https://mystore.com/products/my-awesome-product"
              label="Product 1 Link"
              value={content.product_link_1}
              onChange={(e) => updateContent("product_link_1", e.target.value)}
            />
          </TabPanelSection>

          <TabPanelSection title="Product 2">
            <TextInput
              placeholder="Ex: Lawn Mover 2"
              label="Product 2 Title"
              value={content.product_title_2}
              onChange={(e) => updateContent("product_title_2", e.target.value)}
            />

            <TextInput
              placeholder="Ex: $2,494"
              label="Product 2 Price"
              value={content.product_price_2}
              onChange={(e) => updateContent("product_price_2", e.target.value)}
            />

            <TextInput
              placeholder="Ex: https://mystore.com/products/my-awesome-product"
              label="Product 2 Image"
              value={content.product_image_2}
              onChange={(e) => updateContent("product_image_2", e.target.value)}
            />

            <TextInput
              placeholder="Ex: https://mystore.com/products/my-awesome-product"
              label="Product 2 Link"
              value={content.product_link_2}
              onChange={(e) => updateContent("product_link_2", e.target.value)}
            />
          </TabPanelSection>

          <TabPanelSection title="Product 3">
            <TextInput
              placeholder="Ex: Lawn Mover 3"
              label="Product 3 Title"
              value={content.product_title_3}
              onChange={(e) => updateContent("product_title_3", e.target.value)}
            />

            <TextInput
              placeholder="Ex: $2,494"
              label="Product 3 Price"
              value={content.product_price_3}
              onChange={(e) => updateContent("product_price_3", e.target.value)}
            />

            <TextInput
              placeholder="Ex: https://mystore.com/products/my-awesome-product"
              label="Product 3 Image"
              value={content.product_image_3}
              onChange={(e) => updateContent("product_image_3", e.target.value)}
            />

            <TextInput
              placeholder="Ex: https://mystore.com/products/my-awesome-product"
              label="Product 3 Link"
              value={content.product_link_3}
              onChange={(e) => updateContent("product_link_3", e.target.value)}
            />
          </TabPanelSection>

          <TabPanelSection title="Content" disableBorder>
            <TextInput
              placeholder="Ex: Shop These Products"
              label="Heading"
              value={content.heading}
              onChange={(e) => updateContent("heading", e.target.value)}
            />

            <TextInput
              placeholder="Ex: #000"
              label="Background Color"
              value={content.backgroundColor}
              onChange={(e) => updateContent("backgroundColor", e.target.value)}
            />

            <TextInput
              placeholder="Ex: #fff"
              label="Text Color"
              value={content.textColor}
              onChange={(e) => updateContent("textColor", e.target.value)}
            />

            <TextInput
              placeholder="Ex: Shop Now"
              label="Button Label"
              value={content.cta_text}
              onChange={(e) => updateContent("cta_text", e.target.value)}
            />

            <TextInput
              placeholder="Short description (optional)"
              label="Description"
              value={content.description}
              onChange={(e) => updateContent("description", e.target.value)}
            />
          </TabPanelSection>
        </TabPanel>
        <TabPanel>
          <div className="mb-4">
            Please watch the video above if you need installation instructions.
          </div>
          <div className="space-y-4">
            <CopyCode label="HTML" code={html} />
            <CopyCode label="CSS" code={css} />
          </div>
        </TabPanel>
      </ToolTabs>
    </div>
  );
}

function Product({ title, price, btnLabel, btnLink, image }) {
  return (
    <div className="cc-multiple-products-product">
      <img className="cc-product-image" src={image} alt={title + " image"} />
      <h3 className="cc-product-title">{title}</h3>
      <p className="cc-product-price">{price}</p>
      <a className="cc-product-btn" href={btnLink} target="_blank">
        {btnLabel}
      </a>
    </div>
  );
}

function SingleProductHighlight() {
  const [html, setHTML] = useState("");
  const [css, setCSS] = useState("");

  const [content, setContent] = useState({
    highlightText: "Top Pick",
    src: "https://d34mvw1if3ud0g.cloudfront.net/37270/Ego-LM2135SP-Power--21----Select-Cut-Mower_20250418-044752_full.jpeg",
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

           <img src="${content.src}" alt="${content.title} image" />
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

            <img src={content.src} alt={content.title} />
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

              <TextInput
                placeholder="Description"
                label="Description"
                value={content.description}
                onChange={(e) => updateContent("description", e.target.value)}
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
