import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [messageType, setMessageType] = useState("success"); // success or error

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Auto hide message after 3 seconds
  const showTemporaryMessage = (text, type = "success") => {
    setMessageText(text);
    setMessageType(type);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Sithija Kalhara",
          from_email: form.email,
          to_email: "sithijakalhara2@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showTemporaryMessage("✓ Message sent successfully!", "success");
          
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showTemporaryMessage("✗ Failed to send. Please try again.", "error");
        },
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden relative`}
    >
      {/* Custom Toast Message */}
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg ${
            messageType === "success" 
              ? "bg-green-500 text-white" 
              : "bg-red-500 text-white"
          }`}
        >
          {messageText}
        </motion.div>
      )}

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Let's Build Something Powerful</p>
        <h3 className={styles.sectionHeadText}>Contact Me.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg shadow-primary/50 hover:scale-105 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className={styles.contactInfo}>
          {/* Email */}
          <a
            href="mailto:sithijakalhara2@gmail.com"
            className={styles.contactItem}
          >
            <MdEmail className="text-[20px] text-red-500" />
            <span className={styles.contactText}>
              sithijakalhara2@gmail.com
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Sithija-Kalhara"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
          >
            <FaGithub className="text-[20px] text-white" />
            <span className={styles.contactText}>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sithija-kalhara/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
          >
            <FaLinkedin className="text-[20px] text-[#0A66C2]" />
            <span className={styles.contactText}>LinkedIn</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/94712058956"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
          >
            <FaWhatsapp className="text-[20px] text-[#25D366]" />
            <span className={styles.contactText}>WhatsApp</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");