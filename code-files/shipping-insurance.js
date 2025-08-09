export const getShippingProtectionCode = (content) => {
  return `<div class="convert-cat-shipping-protection-container">
      <div>
        <svg
          id="convert-cat-shipping-protection-icon"
          width="50"
          height="50"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Grey background -->
          <rect width="100" height="100" fill="#999999" rx="8" ry="8" />

          <!-- Shield shape -->
          <path
            d="M50 15 L80 25 C78 55 65 75 50 85 C35 75 22 55 20 25 L50 15 Z"
            fill="white"
            stroke="white"
          />

          <!-- Right half overlay -->
          <path
            class="overlay"
            d="M50 15 L80 25 C78 55 65 75 50 85 Z"
            fill="#cccccc"
          />
        </svg>
      </div>
      <div>
        <div class="convert-cat-shipping-protection-header">
          <p class="shipping-title">${content.title} (${content.price})</p>
          
            <label class="convert-cat-switch">
              <input type="checkbox" id="convert-cat-toggle" />
              <span class="convert-cat-slider"></span>
            </label>
        
        </div>
        <p>${content.description}</p>
      </div>
    </div>


<style>
      .convert-cat-shipping-protection-container {
        display: flex;
        gap: 15px;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 15px;
      }

      .convert-cat-shipping-protection-container p {
        margin: 0px !important;
font-size: 12px;
line-height: 1.6;
      }

      .convert-cat-shipping-protection-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 7px;
gap:10px;
      }

      .convert-cat-shipping-protection-header .shipping-title {
        font-weight: bold;
font-size: 14px;
line-height:1.4;
      }

      .convert-cat-switch {
        position: relative;
        display: inline-block;
        width: 44px;
        height: 20px;
      }

      .convert-cat-active-icon rect {
        fill: #0bbb74;
      }

      .convert-cat-active-icon .overlay {
        fill: #60d3a5;
      }

      /* Hide default checkbox */
      .convert-cat-switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      /* Slider background */
      .convert-cat-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.3s;
        border-radius: 20px;
      }

      /* Knob */
      .convert-cat-slider:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        transition: 0.3s;
        border-radius: 50%;
      }

      /* Checked state */
      input:checked + .convert-cat-slider {
        background-color: #0bbb74;
      }

      input:checked + .convert-cat-slider:before {
        transform: translateX(24px);
      }
    </style>

     <script>
      const toggle = document.getElementById("convert-cat-toggle");
      const VARIANT_ID = ${content.variantID};

      toggle.addEventListener("change", function () {
        const icon = document.getElementById(
          "convert-cat-shipping-protection-icon"
        );
        if (this.checked) {
          icon.classList.add("convert-cat-active-icon");
          fetch("/cart/add.js", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: VARIANT_ID, quantity: 1 }),
          })
            .then((res) => res.json())
            .then((data) => {})
            .catch((err) => console.error(err));
        } else {
          icon.classList.remove("convert-cat-active-icon");
          fetch("/cart.js")
            .then((res) => res.json())
            .then((cart) => {
              const lineItem = cart.items.find(
                (item) => item.variant_id === VARIANT_ID
              );
              if (lineItem) {
                return fetch("/cart/change.js", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ id: lineItem.key, quantity: 0 }),
                });
              }
            })
            .then((res) => res?.json?.())
            .then((data) => {})
            .catch((err) => console.error(err));
        }
      });
    </script>`;
};
