// import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ContactSvg from "./ContactSvg";
import { motion, useInView } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; // ✅ tick icon

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ loading state

  const ref = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // start loader

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setLoading(false); // stop loader
          form.current.reset(); // optional: reset form
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
          setLoading(false); // stop loader
        }
      );
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="contact" ref={ref}>
      <div className="cSection">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
          className="contactForm"
          style={{ fontFamily: '"Merriweather", serif' }}
        >
          <motion.h1
            variants={listVariant}
            className="cTitle"
            style={{
              textAlign: "left",
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            Let's keep in touch
          </motion.h1>

          <motion.div variants={listVariant} className="formGroup">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="user_username"
              id="name"
              placeholder="John Doe"
              required
            />
          </motion.div>

          <motion.div variants={listVariant} className="formGroup">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="john@example.com"
              required
            />
          </motion.div>

          <motion.div variants={listVariant} className="formGroup">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="user_message"
              id="message"
              rows={10}
              placeholder="Write your message here..."
              required
            />
          </motion.div>

          <motion.button
            variants={listVariant}
            type="submit"
            className="formButton"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {success && (
            <div className="status success">
              <FaCheckCircle style={{ marginRight: "8px", color: "#28a745" }} />
              Your message has been sent!
            </div>
          )}
          {error && (
            <span className="status error">
              ❌ Something went wrong. Please try again.
            </span>
          )}
        </motion.form>
      </div>
      <div className="cSection">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;
