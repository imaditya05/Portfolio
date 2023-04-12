import React from 'react';
import Sidebar from '../components/Sidebar';

const Skills = () => {
  return (
    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row text-white md:space-x-16 w-full md:items-start  ">
      <Sidebar />
      <div className="flex flex-col space-y-6 w-full items-start px-2">
        <h1 className="text-2xl md:text-4xl text-white font-semibold">
          Skills{' '}
        </h1>
        <div className="flex flex-col space-y-4 ">
          {/* Skills block div Front End */}
          <div className="flex justify-between w-full border-[0.025rem] border-zinc-800 p-6 rounded-md ">
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg md:text-xl text-white font-semibold">
                Front End:
              </h3>
              {/* skills  */}
              <div className="flex gap-3 flex-wrap">
                <span>HTML</span>
                <span>CSS</span>
                <span>Javascript</span>
                <span>React</span>
                <span>Redux</span>
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>
          {/* Skills block div Back End */}
          <div className="flex justify-between w-full border-[0.025rem] border-zinc-800 p-6 rounded-md ">
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg md:text-xl text-white font-semibold">
                Back End:
              </h3>
              {/* skills  */}
              <div className="flex gap-3 flex-wrap">
                <span>Node.js</span>
                <span>Express</span>
                <span>Socket.io</span>
                <span>Mongoose</span>
              </div>
            </div>
          </div>
          {/* Skills block div Database */}
          <div className="flex justify-between w-full border-[0.025rem] border-zinc-800 p-6 rounded-md ">
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg md:text-xl text-white font-semibold">
                Database:
              </h3>
              {/* skills  */}
              <div className="flex gap-3 flex-wrap">
                <span>MongoDB</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
          {/* Skills block div Front End */}
          <div className="flex justify-between w-full border-[0.025rem] border-zinc-800 p-6 rounded-md ">
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg md:text-xl text-white font-semibold">
                Other:
              </h3>
              {/* skills  */}
              <div className="flex gap-3 flex-wrap">
                <span>Git</span>
                <span>GitHub</span>
                <span>Postman</span>
                <span>Google Cloud Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
