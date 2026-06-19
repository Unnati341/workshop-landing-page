const WorkshopDetails = () => {
  const details = [
    { title: "Age Group", value: "8–14 Years" },
    { title: "Duration", value: "4 Weeks" },
    { title: "Mode", value: "Online" },
    { title: "Fee", value: "₹2,999" },
    { title: "Start Date", value: "15 July 2026" },
  ];

  return (
    <section id="details" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Workshop Details
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-6">
        {details.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition"
          >
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="mt-3 text-gray-600">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkshopDetails;