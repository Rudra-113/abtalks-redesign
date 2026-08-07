export default function ProfileCard() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-6 shadow-xl">

      <div className="flex items-center gap-5">

        <div className="w-20 h-20 rounded-full bg-white text-indigo-600 flex items-center justify-center text-3xl font-bold">
          R
        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Rudrapratap
          </h2>

          <p className="text-indigo-100">
            B.Tech CSE Student
          </p>

          <p className="mt-2 text-sm">
            🚀 Day 12 of 60 Challenge
          </p>

        </div>

      </div>

    </div>
  );
}
