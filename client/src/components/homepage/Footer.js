const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-yellow-500 text-white py-2 px-2 z-50">
      <div className="container mx-auto flex justify-between items-center">
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
