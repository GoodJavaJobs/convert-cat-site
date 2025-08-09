import "@/styles/globals.css";
import "@/styles/add-products-to-shopify-blog-post.css";
import "@/styles/shipping-protection.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
