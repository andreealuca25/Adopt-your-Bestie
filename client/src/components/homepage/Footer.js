import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-white py-2 px-2">
      <div className="flex justify-between items-center">
        <div>
          <a
            href="/"
            className="text-sm font-semibold text-white hover:text-gray-300"
          >
            Adopt your bestie
          </a>
        </div>

        <div>
          <p className="text-xs text-white">
            © {new Date().getFullYear()} AdoptYourBestie. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
