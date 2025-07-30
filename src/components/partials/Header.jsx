import React from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Close menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed w-full bg-blue-800 text-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img
              style={{ width: "50px", height: "50px" }}
              className="mr-2"
              src="./image/logo.png"
              alt="Laguna College Logo"
            />
            <h1 className="text-xl font-bold">Laguna College</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="hover:text-blue-200 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-200 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/academics" className="hover:text-blue-200 transition">
                  Academics
                </a>
              </li>
              <li>
                <a
                  href="/admissions"
                  className="hover:text-blue-200 transition"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-blue-200 transition">
                  News & Events
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-200 transition">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Burger Menu */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Full-screen Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-blue-800 z-40 pt-20">
            <div className="container mx-auto px-4">
              <ul className="space-y-4 text-center">
                <li>
                  <a
                    href="/"
                    className="block py-4 text-2xl hover:text-blue-200 transition"
                    onClick={closeMenu}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="block py-4 text-2xl hover:text-blue-200 transition"
                    onClick={closeMenu}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/academics"
                    className="block py-4 text-2xl hover:text-blue-200 transition"
                    onClick={closeMenu}
                  >
                    Academics
                  </a>
                </li>
                <li>
                  <a
                    href="/admissions"
                    className="block py-4 text-2xl hover:text-blue-200 transition"
                    onClick={closeMenu}
                  >
                    Admissions
                  </a>
                </li>
                <li>
                  <a
                    href="/events"
                    className="block py-4 text-2xl hover:text-blue-200 transition"
                    onClick={closeMenu}
                  >
                    News & Events
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="block py-4 text-2xl hover:text-blue-200 transition"
                    onClick={closeMenu}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
