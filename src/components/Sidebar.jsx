import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-row space-x-4 md:space-x-0 md:px-0 md:flex-col md:space-y-4 md:pt-16 ">
      <NavLink
        className="text-lg md:text-xl text-gray-400 hover:text-white "
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="text-lg md:text-xl text-gray-400 hover:text-white"
        to="/about"
      >
        About{' '}
      </NavLink>
      <NavLink
        className="text-lg md:text-xl text-gray-400 hover:text-white"
        to="/projects"
      >
        Project
      </NavLink>
      <NavLink
        className="text-lg md:text-xl text-gray-400 hover:text-white "
        to="/skills"
      >
        Skills{' '}
      </NavLink>
      <Link
        className="text-lg md:text-xl text-gray-400 hover:text-white "
        to="https://drive.google.com/file/d/1ATiulvFnMW9S2q1ZaSHZZ0PLEaxzHr6X/view?usp=sharing"
        target="_blank"
      >
        Resume{' '}
      </Link>
    </div>
  );
};

export default Sidebar;
