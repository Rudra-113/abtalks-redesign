export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-lg">
            A
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              ABTalks
            </h1>

            <p className="text-xs text-zinc-400">
              60-Day Coding Challenge
            </p>
          </div>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-500 transition px-5 py-2 rounded-xl font-medium">
          Join Now
        </button>

      </div>
    </nav>
  );
}