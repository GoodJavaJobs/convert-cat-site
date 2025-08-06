import { FaShieldCat } from "react-icons/fa6";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mb-[30px]">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

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
    <div className="bg-black p-4 text-white text-center mt-auto">
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
