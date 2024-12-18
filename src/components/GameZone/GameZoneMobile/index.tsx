'use client';

import Image from 'next/image';

const listGames = [
  {
    title: 'db-casino',
    value: 'dbcasino',
    img: '/assets/image/game-zone/Layer_2.png',
  },
  {
    title: 'evolution-game',
    value: 'evolution',
    img: '/assets/image/game-zone/Layer_3.png',
  },
  {
    title: 'pragmatic-game',
    value: 'pragmatic',
    img: '/assets/image/game-zone/Layer_4.png',
  },
  {
    title: 'sexy-game',
    value: 'sexygaming',
    img: '/assets/image/game-zone/Layer_5.png',
  },
  {
    title: 'h-game',
    value: 'hogaming',
    img: '/assets/image/game-zone/Layer_6.png',
  },
  {
    title: 'sa-game',
    value: 'sagaming',
    img: '/assets/image/game-zone/Layer 2.png',
  },
  {
    title: 'm-game',
    value: 'microgaming',
    img: '/assets/image/game-zone/Layer 2.png',
  },
  {
    title: 'm-slot',
    value: 'microgaming_slot',
    img: '/assets/image/game-zone/Layer 2.png',
  },
  {
    title: 'pragmatic-slot',
    value: 'pragmatic_slot',
    img: '/assets/image/game-zone/Layer 2.png',
  },
  {
    title: 'redtiger-slot',
    value: 'redtiger_slot',
    img: '/assets/image/game-zone/Layer 2.png',
  },
  {
    title: 'tournament-game',
    value: 'uniongaming',
    img: '/assets/image/game-zone/Layer 2.png',
  },
  {
    title: 'total-slot',
    value: 'simpleplay',
    img: '/assets/image/game-zone/Layer 2.png',
  },
];
export default function GameZoneMobile() {
  return (
    <section
      style={{
        backgroundPosition: 'center top',
      }}
      className="gamezone bg-[url('/assets/image/game-zone/gamezone_bg.jpg')] pt-[50px] xl:pt-[165px] px-[10px] xl:pb-[50px] relative overflow-auto w-full py-5 border-t-[3px] border-solid border-[#9f7b42]"
    >
      <h2
        style={{
          textIndent: '-200%',
        }}
        className="xl:block hidden bg-[url('/assets/image/game-zone/gamezone_light.png')] h-[170px] max-w-[1200px] overflow-hidden absolute mx-auto top-0 left-0 right-0 bg-no-repeat"
      >
        GAME MENU DESKTOP
      </h2>
      <div className="flex flex-col gap-7 w-full xl:hidden">
        <div className="text-black bg-[#804623] w-[300px] flex justify-center mx-auto rounded-[20px] text-xl font-bold py-[2PX]">
          Game List
        </div>
      </div>

      <ul className="max-w-[1200px] mx-auto relative overflow-auto grid grid-cols-12 xl:grid-cols-10 gap-4">
        {listGames.map((game, inx) => {
          const index = inx + 2;
          return (
            <li
              //   onClick={() => handleGameRun(game.value)}
              key={inx}
              className="border border-solid border-[#000] hover:border-[#dbb676] cursor-pointer xl:col-span-2 md:col-span-3 sm:col-span-4 col-span-6 bg-[url('/assets/image/game-zone/gamezone_bg.png')]"
            >
              <span>{game.title}</span>
              <div className=" relative w-full aspect-[188/251]">
                <Image
                  src={`/assets/image/game-zone/Layer_${index}.png`}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
