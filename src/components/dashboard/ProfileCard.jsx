export default function ProfileCard() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all duration-300">

      <div className="flex items-center gap-5">

        {/* Profile Avatar */}
        <div className="w-20 h-20 rounded-full bg-white text-indigo-600 flex items-center justify-center text-3xl font-bold shadow-lg">
          R
        </div>

        {/* Profile Information */}
        <div className="min-w-0">

          <h2 className="text-2xl sm:text-3xl font-bold truncate">
            Rudrapratap
          </h2>

          <p className="text-indigo-100 mt-1">
            B.Tech CSE Student
          </p>

          <p className="mt-2 text-sm text-indigo-100">
            🚀 Day 12 of 60 Challenge
          </p>

        </div>

      </div>

      {/* Profile Stats */}
      <div className="grid grid-cols-3 gap-3 mt-6">

        <div className="bg-white/10 rounded-xl p-3 text-center">
          <p className="text-xl font-bold">12</p>
          <p className="text-xs text-indigo-100 mt-1">
            Day Streak
          </p>
        </div>

        <div className="bg-white/10 rounded-xl p-3 text-center">
          <p className="text-xl font-bold">650</p>
          <p className="text-xs text-indigo-100 mt-1">
            XP Earned
          </p>
        </div>

        <div className="bg-white/10 rounded-xl p-3 text-center">
          <p className="text-xl font-bold">20%</p>
          <p className="text-xs text-indigo-100 mt-1">
            Complete
          </p>
        </div>

      </div>

    </div>
  );
}