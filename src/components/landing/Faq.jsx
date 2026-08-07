export default function FAQ() {
  const faqs = [
    {
      question: "Is ABTalks free to join?",
      answer:
        "Yes! The 60-Day Coding Challenge is completely free for students who want to improve their coding skills.",
    },
    {
      question: "Do I need prior coding experience?",
      answer:
        "No. The challenge is beginner-friendly and designed to help students learn consistently, one day at a time.",
    },
    {
      question: "Will this help me get internships?",
      answer:
        "Yes. By building projects, maintaining GitHub commits, and sharing your progress on LinkedIn, you create a strong portfolio that recruiters can see.",
    },
    {
      question: "How much time should I spend daily?",
      answer:
        "Most daily challenges take between 1–2 hours depending on your experience level.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      <div className="text-center mb-16">

        <p className="text-indigo-400 font-semibold uppercase tracking-widest">
          Frequently Asked Questions
        </p>

        <h2 className="text-5xl font-extrabold mt-4">
          Got Questions?
        </h2>

        <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
          Everything you need to know before starting your coding journey.
        </p>

      </div>

      <div className="space-y-6">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-indigo-500 transition"
          >
            <h3 className="text-xl font-semibold">
              {faq.question}
            </h3>

            <p className="text-zinc-400 mt-3 leading-7">
              {faq.answer}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}