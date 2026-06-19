const LearningOutcomes = () => {
  const outcomes = [
    "Introduction to Artificial Intelligence",
    "Robotics Fundamentals",
    "Basic Coding Skills",
    "Problem Solving Techniques",
    "Build Real World Mini Projects",
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Learning Outcomes
      </h2>

      <div className="max-w-3xl mx-auto">
        {outcomes.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow mb-4"
          >
            ✓ {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningOutcomes;