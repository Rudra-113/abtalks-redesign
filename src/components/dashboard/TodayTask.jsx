export default function TodayTask() {
  return (
    <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 mt-6">
      <p className="text-zinc-400">Today's Challenge</p>

      <h2 className="text-3xl font-bold mt-3">
        Build Weather App
      </h2>

      <p className="text-zinc-400 mt-2">
        Difficulty: ⭐⭐⭐
      </p>

      <p className="text-zinc-400">
        Estimated Time: 2 Hours
      </p>

      <button className="mt-6 bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl">
        Continue Challenge →
      </button>
    </div>
  );
}