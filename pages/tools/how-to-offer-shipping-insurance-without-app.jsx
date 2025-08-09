import { getShippingProtectionCode } from "@/code-files/shipping-insurance";
import ContentContainer from "@/components/ContentContainer";
import Layout from "@/components/Layout";
import ContentHighlight from "@/components/ui/ContentHighlight";
import CopyCode from "@/components/ui/CopyCode";
import TextInput from "@/components/ui/TextInput";
import ToolTabs from "@/components/ui/ToolTabs";
import Youtube from "@/components/ui/Youtube";
import { useEffect, useState } from "react";
import { TabPanel } from "react-tabs";

function ShippingProtection() {
  return (
    <Layout>
      <ContentContainer>
        <h1>
          How To Offer Shipping Insurance On Products Without Using Any App
        </h1>

        <Youtube />

        <ContentHighlight
          heading="Shipping Insurance Widget"
          description="Increase average order value by offering shipping insurance on your products."
        >
          <PreviewWithEditor />
        </ContentHighlight>
      </ContentContainer>
    </Layout>
  );
}

export default ShippingProtection;

function PreviewWithEditor() {
  const [code, setCode] = useState("");
  const [content, setContent] = useState({
    title: "Shipping Insurance",
    description: "Protect your products from damage or loss during shipping.",
    variantID: "",
    price: 12,
  });

  useEffect(() => {
    const toggle = document.getElementById("convert-cat-toggle");

    toggle.addEventListener("change", function () {
      const icon = document.getElementById(
        "convert-cat-shipping-protection-icon"
      );
      if (this.checked) {
        icon.classList.add("convert-cat-active-icon");
      } else {
        icon.classList.remove("convert-cat-active-icon");
      }
    });
  }, []);

  useEffect(() => {
    setCode(getShippingProtectionCode(content));
  }, [content]);

  const updateContent = (key, value) => {
    const newContent = { ...content };
    newContent[key] = value;
    setContent(newContent);
  };

  return (
    <div className="mt-10" id="shipping-widget">
      <div className="bg-white max-w-[420px] mx-auto">
        <div class="convert-cat-shipping-protection-container">
          <div>
            <svg
              id="convert-cat-shipping-protection-icon"
              width="50"
              height="50"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100" height="100" fill="#999999" rx="8" ry="8" />

              <path
                d="M50 15 L80 25 C78 55 65 75 50 85 C35 75 22 55 20 25 L50 15 Z"
                fill="white"
                stroke="white"
              />

              <path
                class="overlay"
                d="M50 15 L80 25 C78 55 65 75 50 85 Z"
                fill="#cccccc"
              />
            </svg>
          </div>
          <div>
            <div class="convert-cat-shipping-protection-header">
              <p class="shipping-title">
                {content.title} (${content.price})
              </p>

              <label class="convert-cat-switch">
                <input type="checkbox" id="convert-cat-toggle" />
                <span class="convert-cat-slider"></span>
              </label>
            </div>
            <p>{content.description}</p>
          </div>
        </div>
      </div>
      <ToolTabs>
        <TabPanel>
          <div className="tool-input-container">
            <TextInput
              placeholder="Ex: Shipping Protection"
              label="Title"
              value={content.title}
              onChange={(e) => updateContent("title", e.target.value)}
            />
            <TextInput
              placeholder="Ex: Protect your products from damage or loss during shipping."
              label="Description"
              value={content.description}
              onChange={(e) => updateContent("description", e.target.value)}
            />
            <TextInput
              placeholder="Ex: 1234567890"
              label="Variant ID (Watch Video above to find this)"
              value={content.variantID}
              onChange={(e) => updateContent("variantID", e.target.value)}
            />

            <TextInput
              placeholder="Ex: 12"
              label="Price"
              value={content.price}
              onChange={(e) => updateContent("price", e.target.value)}
            />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="mb-4">
            Please watch the video above if you need installation instructions.
          </div>
          <div className="space-y-4">
            <CopyCode label="Code" code={code} />
          </div>
        </TabPanel>
      </ToolTabs>
    </div>
  );
}
