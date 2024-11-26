import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-3 px-2 h-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand or Name */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl font-bold">Gaurang Patel</h1>
          <p className="text-gray-400 text-sm mt-1">© 2024 Portfolio. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-md">
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/GaurangPatel13" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/gaurang-patel-8164492a3/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaLinkedin size={30} />
          </a>
          <a href="https://wa.me/919303643014" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaWhatsappSquare size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
