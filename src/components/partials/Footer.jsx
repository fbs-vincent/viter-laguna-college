import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <img
                  style={{ width: "50px", height: "50px" }}
                  className="mr-2"
                  src="./image/logo.png"
                  alt="Laguna College Logo"
                />
                <h2 className="text-xl font-bold">Laguna College</h2>
              </div>
              <p className="mt-2 text-blue-200">Scientia, Patria, Libertas</p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-blue-200">
                &copy; {new Date().getFullYear()} Laguna College
              </p>
              <p className="text-blue-200">All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
