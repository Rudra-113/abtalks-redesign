export default function TodayTask() {
  return (
    <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 mt-6">

      <p className="text-zinc-400">
        📅 Today's Challenge
      </p>

      <h2 className="text-3xl font-bold mt-3">
        Build Weather App
      </h2>

      <div className="mt-5 space-y-2 text-zinc-300">

        <p>⭐ Difficulty : Medium</p>

        <p>⏱ Estimated Time : 2 Hours</p>

      </div>

      <div className="mt-6">

        <h3 className="font-semibold text-lg">
          Objectives
        </h3>

        <ul className="mt-3 space-y-2 text-zinc-400">

          <li>✅ Fetch Weather API</li>

          <li>✅ Display Temperature</li>

          <li>✅ Responsive Design</li>

        </ul>

      </div>

      <button className="mt-8 bg-indigo-600 hover:bg-indigo-500 transition px-6 py-3 rounded-xl font-semibold w-full">
        Continue Challenge →
      </button>

    </div>
  );
}