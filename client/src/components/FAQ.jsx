import { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "Do I need prior coding experience?",
      answer:
        "No. This workshop is designed for beginners aged 8–14 years.",
    },
    {
      question: "Will classes be live?",
      answer:
        "Yes. All sessions will be conducted live online by expert instructors.",
    },
    {
      question: "Will I get a certificate?",
      answer:
        "Yes. Participants will receive a certificate after successful completion.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg mb-4 overflow-hidden shadow-sm"
          >
            <button
              className="w-full text-left p-4 font-semibold flex justify-between"
              onClick={() =>
                setOpen(open === index ? null : index)
              }
            >
              {faq.question}
              <span>{open === index ? "-" : "+"}</span>
            </button>

            {open === index && (
              <div className="p-4 bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;