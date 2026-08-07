export default function LearningTimeline() {
  const timeline = [
    { day: "Day 10", task: "JavaScript ES6", status: "Completed ✅" },
    { day: "Day 11", task: "React Components", status: "Completed ✅" },
    { day: "Day 12", task: "Weather App", status: "In Progress 🚀" },
  ];

  return (
    <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 mt-6">
      <h2 className="text-2xl font-bold mb-6">
        📚 Learning Timeline
      </h2>

      <div className="space-y-4">
        {timeline.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b border-zinc-800 pb-3"
          >
            <div>
              <p className="font-semibold">{item.day}</p>
              <p className="text-zinc-400 text-sm">{item.task}</p>
            </div>

            <span className="text-indigo-400">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}