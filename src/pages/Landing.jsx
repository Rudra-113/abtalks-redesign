import { motion } from "framer-motion";

import Navbar from "../components/layout/Navbar";
import Stats from "../components/landing/Stats";
import Features from "../components/landing/Features";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/Faq";
import Footer from "../components/layout/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden"
      >

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-purple-600/20" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">

          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            🚀 India's #1 60-Day Coding Challenge
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
          >
            Build Your
            <span className="text-indigo-500"> Dream Career</span>
            <br />
            One Commit at a Time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Complete one coding challenge every day, maintain your GitHub
            streak, publish your learning on LinkedIn, and become visible to
            recruiters across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 hover:bg-indigo-500 transition px-8 py-4 rounded-2xl font-semibold"
            >
              🚀 Start Challenge
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-zinc-700 hover:border-indigo-500 transition px-8 py-4 rounded-2xl"
            >
              Learn More
            </motion.button>

          </motion.div>

        </div>

      </motion.section>

      {/* Stats */}
      <Stats />

      {/* Features */}
      <Features />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />

    </div>
  );
}