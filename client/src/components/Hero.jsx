const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-5xl font-bold mb-6">
          AI & Robotics Summer Workshop
        </h1>

        <p className="text-xl max-w-3xl mx-auto mb-8">
          Learn Artificial Intelligence and Robotics through hands-on
          projects, coding challenges, and interactive sessions.
        </p><br></br>

        <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default Hero;