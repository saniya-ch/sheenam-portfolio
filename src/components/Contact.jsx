import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
        bg-[#081a46]
        text-white
        rounded-[40px]
        p-8
        md:p-12
        lg:p-16
        shadow-2xl
        "
      >
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          lg:gap-20
          items-center
          "
        >
          {/* Left Side */}

          <div>
            <p className="tracking-[8px] text-gray-300 mb-4">
              CONTACT
            </p>

            <h2
              className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              leading-[1.05]
              mb-8
              "
            >
              Let's build something unforgettable.
            </h2>

            <p
              className="
              text-lg
              md:text-xl
              text-gray-300
              leading-relaxed
              max-w-md
              "
            >
              Open for Campaigns, Consulting,Ghost writing,
              Content strategy, Ads Scripting,
              Creative direction and Brand collaborations.
            </p>
          </div>

          {/* Right Side */}

          <form
  action="https://formspree.io/f/xzdlpjyr"
  method="POST"
  className="space-y-5"
>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="
              w-full
              p-5
              rounded-2xl
              bg-[#16306f]
              border
              border-white/20
              text-white
              placeholder:text-white/80
              outline-none
              focus:border-white/50
              transition
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="
              w-full
              p-5
              rounded-2xl
              bg-[#16306f]
              border
              border-white/20
              text-white
              placeholder:text-white/80
              outline-none
              focus:border-white/50
              transition
              "
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              className="
              w-full
              p-5
              rounded-2xl
              bg-[#16306f]
              border
              border-white/20
              text-white
              placeholder:text-white/80
              outline-none
              resize-none
              focus:border-white/50
              transition
              "
            />

            <button
              type="submit"
              className="
              bg-white
              text-[#081a46]
              px-8
              py-4
              rounded-2xl
              font-bold
              hover:scale-105
              hover:shadow-xl
              transition-all
              duration-300
              "
            >
              Send Message →
            </button>

          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;