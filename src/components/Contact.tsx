import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_xqoc0tn", // replace with your EmailJS service ID
        "template_0dabxzu", // replace with your EmailJS template ID
        formRef.current,
        "9bKlYLYi56tHhm3Fm" // replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setLoading(false);
          formRef.current?.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-start bg-gray-50 py-20 px-4"
    >
      {/* Heading */}
      <h2 className="text-5xl font-extrabold mb-4 text-center">Contact me</h2>
      <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        Interested in collaborating or have a question? Drop me a message below or
        reach me directly through my socials.
      </p>

      {/* Form Container */}
      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-16">
        <h3 className="text-2xl text-center font-bold mb-12">Send Message</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {/* Name + Phone */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-gray-700 font-semibold mb-1">Name:</label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label className="text-gray-700 font-semibold mb-1">Phone:</label>
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Subject:</label>
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold mb-1">Message:</label>
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Send Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-12">
          <hr className="flex-grow border-t-2 border-black" />
          <span className="mx-4 font-bold text-black text-lg">⇄</span>
          <hr className="flex-grow border-t-2 border-black" />
        </div>

        {/* Follow Me */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <span className="font-semibold text-lg">Follow me:</span>
          <div className="flex gap-6 text-2xl text-gray-700">
            <a
              href="mailto:patiljaydeep688@gmail.com"
              className="hover:text-red-500 transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/jaydeep-patil-9b9813217/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Jaydeep467"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/jaydeeep_09/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
