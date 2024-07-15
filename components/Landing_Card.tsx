import { Libre_Bodoni } from "next/font/google";
import React from "react";
const bodoni = Libre_Bodoni({ subsets: ["latin"] });

export const Landing_Card = () => {
  return (
    <div className="mt-2 flex justify-center">
      <div className="flex justify-center w-[98%] h-[28vh] md:h-[81.5vh] md:w-[80%] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 rounded-xl">
        <div
          className="bg-cover bg-center w-[100%] h-[27vh] md:h-[80vh] rounded-xl"
          style={{ backgroundImage: `url(/cardbg.png)` }} />
      </div>
    </div>
  );
};

{/* <style>{`
      @property --rotate {
        syntax: "<angle>";
        initial-value: 132deg;
        inherits: false;
      }
      
      :root {
        --card-height: 80vh;
        --card-width: 80%;
      }
      
      @media (max-width: 768px) {
        :root {
          --card-height: 27vh;
          --card-width: 90%;
        }
      }
      
      .card {
        width: var(--card-width);
        height: var(--card-height);
        padding: 3px;
        position: relative;
        border-radius: 6px;
        justify-content: center;
        align-items: center;
        text-align: center;
        display: flex;
        font-size: 1.5em;
        color: rgb(88 199 250 / 0%);
        cursor: pointer;
        font-family: cursive;
      }
      
      
.card::before {
  content: "";
  width: 101.5%;
  height: 102%;
  border-radius: 8px;
  background-image: linear-gradient(
    var(--rotate)
    , #5ddcff, #3c67e3 43%, #4e00c2);
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -0.7%;
    animation: spin 2.5s linear infinite;
}
      
      .card::after {
        content: "";
        top: calc(var(--card-height) / 4);
        left: 0;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        transform: scale(0.9);
        filter: blur(calc(var(--card-height) / 3));
        background-image: linear-gradient(
          var(--rotate)
          , #EC407A, #7C3FE5 43%, #975FE5);
          opacity: 1;
        transition: opacity .5s;
        animation: spin 2.5s linear infinite;
      }
      
      @keyframes spin {
        0% {
          --rotate: 0deg;
        }
        100% {
          --rotate: 360deg;
        }
      }
      `}</style> */}