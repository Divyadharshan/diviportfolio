import { RevealOnScroll } from "../RevealOnScroll";
import { useEffect, useState } from "react";

export const Home = () => {
  const fullText = "Hi,I'm Divyadharshan";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    },240);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-24 md:pt-0"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 sm:px-6 md:px-8 lg:px-12 w-full max-w-2xl mx-auto">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight font-mono break-words">
            {typedText}
            <span className="animate-blink">|</span>
          </h1>

          <p className="text-gray-400 text-base xs:text-lg md:text-xl mb-8 max-w-lg mx-auto">
            I am a passionate full-stack developer proficient in a wide range of programming languages including C, C++, Python, JavaScript, and Java. I have solid experience building web applications using HTML, CSS, JavaScript, React, Node.js, Express.js, and Flask. I manage databases effectively with both MongoDB and MySQL. For deployment, I'm experienced with platforms like Vercel, Render, and Microsoft Azure.
          </p>
          <div className="flex flex-col xs:flex-row justify-center items-center gap-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-2 xs:py-3 px-5 xs:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] text-base xs:text-lg w-full xs:w-auto text-center"
            >
              View Projects
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
