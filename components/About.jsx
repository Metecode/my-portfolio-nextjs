import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hello! I&apos;m Mete. I was born in Aydın, Turkey in June 2001.
            Currently, I&apos;m a 2. grade Computer Engineering at Sakarya
            University. I enjoy researching, learning, thinking, and being
            interested in technology. My main domain is front end, however, I am
            interested in backend also.
          </p>
          <p className="py-2 text-gray-600">
            Collaboration and continuous learning are essential to me. I enjoy
            working with teams, exchanging ideas, and staying up-to-date with
            the latest industry trends. I am dedicated to delivering
            high-quality code and optimizing performance to create efficient and
            engaging digital products. I would love the opportunity to
            contribute my skills and creativity to your projects. Let&apos;s work
            together to bring your digital experiences to life!
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
