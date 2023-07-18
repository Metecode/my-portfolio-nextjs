import Image from "next/image";
import React from "react";
import crudImg from "../public/assets/projects/crud.png";
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
          <h2 className="py-2">CRUD-Redux-Toolkit</h2>
          <h3>React Js / Redux </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overbiew</h2>
          <p>
            This is a minimal project I created during my learning phase of
            Redux. It&apos;s a CRUD application, which performs Create, Read, Update,
            and Delete operations.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://crud-redux-toolkit-five.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4 ">
            <a
              href="https://github.com/Metecode/CRUD-Redux-Toolkit"
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
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux
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
