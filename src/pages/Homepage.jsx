import React from 'react';
import Sidebar from '../components/Sidebar';

const Homepage = () => {
  return (
    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row text-white md:space-x-16 md:items-start ">
      <Sidebar />
      <div className="flex flex-col space-y-3">
        <h1 className="text-2xl md:text-4xl text-white font-semibold">
          Aditya Gupta{' '}
        </h1>

        <div className="flex space-x-4 w-full items-center">
          <div
            id="img-container"
            className="w-12 h-12 md:w-20 md:h-20 rounded-full "
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
        <div className="flex flex-col space-y-4 w-full">
          <h2 className="text-xl md:text-2xl text-white font-semibold">
            Recent Works
          </h2>

          <div className="flex justify-between w-full border-[0.025rem] border-slate-600 p-6 rounded-md ">
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg md:text-xl text-white font-semibold">
                Work Heading 1
              </h3>
              <p>
                Recent work 1 . As a passionate web developer, I specialize in
                developing robust and scalable web applications that prioritize
                clean UI design to enhance the user experience.
              </p>

              {/* Font icon div */}
            </div>
          </div>
          <div className="flex justify-between w-full border-[0.025rem] border-slate-600 p-6 rounded-md ">
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg md:text-xl text-white font-semibold">
                Work Heading 2
              </h3>
              <p>
                Recent work 2 . As a passionate web developer, I specialize in
                developing robust and scalable web applications that prioritize
                clean UI design to enhance the user experience.
              </p>

              {/* Font icon div */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
