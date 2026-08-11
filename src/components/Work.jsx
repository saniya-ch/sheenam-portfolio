import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import v1 from "../assets/videos/N0 - Copy.mp4";
import v2 from "../assets/videos/N1.mp4";
import v3 from "../assets/videos/N2.mp4";
import v4 from "../assets/videos/N3.mp4";
import v5 from "../assets/videos/N4.mp4";
import v6 from "../assets/videos/N6.mp4";
import v8 from "../assets/videos/N5.mp4";
import v9 from "../assets/videos/S1.mp4";
import h1 from "../assets/videos/H1.mp4";
import h2 from "../assets/videos/H2.mp4";
import h3 from "../assets/videos/h3.mp4";


function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title:
        "On-Set Direction ",
      category: "Behind the Scenes",
      video: v1,
      color: "bg-[#fde7cf]",
    },

    {
      title:
        "Website purchase- 8,859\nAmount Spent- 69,23,435\nROAS- 2.89",
      category: "Deal of the day [sale]",
      video: v2,
      color: "bg-[#dfe9ff]",
    },

    {
      title:
        "Website purchase- 8,311\nAmount Spent- 74,43,105\nROAS- 2.45",
      category: "Grand Comfort Festival",
      video: v3,
      color: "bg-[#ffe0eb]",
    },

    {
      title:
        "Website purchase- 2,460\nAmount Spent- 43,31,510\nROAS- 2.89",
      category: "Frido Ultimate Wedge Plus Cushion",
      video: v4,
      color: "bg-[#fde7cf]",
    },

    {
      title:
        "Website purchase- 3,760\nAmount Spent- 26,23,780\nROAS- 2.75",
      category: "Top Performing Christmas Sale Ad",
      video: v5,
      color: "bg-[#dfe9ff]",
    },

    {
      title:
        "Website purchase- 185\nAmount Spent- 6,15,940\nROAS- 9.07",
      category: "Frido Transfer Lift",
      video: v6,
      color: "bg-[#ffe0eb]",
    },

    {
      title:
        "Website purchase- 102\nAmount Spent- 1,49,897\nROAS- 2.88",
      category: "Frido Mattress Topper",
      video: v8,
      color: "bg-[#dfe9ff]",
    },

    {
      title:
        "Website purchase- 185\nAmount Spent- 6,15,940\nROAS- 9.07",
      category: "Frido Transfer Lift",
      video: v9,
      color: "bg-[#ffe0eb]",
    },
    {
      title:
        "Recent Work",
      category: "Frido Maternity Pillow Bundle Plus",
      video: h1,
      color: "bg-[#dfe9ff]",
    },
    {
      title:
        "Recent Work",
      category: "Frido Maternity Pillow Bundle Plus",
      video: h2,
      color: "bg-[#dfe9ff]",
    },
    {
      title:
        "Recent Work",
      category: "Frido Maternity Pillow Bundle Plus",
      video: h3,
      color: "bg-[#dfe9ff]",
    },
  ];

  // Close popup with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <section
      id="work"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      {/* =========================
          WORK CONTENT
      ========================== */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Small heading */}

        <p className="tracking-[8px] text-gray-400 mb-4">
          WORK
        </p>

        {/* Main heading */}

        <h2
          className="
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-black
            mb-6
            text-[#081a46]
          "
        >
          Ads I'm proud of.
        </h2>

        {/* Description */}

        <p className="text-gray-500 text-lg md:text-xl mb-16">
          A selection of campaigns, creatives and experiments.
        </p>

        {/* =========================
            PROJECT GRID
        ========================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedProject(project)}
              className={`
                ${project.color}
                group
                rounded-[40px]
                overflow-hidden
                shadow-xl
                hover:shadow-2xl
                cursor-pointer
                transition-all
                duration-300
              `}
            >
              {/* =========================
                  VIDEO PREVIEW
              ========================== */}

              <div className="relative h-[260px] overflow-hidden">
                <video
                  src={project.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="
                    w-full
                    h-full
                    object-cover
                    pointer-events-none
                    group-hover:scale-105
                    transition-all
                    duration-500
                  "
                />

                {/* Dark overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/20
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-300
                    pointer-events-none
                  "
                />

                {/* Play button */}

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-300
                    pointer-events-none
                  "
                >
                  <div
                    className="
                      w-20
                      h-20
                      rounded-full
                      bg-white/90
                      flex
                      items-center
                      justify-center
                      text-3xl
                      shadow-xl
                    "
                  >
                    ▶
                  </div>
                </div>
              </div>

              {/* =========================
                  PROJECT INFORMATION
              ========================== */}

              <div className="bg-white p-8">
                <span
                  className="
                    inline-block
                    px-6
                    py-3
                    rounded-full
                    bg-gray-100
                    text-2xl
                    font-bold
                    text-[#081a46]
                  "
                >
                  {project.category}
                </span>

                <h3
                  className="
                    text-sm
                    md:text-xl
                    font-normal
                    mt-5
                    whitespace-pre-line
                    text-[#081a46]
                    leading-relaxed
                  "
                >
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4 text-sm">
                  Click to view campaign →
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* =========================
          VIDEO POPUP
      ========================== */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="
              fixed
              inset-0
              z-50
              bg-black/80
              backdrop-blur-sm
              flex
              items-center
              justify-center
              p-4
              md:p-6
            "
          >
            {/* Popup box */}

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                bg-white
                rounded-[30px]
                shadow-2xl
                overflow-hidden
                w-full
                max-w-4xl
                max-h-[90vh]
                overflow-y-auto
              "
            >
              {/* =========================
                  CLOSE BUTTON
              ========================== */}

              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close video"
                className="
                  absolute
                  top-4
                  right-4
                  z-50
                  w-12
                  h-12
                  rounded-full
                  bg-black
                  text-white
                  text-3xl
                  font-bold
                  flex
                  items-center
                  justify-center
                  hover:bg-gray-800
                  hover:scale-110
                  transition-all
                "
              >
                ×
              </button>

              {/* =========================
                  FULL VIDEO

                  IMPORTANT:
                  No muted
                  No autoPlay

                  User presses Play and
                  Chrome allows audio.
              ========================== */}

              <div className="bg-black">
                <video
                  key={selectedProject.video}
                  src={selectedProject.video}
                  controls
                  playsInline
                  preload="auto"
                  muted={false}
                  onPlay={(e) => {
                    e.currentTarget.muted = false;
                    e.currentTarget.volume = 1;
                  }}
                  className="
    w-full
    aspect-video
    object-contain
    bg-black
  "
                />
                
              </div>

              {/* =========================
                  POPUP INFORMATION
              ========================== */}

              <div className="bg-white p-6 md:p-8">
                <span
                  className="
                    inline-block
                    px-5
                    py-3
                    rounded-full
                    bg-[#fde7cf]
                    text-base
                    md:text-lg
                    font-bold
                    text-[#081a46]
                    mb-4
                  "
                >
                  {selectedProject.category}
                </span>

                <h2
                  className="
                    text-2xl
                    md:text-4xl
                    font-black
                    text-[#081a46]
                    whitespace-pre-line
                    leading-tight
                    mb-4
                  "
                >
                  {selectedProject.title}
                </h2>

                <p className="text-gray-600 leading-relaxed">
                 
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Work;