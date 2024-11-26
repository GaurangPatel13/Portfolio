import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic or mailto functionality here
    window.location.href = `mailto:gaurangp69@gmail.com?subject=Contact from Portfolio&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
  };

  return (
    <section ref={ref} id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto text-center lg:text-left">
        <motion.h2
          className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-6 px-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          Get in touch for any inquiries or collaborations. I’d love to hear from you!
        </motion.p>

        {/* Animated Contact Form and Image in a grid layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Form Section */}
          <div className="space-y-4 text-gray-200">
            <motion.form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mb-3 border outline-none placeholder:text-gray-300 rounded-md bg-gray-400 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 mb-3 border outline-none placeholder:text-gray-300 rounded-md bg-gray-400 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border outline-none placeholder:text-gray-300 resize-none rounded-md bg-gray-400 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <motion.button
                type="submit"
                className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>

          {/* Image Section */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.img
              src="Images/contact.png"
              alt="Animated Visual"
              className="w-72 h-72 mx-auto rounded-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
