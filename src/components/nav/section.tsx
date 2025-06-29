import { useState, useEffect } from "react";

export default function Nav() {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed py-2 top-0 w-full bg-yellow-300 z-50 transition-all duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="flex justify-between items-center text-sm space-x-6 px-6">
          <div className="mb-4 logo text-3xl">wo</div>
          <div className="hidden sm:inline-block -mr-1">
            <div className="flex items-center space-x-6">
              <a href="#projects" className="hover:underline">
                Projects
              </a>
              <a href="#services" className="hover:underline">
                Services
              </a>
              <a href="#stack" className="hover:underline">
                Stack
              </a>
              {/* <a href="">Contact</a> */}
              <a href="" className="hover:underline">
                CV
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=2349156059525"
                target="_blank"
                className="btn btn-neutral btn-sm text-yellow-300"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div
            className="sm:hidden cursor-pointer -mr-1"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M2 6.75A.75.75 0 0 1 2.75 6h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.75Zm0 6.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div>
          {open && (
            <>
              <div className="flex flex-col items-left p-6 text-left space-y-6 sm:hidden">
                <a href="#projects">Projects</a>
                <a href="#services">Services</a>
                <a href="#stack">Stack</a>
                {/* <a href="">Contact</a> */}
                <a href="">CV</a>
                <div className="flex gap-x-4">
                  <a
                    href="https://api.whatsapp.com/send?phone=2349156059525"
                    className="font-medium"
                  >
                    Get in touch
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-square-arrow-out-up-right size-5"
                  >
                    <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                    <path d="m21 3-9 9" />
                    <path d="M15 3h6v6" />
                  </svg>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
