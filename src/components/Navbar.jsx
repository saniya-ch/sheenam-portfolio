import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const handleScroll = () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (
        scrollY >= sectionTop &&
        scrollY < sectionTop + sectionHeight
      ) {
        setActiveSection(section.getAttribute("id"));
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header
      className="
      sticky
      top-0
      z-50
      bg-[#f6f4ef]/80
      backdrop-blur-md
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-10
        py-5
        flex
        justify-between
        items-center
        "
      >
        {/* Logo */}

        <div className="flex items-center gap-3">
          <div
            className="
            w-12
            h-12
            rounded-full
            bg-[#081a46]
            text-white
            flex
            items-center
            justify-center
            font-bold
            text-lg
            shadow-md
            "
          >
            S
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-black text-[#081a46]">
              Sheenam Sheikh
            </h2>

            <p className="text-xs text-gray-500">
               Performance Creative Strategist
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}

        <nav
  className="
  hidden
  md:flex
  items-center
  gap-10
  text-lg
  font-medium
  "
>
  <a
    href="#about"
    className={`transition-all duration-300 ${
      activeSection === "about"
        ? "text-[#214BB8] font-bold"
        : "text-[#081a46] hover:text-[#214BB8]"
    }`}
  >
    About
  </a>

  <a
    href="#work"
    className={`transition-all duration-300 ${
      activeSection === "work"
        ? "text-[#214BB8] font-bold"
        : "text-[#081a46] hover:text-[#214BB8]"
    }`}
  >
    Work
  </a>

  <a
    href="#experience"
    className={`transition-all duration-300 ${
      activeSection === "experience"
        ? "text-[#214BB8] font-bold"
        : "text-[#081a46] hover:text-[#214BB8]"
    }`}
  >
    Experience
  </a>

  <a
    href="#toolkit"
    className={`transition-all duration-300 ${
      activeSection === "toolkit"
        ? "text-[#214BB8] font-bold"
        : "text-[#081a46] hover:text-[#214BB8]"
    }`}
  >
    Toolkit
  </a>

  <a
    href="#contact"
    className={`transition-all duration-300 ${
      activeSection === "contact"
        ? "text-[#214BB8] font-bold"
        : "text-[#081a46] hover:text-[#214BB8]"
    }`}
  >
    Contact
  </a>
</nav>

        {/* Mobile Menu Button */}

        <button
          className="md:hidden text-3xl text-[#081a46]"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div
            className="
            bg-white
            rounded-3xl
            p-6
            shadow-xl
            flex
            flex-col
            gap-5
            "
          >
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>

            <a href="#work" onClick={() => setOpen(false)}>
              Work
            </a>

            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="
              bg-[#081a46]
              text-white
              text-center
              py-3
              rounded-2xl
              "
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;