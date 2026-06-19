// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10">
//         <div className="flex items-center justify-between h-16">

//           {/* Logo */}
//           <div>
//             <h1 className="text-2xl font-bold text-blue-600">
//               Kidrove
//             </h1>
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a
//               href="#"
//               className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
//             >
//               Home
//             </a>

//             <a
//               href="#details"
//               className="text-gray-600 hover:text-blue-600 transition duration-300"
//             >
//               Workshop
//             </a>

//             <a
//               href="#faq"
//               className="text-gray-600 hover:text-blue-600 transition duration-300"
//             >
//               FAQ
//             </a>

//             <a
//               href="#register"
//               className="text-gray-600 hover:text-blue-600 transition duration-300"
//             >
//               Register
//             </a>
//           </div>

//           {/* Enroll Button */}
//           <a
//             href="#register"
//             className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg shadow-md hover:scale-105 transition duration-300"
//           >
//             Enroll Now
//           </a>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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