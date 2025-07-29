import React from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      {/* Header */}
      <header className="bg-blue-800 text-white shadow-md">
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-700 px-4 py-2">
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="block py-2 hover:text-blue-200 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 hover:text-blue-200 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/academics"
                  className="block py-2 hover:text-blue-200 transition"
                >
                  Academics
                </a>
              </li>
              <li>
                <a
                  href="/admissions"
                  className="block py-2 hover:text-blue-200 transition"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="block py-2 hover:text-blue-200 transition"
                >
                  News & Events
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 hover:text-blue-200 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
