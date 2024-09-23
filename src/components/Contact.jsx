import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pn0xlpb', // Replace with your EmailJS service ID
        'template_mdeygdr', // Replace with your EmailJS template ID
        formRef.current,
        'mtjS0NCnxxctHuJCL' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(false);
          console.log(result);

          // Reset the form fields
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setError(true);
          setSuccess(false);
          console.log('Error sending email:', error);
        }
      );
  };

  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <section className="max-w-screen mx-auto p-4">
      <hr className="border-t-2 border-gray-700 my-8 mx-auto w-11/12" />
      <motion.div
        ref={ref}
        className="flex flex-col lg:flex-row justify-evenly items-center space-y-8 lg:space-y-0 lg:space-x-8 lg:px-20"
        variants={variants}
        initial="initial"
        whileInView={isInView && 'animate'}
      >
        <motion.div className="flex flex-col gap-4 lg:gap-8" variants={variants}>
          <motion.h1 className="text-5xl font-bold text-gray-100 lg:text-7xl" variants={variants}>
            Let&apos;s Work Together
          </motion.h1>
          <motion.div variants={variants} className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-gray-300">Mail</h2>
            <span className="text-lg text-gray-400">jefftkddan@gmail.com</span>
          </motion.div>
        </motion.div>

        <div className="w-full lg:w-1/2 relative">
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 bg-transparent border border-blue-300 text-blue-400 rounded-lg focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 bg-transparent border border-blue-300 text-blue-400 rounded-lg focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 bg-transparent border border-blue-300 text-blue-400 rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              className="p-3 bg-blue-500 text-gray-900 font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
            {error && <p className="text-red-500">Error submitting message.</p>}
            {success && <p className="text-green-500">Message sent successfully!</p>}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
