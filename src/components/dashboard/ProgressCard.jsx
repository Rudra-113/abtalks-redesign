export default function ProgressCard() {
  return (
    <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 mt-6">

      <h2 className="text-2xl font-bold">
        📈 Progress
      </h2>

      <div className="w-full h-4 bg-zinc-700 rounded-full mt-5">

        <div className="bg-indigo-500 h-4 rounded-full w-1/5"></div>

      </div>

      <div className="mt-5 flex justify-between text-zinc-400">

        <span>Day 12 / 60</span>

        <span>20%</span>

      </div>

      <p className="mt-4 text-indigo-400">
        🔥 48 Days Remaining
      </p>

    </div>
  );
}