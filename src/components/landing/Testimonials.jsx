export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Frontend Developer",
      review:
        "ABTalks helped me stay consistent for 60 days. My GitHub profile became much stronger and I gained confidence.",
    },
    {
      name: "Priya Singh",
      role: "B.Tech Student",
      review:
        "The daily coding challenges kept me motivated. I even got shortlisted for internships after improving my portfolio.",
    },
    {
      name: "Aman Verma",
      role: "Software Engineer",
      review:
        "The structured roadmap and daily tasks made learning React and DSA much easier than studying alone.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      <div className="text-center mb-16">
        <p className="text-indigo-400 font-semibold uppercase tracking-widest">
          Success Stories
        </p>

        <h2 className="text-5xl font-extrabold mt-4">
          What Students Say
        </h2>

        <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
          Thousands of students are building coding habits, improving
          their GitHub profiles, and getting closer to their dream jobs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-indigo-500 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-yellow-400 text-xl">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-zinc-300 mt-6 leading-7 italic">
              "{review.review}"
            </p>

            <div className="mt-8 border-t border-zinc-800 pt-6">
              <h3 className="font-bold text-lg">
                {review.name}
              </h3>

              <p className="text-zinc-400 text-sm">
                {review.role}
              </p>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}