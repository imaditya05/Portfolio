import React from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import { ArrowUpRight, GithubFill } from 'akar-icons';

const Projects = () => {
  return (
    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row text-white md:space-x-16 md:items-start  ">
      <Sidebar />
      <div className="flex flex-col space-y-6 w-full items-start px-2  ">
        <h1 className="text-2xl md:text-4xl text-white font-semibold">
          Projects{' '}
        </h1>
        <div className="flex flex-col space-y-4 w-full">
          {/* Project block div  */}
          <div className="flex justify-between w-full border-[0.025rem] border-zinc-800 p-2 md:p-4 rounded-md ">
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg md:text-xl text-white font-semibold">
                Kool Kicks
              </h3>
              <p className="text-xs md:text-sm">
                This React-based shoe e-commerce app offers an easy-to-use
                interface, detailed product info, and secure payment options
              </p>

              <div className="flex space-x-2">
                <Link
                  className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800 "
                  to="https://github.com/imaditya05/Kool-kicks-frontend"
                  target="_blank"
                >
                  {' '}
                  <GithubFill strokeWidth={2} size={14} />
                  <p className="text-xs md:text-sm">Github </p>
                </Link>

                <Link
                  className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800 "
                  to="https://kool-kicks-exclusives.netlify.app/"
                  target="_blank"
                >
                  <span className="text-xs md:text-sm">Live</span>
                  <ArrowUpRight strokeWidth={2} size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Project block div  */}
          <div className="flex justify-between w-full border-[0.025rem] border-zinc-800 p-2 md:p-4 rounded-md ">
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg md:text-xl text-white font-semibold">
                dashr
              </h3>
              <p className="text-xs md:text-sm">
                This React dashboard application presents data with clean tables
                and charts in sleek, minimalist design.
              </p>

              <div className="flex space-x-2">
                <Link
                  className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800 "
                  to="https://github.com/imaditya05/dashr"
                  target="_blank"
                >
                  {' '}
                  <GithubFill strokeWidth={2} size={14} />
                  <p className="text-xs md:text-sm">Github </p>
                </Link>

                <Link
                  className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800 "
                  to="https://dashr.vercel.app/"
                  target="_blank"
                >
                  <span className="text-xs md:text-sm">Live</span>
                  <ArrowUpRight strokeWidth={2} size={14} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full border-[0.025rem] border-zinc-800 p-2 md:p-4 rounded-md ">
            {/* Project block div  */}
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg md:text-xl text-white font-semibold">
                GitHub-Finder
              </h3>
              <p className="text-xs md:text-sm">
                Discover GitHub user stats with ease. Use our GitHub finder app
                to search and find any user's profile and view their important
                stats, all in one place.
              </p>

              <div className="flex space-x-2">
                <Link
                  className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800 "
                  to="https://github.com/imaditya05/github-finder"
                  target="_blank"
                >
                  {' '}
                  <GithubFill strokeWidth={2} size={14} />
                  <p className="text-xs md:text-sm">Github </p>
                </Link>

                <Link
                  className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800 "
                  to="https://github-detective.netlify.app/"
                  target="_blank"
                >
                  <span className="text-xs md:text-sm">Live</span>
                  <ArrowUpRight strokeWidth={2} size={14} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full border-[0.025rem] border-zinc-800 p-2 md:p-4 rounded-md ">
            {/* Project block div  */}
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg md:text-xl text-white font-semibold">
                Sky-Watch
              </h3>
              <p className="text-xs md:text-sm">
                Catch the weather on-the-go with our versatile weather app. Get
                current weather details for your location, or search any city.
              </p>

              <div className="flex space-x-2">
                <Link
                  className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800 "
                  to="https://github.com/imaditya05/sky-watch"
                  target="_blank"
                >
                  {' '}
                  <GithubFill strokeWidth={2} size={14} />
                  <p className="text-xs md:text-sm">Github </p>
                </Link>

                <Link
                  className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800 "
                  to="https://sky-watch-baywatch.netlify.app/"
                  target="_blank"
                >
                  <span className="text-xs md:text-sm">Live</span>
                  <ArrowUpRight strokeWidth={2} size={14} />
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
