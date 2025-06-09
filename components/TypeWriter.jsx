import React, { useEffect, useState } from "react";

const Typewriter = ({ text, speed = 100 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <h1 className="py-2 text-gray-700 text-2xl">
      {text.slice(0, index)}
      <span className="inline-block font-bold animate-blink ml-1">|</span>
    </h1>
  );
};

export default Typewriter;
