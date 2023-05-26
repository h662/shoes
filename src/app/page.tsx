"use client";

import Image from "next/image";
import JSConfetti from "js-confetti";
import { useState } from "react";

const jsConfetti = new JSConfetti();

const revealCheck = [
  { id: 1, format: "jpg", isRevealed: true },
  { id: 2, format: "png", isRevealed: true },
  { id: 3, format: "png", isRevealed: true },
  { id: 4, format: "png", isRevealed: true },
  { id: 5, format: "png", isRevealed: true },
  { id: 6, format: "png", isRevealed: true },
];

const Home = () => {
  const [toggle, setToggle] = useState(false);

  const onClickButton = () => {
    jsConfetti?.addConfetti({
      confettiColors: [
        "#ff0a54",
        "#ff477e",
        "#ff7096",
        "#ff85a1",
        "#fbb1bd",
        "#f9bec7",
      ],
      confettiRadius: 5,
      confettiNumber: 500,
    });
  };

  const onEnterButton = () => {
    setToggle(true);
  };
  const onLeaveButton = () => {
    setToggle(false);
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="mb-4 md:text-3xl font-bold">
        🌸🌸🌸 세실리에 반센 X 아식스💕 🌸🌸🌸
      </div>
      <div>
        <button
          className="border-4 border-pink-500 px-4 py-2 mb-4 rounded-2xl text-pink-500 font-bold text-2xl bg-pink-100 hover:border-pink-200 hover:text-pink-200 hover:bg-gray-100"
          onClick={onClickButton}
          onMouseEnter={onEnterButton}
          onMouseLeave={onLeaveButton}
        >
          축 하 합 니 다{" "}
          <span className={`${toggle && "opacity-20"}`}>🎉 🎉</span>
        </button>
      </div>
      <div className="grid grid-cols-2">
        {revealCheck.map((v, i) => {
          return (
            <>
              <Image
                src={`/images/${v.isRevealed ? "revealed" : "not-revealed"}/${
                  v.id
                }.${v.format}`}
                alt={v.id.toString()}
                width={270}
                height={225}
              />
            </>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
