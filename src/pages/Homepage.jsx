import React from 'react';
import Sidebar from '../components/Sidebar';
import { ArrowUpRight } from 'akar-icons';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row text-white md:space-x-16 md:items-start ">
      <Sidebar />

      {/* Profile Section */}
      <div className="flex flex-col space-y-4 px-2">
        <h1 className="text-3xl md:text-5xl text-white font-semibold font-Raleway">
          Aditya Gupta{' '}
        </h1>

        {/* Profile Description */}
        <div className="flex space-x-4 w-full items-center">
          <div
            id="img-container"
            className="w-12 h-12 md:w-24 md:h-24 rounded-full "
          >
            <img
              src="/assets/image.jpg"
              alt="Aditya Gupta"
              className="w-full rounded-full "
            ></img>
          </div>
          <p className="text-sm md:text-lg w-full">
            As a passionate web developer, I specialize in developing robust and
            scalable web applications that prioritize clean UI design to enhance
            the user experience.
          </p>
        </div>

        {/* Recent Works Section */}
        <div className="flex flex-col space-y-4 w-full">
          <h2 className="text-lg md:text-xl text-white font-semibold">
            Recent Works
          </h2>

          {/* Recent Work 1 */}
          <Link
            className="flex justify-between items-center w-full border-[0.025rem] border-slate-600 p-4 rounded-md hover:border-slate-400"
            to="https://github.com/imaditya05/dashr"
            target="_blank"
          >
            <div className="flex flex-col space-y-3">
              <h3 className="text-md md:text-lg text-white font-semibold">
                dashr
              </h3>
              <p className="text-xs md:text-sm text-white">
                This React dashboard application presents data with clean tables
                and charts in a sleek, minimalist design.
              </p>
            </div>
            <div className="text-white">
              <ArrowUpRight strokeWidth={2} size={20} />
            </div>
          </Link>

          {/* Recent Work 2 */}
          <Link
            className="flex justify-between items-center w-full border-[0.025rem] border-slate-600 p-4 rounded-md hover:border-slate-400"
            to="https://github.com/imaditya05/Kool-kicks-frontend"
            target="_blank"
          >
            <div className="flex flex-col space-y-3">
              <h3 className="text-md md:text-lg text-white font-semibold">
                Kool Kicks
              </h3>
              <p className="text-xs md:text-sm text-white">
                This React-based shoe e-commerce app offers an easy-to-use
                interface, detailed product info, and secure payment options.
              </p>
            </div>
            <div className="text-white">
              <ArrowUpRight strokeWidth={2} size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
