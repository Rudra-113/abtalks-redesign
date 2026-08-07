export default function ProfileCard() {
  return (
    <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">

      <div className="flex items-center gap-4">

        <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-2xl font-bold">
          R
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Rudra
          </h2>

          <p className="text-zinc-400">
            CSE Student • Day 12 / 60
          </p>
        </div>

      </div>

    </div>
  );
}