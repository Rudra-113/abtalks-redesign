export default function ProgressCard() {
  return (
    <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 mt-6">

      <h2 className="text-2xl font-bold">
        Progress
      </h2>

      <div className="w-full h-4 bg-zinc-700 rounded-full mt-5">
        <div className="bg-indigo-500 h-4 rounded-full w-1/4"></div>
      </div>

      <p className="mt-4 text-zinc-400">
        Day 12 of 60 • 20% Completed
      </p>

    </div>
  );
}