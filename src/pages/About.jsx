import React from 'react';
import Sidebar from '../components/Sidebar';
import {
  ArrowUpRight,
  GithubFill,
  LinkedinFill,
  TwitterFill,
} from 'akar-icons';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row text-white md:space-x-16 md:items-start ">
      <Sidebar />
      <div className="flex flex-col space-y-6 w-full items-start">
        <h1 className="text-2xl md:text-4xl text-white font-semibold">
          About Me{' '}
        </h1>
        <div className="w-full px-3 md:w-2/3 flex flex-col space-y-3 flex-wrap">
          <p className="w-full text-xs md:text-sm">
            I am a passionate Full Stack Web Developer proficient in the MERN
            stack. My love for programming and technology has driven me to learn
            and grow as a developer every day. My expertise lies in building
            high-quality, scalable, and robust web applications using modern
            technologies like React, NodeJS, ExpressJS, and MongoDB.
          </p>
          <p className="w-full text-xs md:text-sm">
            I am dedicated to delivering outstanding results and ensuring that
            the products I develop meet the highest standards of quality. One of
            the things that set me apart as a developer is my commitment to
            self-improvement. I challenge myself to learn new skills and
            technologies regularly, staying up-to-date with the latest
            developments in the industry.
          </p>{' '}
          <p className="w-full text-xs md:text-sm">
            {' '}
            I believe that my passion for learning and my willingness to take on
            new challenges are key factors in my success as a developer. I am
            always excited to collaborate with like-minded individuals and teams
            to create innovative and impactful projects. If you are interested
            in working with me or want to learn more about my experience, please
            feel free to reach out. Let's create something amazing together!
          </p>
        </div>

        <div className="flex space-x-2 md:space-x-6">
          <Link
            className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800 "
            to="https://github.com/imaditya05"
            target="_blank"
          >
            {' '}
            <GithubFill strokeWidth={2} size={16} />
            <p className="text-sm md:text-md">Github </p>
            <ArrowUpRight strokeWidth={2} size={12} />
          </Link>
          <Link
            className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800 "
            to="https://twitter.com/imaditya_gupta"
            target="_blank"
          >
            {' '}
            <TwitterFill strokeWidth={2} size={16} />
            <p className="text-sm md:text-md">Twitter </p>
            <ArrowUpRight strokeWidth={2} size={12} />
          </Link>
          <Link
            className="flex space-x-2 md:space-x-4 items-center border-[0.025rem] rounded-md border-slate-700 px-3 py-2 hover:bg-zinc-800"
            to="https://www.linkedin.com/in/aditya-gupta05/"
            target="_blank"
          >
            {' '}
            <LinkedinFill strokeWidth={2} size={16} />
            <p className="text-sm md:text-md">Linkedin </p>
            <ArrowUpRight strokeWidth={2} size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
