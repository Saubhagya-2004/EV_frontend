import { Link, useNavigate } from "react-router-dom";
import { getUserByemail } from "../utils/storage";
import { RiFlashlightFill } from "react-icons/ri";

const Navbar = () => {
  const navigate = useNavigate();
  const user = getUserByemail(localStorage.getItem("currentEmail"));

  const handleLogout = () => {
    localStorage.removeItem("currentEmail");
    navigate("/");
  };

  return (
    <nav className="w-full bg-gradient-to-r from-green-200 to-blue-300 text-white px-6 py-3 flex justify-between items-center fixed top-0 left-0 z-50">
      <Link to="/home" className="text-xl font-bold">
        <div className="p-3 bg-green-600 rounded-xl shadow-lg">
          <RiFlashlightFill className="text-white text-2xl" />
        </div>
      </Link>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="hidden sm:block">
              Hi, <b>{user.name}</b>
            </span>
            <Link to="/find-cpo" className="hover:text-green-400 duration-500">
              Find CPO
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/" className="hover:underline">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
