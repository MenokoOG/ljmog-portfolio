import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCopy, FiCheck, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const EMAIL = 'Lawrence@gunkustom.com';

export default function ContactLite() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // fallback: ignore silently
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-black bg-opacity-80 py-16 px-6 rounded-lg container mx-auto"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center"
      >
        <h2
          id="contact-heading"
          className="text-4xl sm:text-5xl font-bold text-yellow-200 mb-4"
        >
          Let’s Work Together
        </h2>
        <p className="text-yellow-100 mb-8">
          Lawrence Jefferson II · <span className="text-yellow-300">CTO</span> ·{' '}
          <a
            href="https://gunkustom.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-200"
          >
            GunKustom.com
          </a>
        </p>

        {/* Email card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1, duration: 0.45 }}
          className="mx-auto max-w-lg rounded-xl border border-blue-400/40 bg-black p-6 shadow-lg"
        >
          <code className="block text-2xl font-semibold text-blue-300 mb-6">
            {EMAIL}
          </code>

          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={copyEmail}
              type="button"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-400/40 text-blue-300 hover:bg-blue-500/20 transition"
            >
              {copied ? <FiCheck /> : <FiCopy />}
              {copied ? 'Copied!' : 'Copy'}
            </motion.button>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-black font-semibold hover:bg-blue-600 transition"
            >
              <FiMail />
              Email Me
            </motion.a>
          </div>
        </motion.div>

        {/* Social links */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/MenokoOG"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-blue-400/40 text-blue-300 hover:bg-blue-500/20 transition"
            title="GitHub: MenokoOG"
          >
            <FiGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/lawrence-jefferson-ii-46497075"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-blue-400/40 text-blue-300 hover:bg-blue-500/20 transition"
            title="LinkedIn: Lawrence Jefferson II"
          >
            <FiLinkedin className="h-6 w-6" />
          </a>
        </div>

        <p className="mt-6 text-sm text-yellow-100/70">
          I read every message. If it’s urgent, click “Email Me”.
        </p>
      </motion.div>
    </section>
  );
}
