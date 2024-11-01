import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:max-w-7xl md:mx-auto md:py-6">
      <div className="md:flex  md:justify-between md:items-center md:gap-4 relative">
        <div className=" ">
          <p className="absolute right-3 md:hidden ">
            {isOpen ? (
              <>
                <AiOutlineClose
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8"
                />
              </>
            ) : (
              <>
                <FiMenu onClick={() => setIsOpen(true)} className="w-8 h-8" />
              </>
            )}
          </p>
          <Link to="/" className="text-4xl font-bold">
            CareerHub
          </Link>
        </div>

        <ul
          className={`md:flex md:items-center gap-12 text-xl font-semibold transition-all duration-700 ${
            isOpen ? "top-0" : "-top-20 hidden md:flex"
          } `}
        >
          <li>
            <NavLink className="text-gray-600">Statistics</NavLink>
          </li>
          <li>
            <NavLink to={"/applied-jobs"} className="text-gray-600">
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink className="text-gray-600">Blog</NavLink>
          </li>
        </ul>
        <button className="px-4 py-3 bg-gradient-to-r from-[#808efe] via-[#8b81ff] to-[#9577ff] text-white rounded-full text-xl font-semibold hidden md:block">
          Start Applying
        </button>
      </div>
    </div>
  );
};

export default Header;
