export const products_in_article_liquid = `{% if article.metafields.custom.article_products.value != blank %}
  <div class="cc-multiple-products-container ">
    <div>
      <h2 class="content-heading">Shop Related Products</h2>
    </div>
    <div class="cc-multiple-products-grid-container">
      {% for product in article.metafields.custom.article_products.value %}
        <div>
          <div class="cc-multiple-products-product">
            <img width="" height="" class="cc-product-image" src="{{ product.featured_image | img_url: 'medium' }}" alt="{{ product.title }}" />
            <h3 class="cc-product-title">{{ product.title }}</h3>
            <p class="cc-product-price">{{ product.variants.first.price | money }}</p> 
            <a class="cc-product-btn" href="{{ product.url }}" target="_blank">Shop Now</a>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
{% endif %}`;

export const multiple_products_in_article_css = `
:root {
         --cc-multiple-products-highlight-background-color: #000;
         --cc-multiple-products-highlight-text-color: #fff;
       }

.cc-multiple-products-grid-container {
  display: flex;
  gap: 30px;
  margin-top: 20px;
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
  font-size: 22px;
  font-weight: medium;
}

.cc-multiple-products-container .content-description {
  margin-top: 5px;
  font-size: 16px;
  margin-bottom: 20px;
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

.cc-multiple-products-product .cc-product-btn:hover {
  color: var(--cc-multiple-products-highlight-text-color, white) !important;
}

@media (max-width: 768px) {
  .cc-multiple-products-grid-container {
    flex-direction: column;
  }
}
`;
