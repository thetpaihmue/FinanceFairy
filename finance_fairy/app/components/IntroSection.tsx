import React from "react";
import "@/app/styles/introSection.css";
import fairy from "@/app/images/fairy.png";
import "../../../finance_fairy/node_modules/animate.css/animate.min.css";
import AddRecord from "./AddRecord";
import Image from "next/image";

const IntroSection = () => {
  return (
    <>
      <div className="section oddSection grid">
        <div className="grid grid-cols-12 items-center relative">
          <div className="grid col-span-7 justify-items-center typewriter">
            <div className="inline typewriter">
              <p className="typewriter text-lg grid justify-around font-mono">
                Let Finance Fairy wave its wand and make finances fun for
                everyone!
              </p>
            </div>
            <div className="m-3">
              <a
                href=""
                className="font-mono inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-pink-400 border-pink-400 hover:bg-white hover:text-pink-400 mt-4 lg:mt-0"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="col-span-5">
            <Image
              src={fairy.src}
              alt="fairy"
              width={200}
              height={200}
              className="animate__animated animate__pulse animate__infinite infinite w-4/5 p-10"
            />
          </div>
        </div>
      </div>
      <div className="section evenSection" id="list">
        <AddRecord />
      </div>
      <div className="section oddSection" id="categories">
        Categories haha
      </div>
    </>
  );
};

export default IntroSection;
