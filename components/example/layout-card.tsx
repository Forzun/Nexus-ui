import Image from "next/image";
import { useState } from "react";

export default function LayoutCard() {
  const [oepn , setOpen] = useState<Card | null>(null)

  return (
    <div className="py-20 min-h-screen bg-neutral-100 relative">
      
      <div className="max-w-lg mx-auto flex flex-col gap-10">
        {cards.map((card, index) => (
          <div key={index}>
            <button
              onClick={() => setOpen(card)}
            className="p-1 border border-neutral-500/20 bg-neutral-100 rounded-xl cursor-pointer flex justify-between">
              <div className="flex gap-10 items-center rounded-lg p-2">
                <Image
                  className="rounded-lg"
                  src={card.src}
                  alt={card.title}
                  width={100}
                  height={100}
                />
                <div className="flex gap-2 items-start flex-col">
                  <h1 className="text-sx font-bold text-black tracking-tight">
                    {card.title}
                  </h1>
                  <p className="text-sx text-neutral-400">{card.description}</p>
                </div>
                <div className="px-4 py-2 bg-green-600 rounded-full text-white text-base">
                  {card.ctatext}
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

interface Card {
  description: string;
  title: string;
  src: string;
  ctatext: string;
  ctaLink: string;
  content: () => React.ReactNode;
}

const cards: Card[] = [
  {
    description: "Lena Del Ray",
    title: "Summertime Sadness",
    src: "https://i.pinimg.com/736x/04/39/7b/04397b0b70c43ce91545d75dfe42c82f.jpg",
    ctatext: "Play",
    ctaLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Lana Del Reys Summertime Sadness tells the story of profound sadness
          and longing following the death of a dear friend by suicide, with the
          lyrics reflecting her feelings of heartbreak, despair, and a
          bittersweet nostalgia that binds the memory of her friend to the
          summertime season. The song also explores themes of finding power and
          freedom in love, yet with an underlying fear that the relationship,
          like summer, is fleeting. The music video, which depicts the couples
          tragic end and a jump off a bridge, reinforces the songs themes of
          intense emotion and a potentially doomed, beautiful love.
        </p>
      );
    },
  },
  {
    description: "Lena Del Ray",
    title: "Summertime Sadness",
    src: "https://m.media-amazon.com/images/M/MV5BNzRmYzE2NDctYTE3Yi00MGFlLWJjOTQtYzAyZGEwZmMzNGVlXkEyXkFqcGc@._V1_.jpg",
    ctatext: "Play",
    ctaLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Lana Del Reys Summertime Sadness tells the story of profound sadness
          and longing following the death of a dear friend by suicide, with the
          lyrics reflecting her feelings of heartbreak, despair, and a
          bittersweet nostalgia that binds the memory of her friend to the
          summertime season. The song also explores themes of finding power and
          freedom in love, yet with an underlying fear that the relationship,
          like summer, is fleeting. The music video, which depicts the couples
          tragic end and a jump off a bridge, reinforces the songs themes of
          intense emotion and a potentially doomed, beautiful love.
        </p>
      );
    },
  },
  {
    description: "Lena Del Ray",
    title: "Summertime Sadness",
    src: "https://m.media-amazon.com/images/M/MV5BNzRmYzE2NDctYTE3Yi00MGFlLWJjOTQtYzAyZGEwZmMzNGVlXkEyXkFqcGc@._V1_.jpg",
    ctatext: "Play",
    ctaLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Lana Del Reys Summertime Sadness tells the story of profound sadness
          and longing following the death of a dear friend by suicide, with the
          lyrics reflecting her feelings of heartbreak, despair, and a
          bittersweet nostalgia that binds the memory of her friend to the
          summertime season. The song also explores themes of finding power and
          freedom in love, yet with an underlying fear that the relationship,
          like summer, is fleeting. The music video, which depicts the couples
          tragic end and a jump off a bridge, reinforces the songs themes of
          intense emotion and a potentially doomed, beautiful love.
        </p>
      );
    },
  },
];
