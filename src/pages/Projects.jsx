import React from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import { ArrowUpRight, GithubFill } from 'akar-icons';

const Projects = () => {
  return (
    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row text-white md:space-x-16 md:items-start  ">
      <Sidebar />
      <div className="flex flex-col space-y-6 w-full items-start">
        <h1 className="text-2xl md:text-4xl text-white font-semibold">
          Projects{' '}
        </h1>
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex justify-between w-full border-[0.025rem] border-zinc-800 p-6 rounded-md ">
            {/* Project block div  */}
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg md:text-xl text-white font-semibold">
                Project 1
              </h3>
              <p className="text-xs md:text-sm">
                Project 1 . As a passionate web developer, I specialize in
                developing robust and scalable web applications that prioritize
                clean UI design to enhance the user experience.
              </p>

              <div className="flex space-x-2">
                <Link
                  className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800 "
                  to="https://github.com/imaditya05"
                  target="_blank"
                >
                  {' '}
                  <GithubFill strokeWidth={2} size={16} />
                  <p className="text-sm md:text-md">Github </p>
                </Link>

                <Link
                  className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800 "
                  to="https://github.com/imaditya05"
                  target="_blank"
                >
                  <span>Live</span>
                  <ArrowUpRight strokeWidth={2} size={12} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full border-[0.025rem] border-zinc-800 p-6 rounded-md ">
            {/* Project block div  */}
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg md:text-xl text-white font-semibold">
                Project 1
              </h3>
              <p className="text-xs md:text-sm">
                Project 1 . As a passionate web developer, I specialize in
                developing robust and scalable web applications that prioritize
                clean UI design to enhance the user experience.
              </p>

              <div className="flex space-x-2">
                <Link
                  className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800 "
                  to="https://github.com/imaditya05"
                  target="_blank"
                >
                  {' '}
                  <GithubFill strokeWidth={2} size={16} />
                  <p className="text-sm md:text-md">Github </p>
                </Link>

                <Link
                  className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800 "
                  to="https://github.com/imaditya05"
                  target="_blank"
                >
                  <span>Live</span>
                  <ArrowUpRight strokeWidth={2} size={12} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full border-[0.025rem] border-zinc-800 p-6 rounded-md ">
            {/* Project block div  */}
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg md:text-xl text-white font-semibold">
                Project 1
              </h3>
              <p className="text-xs md:text-sm">
                Project 1 . As a passionate web developer, I specialize in
                developing robust and scalable web applications that prioritize
                clean UI design to enhance the user experience.
              </p>

              <div className="flex space-x-2">
                <Link
                  className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800 "
                  to="https://github.com/imaditya05"
                  target="_blank"
                >
                  {' '}
                  <GithubFill strokeWidth={2} size={16} />
                  <p className="text-sm md:text-md">Github </p>
                </Link>

                <Link
                  className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800 "
                  to="https://github.com/imaditya05"
                  target="_blank"
                >
                  <span>Live</span>
                  <ArrowUpRight strokeWidth={2} size={12} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full border-[0.025rem] border-zinc-800 p-6 rounded-md ">
            {/* Project block div  */}
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg md:text-xl text-white font-semibold">
                Project 1
              </h3>
              <p className="text-xs md:text-sm">
                Project 1 . As a passionate web developer, I specialize in
                developing robust and scalable web applications that prioritize
                clean UI design to enhance the user experience.
              </p>

              <div className="flex space-x-2">
                <Link
                  className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800 "
                  to="https://github.com/imaditya05"
                  target="_blank"
                >
                  {' '}
                  <GithubFill strokeWidth={2} size={16} />
                  <p className="text-sm md:text-md">Github </p>
                </Link>

                <Link
                  className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800 "
                  to="https://github.com/imaditya05"
                  target="_blank"
                >
                  <span>Live</span>
                  <ArrowUpRight strokeWidth={2} size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
