import Navbar from "../components/layout/Navbar";
import Features from "../components/landing/Features";
import Stats from "../components/landing/Stats";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/Faq";
import Footer from "../components/layout/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <Navbar />

      <section className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center px-6 pt-20 pb-24">

        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          Build Your
          <span className="text-indigo-500"> Coding Habit</span>
          <br />
          in 60 Days
        </h1>

        <p className="text-zinc-400 text-lg mt-8 max-w-xl">
          Complete daily coding challenges, build your GitHub profile,
          maintain your public coding streak, and become visible to recruiters.
        </p>

        <button className="mt-10 bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-2xl text-lg font-semibold transition">
          Start Challenge 🚀
        </button>

      </section>

      <Features />

      <Stats />

      <Testimonials />

      <FAQ />

      <Footer />


    </div>
  );
}
