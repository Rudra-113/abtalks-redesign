import { FaGithub, FaLinkedin, FaClock, FaArrowLeft } from "react-icons/fa";

export default function ChallengeDay() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <main className="max-w-3xl mx-auto px-5 py-8">

        {/* Back */}
        <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition mb-8">
          <FaArrowLeft />
          Dashboard
        </button>

        {/* Day Header */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-6 sm:p-8">

          <div className="flex items-center justify-between gap-4">
            <span className="bg-white/15 px-3 py-1 rounded-full text-sm">
              Day 12 / 60
            </span>

            <span className="bg-white/15 px-3 py-1 rounded-full text-sm">
              ⭐ Medium
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold mt-8">
            Build a Weather App
          </h1>

          <p className="text-indigo-100 mt-4 text-lg leading-7">
            Build a responsive weather application that fetches live
            weather data from an API and presents it in a clean interface.
          </p>

          <div className="flex items-center gap-2 mt-6 text-indigo-100">
            <FaClock />
            <span>Estimated time: 2 hours</span>
          </div>

        </div>

        {/* Task */}
        <section className="mt-8 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8">

          <h2 className="text-2xl font-bold">
            🎯 Your Mission
          </h2>

          <p className="text-zinc-400 mt-4 leading-7">
            Create a weather application where users can search for a
            city and view its current weather information.
          </p>

          <h3 className="text-xl font-semibold mt-8">
            What you need to build
          </h3>

          <ul className="mt-4 space-y-3 text-zinc-300">
            <li>✅ Search for a city</li>
            <li>✅ Fetch weather data from an API</li>
            <li>✅ Display temperature and weather condition</li>
            <li>✅ Show loading and error states</li>
            <li>✅ Make the interface responsive</li>
          </ul>

        </section>

        {/* Resources */}
        <section className="mt-6 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8">

          <h2 className="text-2xl font-bold">
            📚 Resources
          </h2>

          <div className="grid gap-3 mt-5">

            <button className="text-left bg-zinc-800 hover:bg-zinc-700 rounded-xl p-4 transition">
              📖 Weather API Documentation
            </button>

            <button className="text-left bg-zinc-800 hover:bg-zinc-700 rounded-xl p-4 transition">
              💻 Fetch API Guide
            </button>

            <button className="text-left bg-zinc-800 hover:bg-zinc-700 rounded-xl p-4 transition">
              🎨 Responsive Design Guide
            </button>

          </div>

        </section>

        {/* Submission */}
        <section className="mt-6 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8">

          <h2 className="text-2xl font-bold">
            🚀 Submit Your Work
          </h2>

          <p className="text-zinc-400 mt-2">
            Submit proof of today's work through GitHub and LinkedIn.
          </p>

          {/* GitHub */}
          <div className="mt-7">

            <label className="flex items-center gap-2 font-semibold mb-3">
              <FaGithub />
              GitHub Repository
            </label>

            <input
              type="url"
              placeholder="https://github.com/username/project"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition"
            />

          </div>

          {/* LinkedIn */}
          <div className="mt-6">

            <label className="flex items-center gap-2 font-semibold mb-3">
              <FaLinkedin className="text-blue-500" />
              LinkedIn Post
            </label>

            <input
              type="url"
              placeholder="https://linkedin.com/posts/..."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition"
            />

          </div>

          <button className="w-full mt-8 bg-indigo-600 hover:bg-indigo-500 py-4 rounded-xl font-semibold text-lg transition">
            Submit Day 12 🚀
          </button>

        </section>

        {/* Bottom */}
        <div className="text-center text-zinc-500 text-sm py-10">
          Day 12 of 60 • Keep building. Keep showing up. 🔥
        </div>

      </main>
    </div>
  );
}