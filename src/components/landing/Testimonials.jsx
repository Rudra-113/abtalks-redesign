export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Frontend Developer",
      review:
        "ABTalks helped me stay consistent. My GitHub profile became much stronger in just 60 days.",
    },
    {
      name: "Priya Singh",
      role: "B.Tech Student",
      review:
        "The daily challenges kept me motivated. I even got shortlisted for internships.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <h2 className="text-4xl font-bold text-center mb-12">
        What Students Say
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
          >
            <p className="text-zinc-300 italic">
              "{item.review}"
            </p>

            <div className="mt-6">
              <h3 className="font-bold text-xl">
                {item.name}
              </h3>

              <p className="text-zinc-500">
                {item.role}
              </p>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}