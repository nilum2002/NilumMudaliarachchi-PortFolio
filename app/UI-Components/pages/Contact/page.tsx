"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate sending
    setTimeout(() => {
      alert("Message sent successfully!");
      setIsSending(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: "bi bi-envelope",
      title: "Email",
      value: "sachithyanilum@gmail.com",
      link: "mailto:sachithyanilum@gmail.com",
    },

    {
      icon: "bi bi-geo-alt",
      title: "Location",
      value: "Moratuwa, Sri Lanka",
      link: "https://maps.app.goo.gl/1pawnbucKP9Lftv86",
    },
    {
      icon: "bi bi-github",
      title: "GitHub",
      value: "github.com/nilum",
      link: "https://github.com/nilum2002?tab=repositories",
    },
  ];

  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-10">
        <div
          className="heading border-b pb-5 px-5 mb-10"
          style={{ borderColor: "var(--light-border)" }}
        >
          <div className="flex">
            <Link href="/" className="text-[var(--text-light)]">
              <i className="bi bi-house text-white me-2 px-2 py-1 rounded-full bg-[var(--prim-color)]"></i>
              Home
            </Link>
            <span className="mx-2">
              <i className="ri-arrow-right-wide-line text-[var(--text-white)]"></i>
            </span>
            <h2 className="text-[var(--text-light)]">Contact</h2>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-[var(--white)] mb-4 ">
            Let's Connect{" "}
            <span className="text-[var(--prim-color)]">Together</span>
          </h1>
          <p className="text-[var(--text-light)] text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can collaborate to
            bring your ideas to life.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="group p-6 rounded-lg border transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "var(--prim-color)",
                backgroundColor: "var(--bg-color)",
                boxShadow:
                  "0 0 15px rgba(14, 165, 234, 0.3), inset 0 0 15px rgba(14, 165, 234, 0.1)",
              }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-[var(--prim-color)]/10 flex items-center justify-center group-hover:bg-[var(--prim-color)] transition-all duration-300">
                  <i
                    className={`${info.icon} text-2xl text-[var(--prim-color)] group-hover:text-white transition-colors duration-300`}
                  ></i>
                </div>
                <h3 className="text-[var(--white)] font-semibold">
                  {info.title}
                </h3>
                <p className="text-[var(--text-light)] text-sm break-all">
                  {info.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div
            className="p-8 rounded-lg border"
            style={{
              borderColor: "var(--prim-color)",
              backgroundColor: "var(--bg-color)",
              boxShadow:
                "0 0 20px rgba(14, 165, 234, 0.4), inset 0 0 20px rgba(14, 165, 234, 0.1)",
            }}
          >
            <h2 className="text-3xl font-bold text-[var(--white)] mb-6 text-center">
              Send Me a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[var(--text-light)] mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border bg-[var(--body-color)] text-[var(--white)] focus:outline-none focus:border-[var(--prim-color)] transition-colors"
                    style={{ borderColor: "var(--light-border)" }}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[var(--text-light)] mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border bg-[var(--body-color)] text-[var(--white)] focus:outline-none focus:border-[var(--prim-color)] transition-colors"
                    style={{ borderColor: "var(--light-border)" }}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[var(--text-light)] mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border bg-[var(--body-color)] text-[var(--white)] focus:outline-none focus:border-[var(--prim-color)] transition-colors"
                  style={{ borderColor: "var(--light-border)" }}
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label className="block text-[var(--text-light)] mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border bg-[var(--body-color)] text-[var(--white)] focus:outline-none focus:border-[var(--prim-color)] transition-colors resize-none"
                  style={{ borderColor: "var(--light-border)" }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 rounded-lg bg-[var(--prim-color)] text-white font-semibold text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSending ? (
                  <>
                    <i className="bi bi-arrow-repeat animate-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="bi bi-send"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
