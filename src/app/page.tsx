import Image from "next/image";

const revealCheck = [
  { id: 1, format: "jpg", isRevealed: true },
  { id: 2, format: "png", isRevealed: false },
  { id: 3, format: "png", isRevealed: true },
  { id: 4, format: "png", isRevealed: false },
  { id: 5, format: "png", isRevealed: true },
  { id: 6, format: "png", isRevealed: true },
];

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="mb-4 md:text-3xl font-bold">
        🌸🌸🌸 세실리에 반센 X 아식스💕 🌸🌸🌸
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
