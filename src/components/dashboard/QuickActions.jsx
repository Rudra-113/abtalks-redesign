export default function QuickActions() {
  return (
    <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 mt-6">

      <h2 className="text-2xl font-bold mb-5">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <button className="bg-zinc-800 p-4 rounded-xl hover:bg-indigo-600 transition">
          📂 GitHub
        </button>

        <button className="bg-zinc-800 p-4 rounded-xl hover:bg-indigo-600 transition">
          💼 LinkedIn
        </button>

        <button className="bg-zinc-800 p-4 rounded-xl hover:bg-indigo-600 transition">
          📅 Calendar
        </button>

        <button className="bg-zinc-800 p-4 rounded-xl hover:bg-indigo-600 transition">
          ⚙ Settings
        </button>

      </div>

    </div>
  );
}