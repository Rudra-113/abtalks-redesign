import { FaFire, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaFire className="text-5xl text-orange-500" />,
      title: "Daily Coding",
      desc: "Complete one practical coding challenge every day and develop an unbreakable coding habit.",
    },
    {
      icon: <FaGithub className="text-5xl text-white" />,
      title: "GitHub Portfolio",
      desc: "Build a strong GitHub profile with daily commits and impressive open-source contributions.",
    },
    {
      icon: <FaLinkedin className="text-5xl text-blue-500" />,
      title: "LinkedIn Growth",
      desc: "Share your daily progress, increase visibility, and attract recruiters with consistent posts.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      <div className="text-center mb-16">

        <p className="text-indigo-400 font-semibold uppercase tracking-widest">
          Why Students Love ABTalks
        </p>

        <h2 className="text-5xl font-extrabold mt-4">
          Build Skills That
          <span className="text-indigo-500"> Get You Hired</span>
        </h2>

        <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
          More than just coding challenges. Build your portfolio,
          improve consistency, and become visible to recruiters.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-3">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-indigo-500 hover:-translate-y-2 transition-all duration-300"
          >

            <div className="w-20 h-20 rounded-2xl bg-zinc-800 flex items-center justify-center">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mt-8">
              {item.title}
            </h3>

            <p className="text-zinc-400 mt-4 leading-7">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}