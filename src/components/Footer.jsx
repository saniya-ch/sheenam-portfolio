import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <footer className="py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="border-t border-gray-300 pt-10">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            {/* Left */}

            <div>

              <h2 className="text-3xl font-black text-[#081a46]">
                Sheenam.
              </h2>

              <p className="text-gray-500 mt-2">
                Creative Strategist • Ads Director • Copywriter
              </p>

            </div>

            {/* LinkedIn */}

<div className="flex gap-5">

  <a
    href="https://www.linkedin.com/in/sheenamsheikh001/"
    target="_blank"
    rel="noopener noreferrer"
    className="
    w-14
    h-14
    rounded-full
    bg-white
    shadow-lg
    flex
    items-center
    justify-center
    text-2xl
    hover:bg-[#0077B5]
    hover:text-white
    hover:-translate-y-1
    transition-all
    duration-300
    "
  >
    <FaLinkedinIn />
  </a>

</div>

          </div>

          <div className="mt-12 text-center text-gray-500 text-sm">
            © 2026 Sheenam. All Rights Reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;