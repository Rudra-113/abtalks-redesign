export default function Leaderboard() {
  const users = [
    "🥇 Rahul",
    "🥈 Aman",
    "🥉 Rudra",
  ];

  return (
    <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 mt-6">
      <h2 className="text-2xl font-bold mb-5">
        Leaderboard
      </h2>

      {users.map((user, index) => (
        <div
          key={index}
          className={`flex justify-between py-3 px-3 ${
            index === 2
              ? "bg-indigo-600 rounded-xl"
              : "border-b border-zinc-800"
          }`}
        >
          <span>{user}</span>
          <span>XP {700 - index * 40}</span>
        </div>
      ))}
    </div>
  );
}