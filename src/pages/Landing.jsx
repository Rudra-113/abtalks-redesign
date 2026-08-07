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
      <section className="relative overflow-hidden">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-purple-600/20"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">

          <span className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🚀 India's #1 60-Day Coding Challenge
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            Build Your
            <span className="text-indigo-500"> Dream Career</span>
            <br />
            One Commit at a Time.
          </h1>

          <p className="mt-8 text-zinc-400 text-lg max-w-2xl mx-auto">
            Complete one coding challenge every day, maintain your GitHub
            streak, publish your learning on LinkedIn, and become visible to
            recruiters across India.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <button className="bg-indigo-600 hover:bg-indigo-500 transition px-8 py-4 rounded-2xl font-semibold">
              🚀 Start Challenge
            </button>

            <button className="border border-zinc-700 hover:border-indigo-500 transition px-8 py-4 rounded-2xl">
              Learn More
            </button>

          </div>

        </div>

      </section>

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