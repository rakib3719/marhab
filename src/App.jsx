import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const body = document.body;

  return (
    <div className="App bg-[#0f172a] h-screen w-screen grid place-items-center text-[#94a3b8]">
      <div className="content h-[80%] w-full  grid grid-rows-[48px_auto_48px]">
        <header className="border-[1px] border-l-[0] border-r-[0] px-3 py-2 border-[#334155]">
          <marquee behavior="" direction="">
            React JS
          </marquee>
        </header>
        <main className="flex flex-col justify-self-stretch justify-evenly">
          <div className="mid flex flex-col md:flex-row md:justify-center md:gap-[60px] items-center justify-between gap-5">
            <div className="h-[100px] w-[100px]">
              <img
                src="tailwindcss-mark.svg"
                alt="Tailwind Logo"
                className="h-full w-full 0bject-cover"
              />
            </div>
            <span className="font-bold text-2xl">+</span>
            <div className="h-[100px] w-[100px]">
              <img
                src="React-icon.svg"
                alt="Vite Logo"
                className="h-full w-full 0bject-cover animate-[spin_15s_infinite]"
              />
            </div>
          </div>
          <h1 className="text-[#cbd5e1] text-2xl font-bold text-center">Get hacking!</h1>
        </main>
        <footer className="border-[1px] border-l-[0] border-r-[0] px-3 py-2 border-[#334155]">
          <marquee behavior="" direction="">
            Tailwind CSS
          </marquee>
        </footer>
        <small className="fixed bottom-5">by <a href="">devCharlie</a></small>
      </div>
    </div>
  );
}

export default App;
