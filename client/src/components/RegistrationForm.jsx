import { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // Validation
  if (!formData.name.trim()) {
    return setMessage("Name is required");
  }

  if (!formData.email.includes("@")) {
    return setMessage("Enter a valid email");
  }

  if (!/^\d{10}$/.test(formData.phone)) {
  return setMessage("Phone number must be exactly 10 digits");
}
  try {
    setLoading(true);
    setMessage("");

    const response = await axios.post(
  "http://localhost:5000/api/enquiry",
  formData
);

setMessage(response.data.message);

setTimeout(() => {
  setMessage("");
}, 3000);

setFormData({
  name: "",
  email: "",
  phone: "",
});

  } catch (error) {
    setMessage(
      error.response?.data?.message || "Something went wrong"
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="register" className="bg-gray-100 py-20">
       {message && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
            {message}
          </div>
        )}
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Register Now
        </h2>

       

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter Name"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter Email"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            placeholder="Enter Phone Number"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;