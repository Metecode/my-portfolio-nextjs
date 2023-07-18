import Image from "next/image";
import React from "react";
import crudImg from "../public/assets/projects/havadurumu.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const hamburger = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={crudImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Weather App</h2>
          <h3>React Js </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overbiew</h2>
          <p>A simple weather app with React.</p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://630b5d914e7d963c7bf34e91--jazzy-fox-9d2fd0.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4 ">
            <a
              href="https://github.com/Metecode/havadurumu-react"
              target="_blank"
              rel="noreferrer"
            >
              code
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Css3
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default hamburger;
