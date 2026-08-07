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

    <div className="grid grid-cols-3 gap-4 mt-6">

      {stats.map((item, index) => (

        <div
          key={index}
          className="bg-zinc-900 rounded-2xl p-4 text-center border border-zinc-800"
        >

          <p className="text-zinc-400 text-sm">
            {item.title}
          </p>

          <h3 className="text-xl font-bold mt-2">
            {item.value}
          </h3>

        </div>

      ))}

    </div>

  );
}