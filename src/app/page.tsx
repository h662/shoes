"use client";

import Image from "next/image";
import JSConfetti from "js-confetti";
import { useState, useEffect } from "react";

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
  const [jsConfetti, setJsConfetti] = useState<JSConfetti>();

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

    setToggle(false);
  };

  const onEnterButton = () => {
    setToggle(true);
  };
  const onLeaveButton = () => {
    setToggle(false);
  };

  useEffect(() => {
    setJsConfetti(new JSConfetti());
  }, []);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="mb-4 md:text-3xl font-bold">
        🌸🌸🌸 세실리에 반센 X 아식스💕 🌸🌸🌸
      </div>
      <div>
        <button
          className={`border-4 px-4 py-2 mb-4 rounded-2xl font-bold text-2xl ${
            toggle
              ? "text-pink-200 bg-gray-100 border-pink-200"
              : "border-pink-500 text-pink-500 bg-pink-100"
          }`}
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
