const faqs = [
  {
    q: "Is ABTalks free?",
    a: "Yes. Students can join the challenge completely free.",
  },
  {
    q: "Do I need coding experience?",
    a: "No. Anyone can start and learn one day at a time.",
  },
  {
    q: "Will recruiters see my work?",
    a: "Yes. Your GitHub and LinkedIn become your public portfolio.",
  },
];

export default function FAQ() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-5">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
          >
            <h3 className="font-semibold text-lg">{item.q}</h3>

            <p className="text-zinc-400 mt-3">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}