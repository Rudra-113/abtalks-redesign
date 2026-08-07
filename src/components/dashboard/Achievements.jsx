export default function Achievements() {
  const badges = [
    "🏅 Consistency",
    "💻 GitHub Hero",
    "🚀 LinkedIn Creator",
  ];

  return (
    <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 mt-6">

      <h2 className="text-2xl font-bold mb-5">
        Achievements
      </h2>

      <div className="flex flex-wrap gap-3">

        {badges.map((badge, index) => (
          <div
            key={index}
            className="bg-indigo-600 px-4 py-2 rounded-full"
          >
            {badge}
          </div>
        ))}

      </div>

    </div>
  );
}