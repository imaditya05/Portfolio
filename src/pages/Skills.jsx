import React from 'react';
import Sidebar from '../components/Sidebar';

const Skills = () => {
  return (
    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row text-white md:space-x-16 w-full md:items-start  ">
      <Sidebar />
      <div className="flex flex-col space-y-6 w-full items-start">
        <h1 className="text-2xl md:text-4xl text-white font-semibold">
          Skills{' '}
        </h1>
        <div className="flex flex-col space-y-4 ">
          <div className="flex justify-between w-full border-[0.025rem] border-zinc-800 p-6 rounded-md ">
            {/* Project block div  */}
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg md:text-xl text-white font-semibold">
                FrontEnd:
              </h3>
              {/* skills  */}
              <div className="flex gap-3 flex-wrap">
                <span>HTML</span>
                <span>CSS</span>
                <span>Jaavascript</span>
                <span>React</span>
                <span>Redux</span>
                <span>Tailwindcss</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full border-[0.025rem] border-zinc-800 p-6 rounded-md ">
            {/* Project block div  */}
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg md:text-xl text-white font-semibold">
                FrontEnd:
              </h3>
              {/* skills  */}
              <div className="flex gap-3 flex-wrap">
                <span>HTML</span>
                <span>CSS</span>
                <span>Jaavascript</span>
                <span>React</span>
                <span>Redux</span>
                <span>Tailwindcss</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
