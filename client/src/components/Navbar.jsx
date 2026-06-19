const Navbar = () => {
  return (
    <nav className="w-screen bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center h-16 px-8">
        <h1 className="text-2xl font-bold text-blue-600">
          Kidrove
        </h1>

        <div className="hidden md:flex gap-10 ml-auto mr-8 ">
          <a href="#" className="text-blue-600 font-medium">
            Home
          </a>
          <a href="#details" className="text-gray-600 hover:text-blue-600">
            Workshop
          </a>
          <a href="#faq" className="text-gray-600 hover:text-blue-600">
            FAQ
          </a>
          <a href="#register" className="text-gray-600 hover:text-blue-600">
            Register
          </a>
        </div>

        <a
          href="#register"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Enroll Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
