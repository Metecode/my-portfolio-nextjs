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
            Hello! I&apos;m Mete Uçar. I was born in Aydın, Turkey in June 2001. I
            recently graduated from Sakarya University with a Bachelor's degree
            in Computer Engineering. Currently, I&apos;m working as a Frontend
            Developer at 32Bit, where I build responsive and user-friendly web
            interfaces. While my main focus is on frontend technologies, I&apos;ve
            also been developing my backend skills — particularly using Java and
            Spring Boot to build scalable and efficient RESTful APIs.
          </p>
          <p className="py-2 text-gray-600">
            I am passionate about clean code, modern UI/UX design, and
            continuous learning. Working in a real-world development environment
            at 32Bit has taught me the importance of team collaboration,
            performance optimization, and delivering real business value through
            technology. In my free time, I actively work on personal projects
            and explore full-stack development to strengthen my overall
            engineering skills. I would love the opportunity to contribute my
            experience and energy to meaningful digital products. Let&apos;s work
            together to build something great!
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
