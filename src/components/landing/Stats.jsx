export default function Stats() {
  const stats = [
    {
      number: "12K+",
      label: "Students Joined",
    },
    {
      number: "60",
      label: "Challenge Days",
    },
    {
      number: "25K+",
      label: "GitHub Commits",
    },
    {
      number: "4.9★",
      label: "Student Rating",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:border-indigo-500 transition duration-300"
          >
            <h2 className="text-4xl font-bold text-indigo-500">
              {item.number}
            </h2>

            <p className="text-zinc-400 mt-3">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}