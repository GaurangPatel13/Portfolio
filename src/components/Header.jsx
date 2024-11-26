import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import debounce from "lodash.debounce";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check and apply saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      setTheme("light");
      document.documentElement.classList.add("light");
    }
  }, []);

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    setIsMenuOpen(false);
  };

  // Handle scroll to show/hide header
  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(currentScrollPos < prevScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Variants for Framer Motion
  const headerVariants = {
    hidden: { y: -100, opacity: 0, transition: { duration: 0.5 } },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const menuVariants = {
    open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 200 } },
    closed: { x: "100%", opacity: 0, transition: { type: "spring", stiffness: 200 } },
  };

  // Handle menu item click
  const handleMenuItemClick = (id) => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-gray-100 dark:bg-gray-900 shadow-lg z-50"
      variants={headerVariants}
      initial="visible"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <motion.h1
          className="text-3xl sarina-regular font-bold text-gray-800 dark:text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        ><a href="/">
          Gaurang
          </a>
        </motion.h1>

        {/* Hamburger Icon */}
        <motion.div
          className="sm:hidden cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars className="text-gray-800 dark:text-white" size={30} />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden sm:flex w-full justify-end items-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {["Home", "About", "Projects", "Skills", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.2, color: "#6b46c1" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="list-none"
            >
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={800}
                offset={-50}
                className="text-lg text-gray-800 dark:text-gray-100 cursor-pointer"
              >
                {item}
              </Link>
            </motion.li>
          ))}

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-black text-white dark:bg-white dark:text-black"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {theme === "light" ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-400" />}
          </motion.button>
        </motion.nav>

        {/* Mobile Navigation */}
        <motion.div
          className="fixed top-0 right-0 w-3/4 h-full bg-gray-100 dark:bg-gray-900 z-40 sm:hidden"
          variants={menuVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
        >
          <motion.div className="flex justify-between items-center p-6">
            <motion.div
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes className="text-3xl text-white" />
            </motion.div>
          </motion.div>
          <motion.ul className="flex flex-col items-center justify-center space-y-8 mt-20">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.2, color: "#6b46c1" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={800}
                  offset={-50}
                  className={`text-2xl ${theme === "light" ? "text-black" : "text-white"}`}
                  onClick={() => handleMenuItemClick(item.toLowerCase())}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
            <motion.li>
              <motion.button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-black text-white dark:bg-white dark:text-black"
              >
                {theme === "light" ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-400" />}
              </motion.button>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
