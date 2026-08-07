import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-24">

      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div>

            <h2 className="text-3xl font-bold">
              ABTalks
            </h2>

            <p className="text-zinc-400 mt-4 max-w-sm">
              Build consistency, strengthen your GitHub profile,
              and showcase your learning journey to recruiters.
            </p>

          </div>

          <div>

            <h3 className="font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-zinc-400">

              <li>Home</li>
              <li>Dashboard</li>
              <li>Challenge</li>
              <li>Contact</li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">

              <FaGithub className="hover:text-indigo-500 cursor-pointer transition" />
              <FaLinkedin className="hover:text-indigo-500 cursor-pointer transition" />
              <FaTwitter className="hover:text-indigo-500 cursor-pointer transition" />

            </div>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-12 pt-6 text-center text-zinc-500">

          © 2026 ABTalks • Built with React & Tailwind CSS

        </div>

      </div>

    </footer>
  );
}