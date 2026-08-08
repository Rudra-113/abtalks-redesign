export default function StatsCards() {
  const stats = [
    {
      title: "🔥 Streak",
      value: "12 Days",
    },
    {
      title: "⭐ XP",
      value: "650",
    },
    {
      title: "🏆 Rank",
      value: "#152",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-zinc-900 rounded-3xl p-4 sm:p-5 border border-zinc-800 hover:border-indigo-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
        >
          <p className="text-zinc-400 text-xs sm:text-sm">
            {item.title}
          </p>

          <h3 className="text-xl sm:text-2xl font-bold mt-2 sm:mt-3">
            {item.value}
          </h3>
        </div>
      ))}
    </div>
  );
}