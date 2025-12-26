import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-10 text-[var(--white)]">
        <div className="p-5 rounded-2xl border border-[var(--light-boarder)] bg-[var(--bg-color)] mb-4">
          <div className="p-0 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <Link
                href="/"
                className="text-xl font-bold font-geist-mono text-[var(--prim-color)] lg:shrink-0"
              >
                Nilum{" "}
                <span className="text-[var(--white)] hidden md:inline">
                  Mudaliarachchi
                </span>
                <span className="text-[var(--white)] inline md:hidden">M.</span>
              </Link>
              <p className="text-[var(--light)] font-mono text-[15px] mt-5">
                Robotics, AI, Backend, Embedded Systems. Turning ideas into
                efficient, intelligent solutions. Crafted with passion by Nilum.
              </p>
              <h2 className="mt-6 font-mono">Address :</h2>
              <p className="text-[var(--Light)]">University Of Moratuwa</p>
              <p className="text-[var(--Light)]">Moratuwa</p>
              <p className="text-[var(--Light)]">Sri Lanka</p>
            </div>
            <div className="lg:col-start-2">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-[var(--text-light)]">
                <li>
                  <Link
                    href="/"
                    className="hover:text-[var(--prim-color)] transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#projects"
                    className="hover:text-[var(--prim-color)] transition-colors duration-300"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articles"
                    className="hover:text-[var(--prim-color)] transition-colors duration-300"
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[var(--prim-color)] transition-colors duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[var(--prim-color)] transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-start-3">
              <h3 className="text-lg font-bold mb-4">ContactMe</h3>
              <p className="text-[var(--text-light)] text-sm mb-6">
                Contact Me via E-mail.
              </p>
              <form className="space-y-4">
                <div className="flex items-center gap-3 border-b border-[var(--light-boarder)] pb-2">
                  <i className="bi bi-person text-[var(--text-light)]"></i>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent text-[var(--white)] placeholder-[var(--text-light)] focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-3 border-b border-[var(--light-boarder)] pb-2">
                  <i className="bi bi-envelope text-[var(--text-light)]"></i>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-transparent text-[var(--white)] placeholder-[var(--text-light)] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 px-6 py-2 bg-gradient-to-r from-[#0ea5ea] to-[#4d98bd] text-[var(--white)] rounded-lg font-semibold hover:shadow-lg hover:shadow-[rgba(14,165,234,0.5)] transition-shadow duration-300"
                >
                  Send <i className="bi bi-arrow-right ml-2"></i>
                </button>
              </form>
            </div>
          </div>

          {/* Copyright and Social Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-8 pt-5 border-t border-[var(--light-boarder)]">
            <div className="text-sm text-[var(--text-light)]">
              © copyright 2025. All Rights Reserved{" "}
              <span className="text-[var(--prim-color)] font-bold">NilumM</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-[var(--text-light)]">
              <Link
                href="https://github.com/nilum2002?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--prim-color)] transition-colors duration-300"
              >
                <i className="bi bi-github mr-2"></i>GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/nilum2002/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--prim-color)] transition-colors duration-300"
              >
                <i className="bi bi-linkedin mr-2"></i>LinkedIn
              </Link>
              <Link
                href="https://www.kaggle.com/nilummudaliarachchi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--prim-color)] transition-colors duration-300"
              >
                <i className="bi bi-trophy mr-2"></i>Kaggle
              </Link>
              <Link
                href="https://medium.com/@sachithyanilum"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--prim-color)] transition-colors duration-300"
              >
                <i className="bi bi-rss mr-2"></i>Medium
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
