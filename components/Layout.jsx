import { FaShieldCat } from "react-icons/fa6";
import EmailCaptureForm from "./ui/EmailCaptureForm";
import { useEffect, useState } from "react";
import Button from "./ui/CTAButton";

function Layout({ children, pageHeader }) {
  return (
    <div className="flex bg-[#F7F7F7] flex-col min-h-screen">
      <StickyHeader />
      <PageHeader {...pageHeader} />
      <main className="flex-grow">{children}</main>
      <div className="my-8"></div>
      <Footer />
    </div>
  );
}

export default Layout;

function PageHeader({ subTitle, title, cta, description, ctaLink }) {
  return (
    <section className="bg-[#E1FB61] pt-[130px] pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Small text */}
        {subTitle && (
          <p className="text-md font-medium bg-[#CAF206] w-fit mx-auto px-2 py-1 rounded-md">
            {subTitle}
          </p>
        )}
        {/* Heading */}
        <h1 className="mt-4 text-4xl font-bold leading-[1.2] text-black sm:text-5xl">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-black">{description}</p>

        {/* Button */}
        {cta && ctaLink && (
          <div className="mt-8">
            <Button href={ctaLink}>{cta}</Button>
          </div>
        )}
      </div>
    </section>
  );
}

function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      `}
    >
      <div
        className={`mt-[20px] mx-[20px] ${
          isScrolled
            ? "backdrop-blur-md bg-white shadow-md rounded-[12px] "
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="/">
            <div className="text-xl font-bold flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width="35px"
                height="35px"
                viewBox="0 0 32 32"
                version="1.1"
              >
                <title>cat</title>
                <path d="M28.926 1.17l-2.182 3.608c-1.876-0.608-4.669-0.489-6.426 0l-2.102-3.557c-3.452 6.448-2.475 10.523 0.159 12.549-0.403 0.252-0.818 0.529-1.247 0.833-10.979-8.759-20.863 1.106-14.379 9.92h0.050c1.163 1.687 2.503 2.731 3.95 3.277 2.050 0.773 4.159 0.551 6.236 0.257s4.109-0.663 6.046-0.525c1.937 0.138 3.874 0.635 5.647 2.569 1.209 1.318 2.926-0.101 1.486-1.507-2.185-2.134-4.525-2.959-6.825-3.122s-4.505 0.293-6.502 0.576c-1.997 0.283-3.761 0.409-5.276-0.163-0.711-0.268-1.403-0.69-2.070-1.36h22.51c1.064-3.756 1.177-7.73-0.033-10.237 3.635-1.897 5.097-6.376 0.958-13.116zM22.176 10.872c-2.316 1.117-3.367 0.212-3.817-1.656 2.273-1.41 3.626-0.278 3.817 1.656zM25.067 10.872c0.191-1.934 1.544-3.067 3.817-1.656-0.45 1.868-1.502 2.774-3.817 1.656z" />
              </svg>
              ConvertCat
            </div>
          </a>

          {/* CTA Button */}
          <Button href="/#sections">Browse</Button>
        </div>
      </div>
    </header>
  );
}

function Header() {
  return (
    <div className="border-b border-gray-300  flex justify-between items-center p-4">
      <Logo />
      <div className="flex items-center gap-4 ">
        <a href="/#tools" className="underline">
          Tools
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <>
      <div className="text-black text-center mt-auto border-t border-gray-300">
        <EmailCaptureForm />
        <div className="p-5 bg-white border-t border-gray-300">
          <div>© 2025 Convert Cat</div>
          <div className="mt-2 flex justify-center gap-4">
            <a className="underline" href="mailto:sjois@fulltimecyber.com">
              Contact
            </a>

            <a className="underline" href="/privacy">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 ">
      <span className="font-medium text-xl">convert</span>
      <FaShieldCat className="text-3xl text-[#c8553d]" />
    </a>
  );
}
