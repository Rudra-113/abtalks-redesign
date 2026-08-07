import { FaFire, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaFire className="text-orange-500 text-4xl" />,
      title: "Daily Coding",
      desc: "Complete coding tasks every day and build consistency.",
    },
    {
      icon: <FaGithub className="text-white text-4xl" />,
      title: "GitHub Streak",
      desc: "Maintain your GitHub contribution streak and portfolio.",
    },
    {
      icon: <FaLinkedin className="text-blue-500 text-4xl" />,
      title: "LinkedIn Growth",
      desc: "Share your learning journey and attract recruiters.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose ABTalks?
      </h2>

      <div className="grid gap-8 md:grid-cols-3">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-indigo-500 transition"
          >
            {item.icon}

            <h3 className="text-2xl font-semibold mt-6">
              {item.title}
            </h3>

            <p className="text-zinc-400 mt-4">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}