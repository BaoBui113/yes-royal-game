'use client';

import { useAuth } from '@/lib/context/AuthContext';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { handleActionRunGame } from './actionPlayRun';
import LoadingGame from './LoadingGameZone';

const listGames = [
  {
    title: 'db-casino',
    value: 'dbcasino',
  },
  {
    title: 'evolution-game',
    value: 'evolution',
  },
  {
    title: 'pragmatic-game',
    value: 'pragmatic',
  },
  {
    title: 'sexy-game',
    value: 'sexygaming',
  },
  {
    title: 'h-game',
    value: 'hogaming',
  },
  {
    title: 'sa-game',
    value: 'sagaming',
  },
  {
    title: 'm-game',
    value: 'microgaming',
  },
  {
    title: 'm-slot',
    value: 'microgaming_slot',
  },
  {
    title: 'pragmatic-slot',
    value: 'pragmatic_slot',
  },
  {
    title: 'redtiger-slot',
    value: 'redtiger_slot',
  },
  {
    title: 'tournament-game',
    value: 'uniongaming',
  },
  {
    title: 'total-slot',
    value: 'simpleplay',
  },
];

const openPopup = (popupUrl: string) => {
  const width = 1440;
  const height = 810;
  const left = window.innerWidth / 2 - width / 2;
  const top = window.innerHeight / 2 - height / 2;

  window.open(
    popupUrl,
    '_blank',
    `top=${top},left=${left},width=${width},height=${height},menubar=no,scrollbars=yes,status=no,toolbar=no,resizable=no,location=no`,
  );
};
export default function GameZone() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const handleGameRun = async (game: string) => {
    if (!user) {
      alert('로그인이 필요합니다.');
      return;
    }
    setIsLoading(true);
    const formData = new FormData();
    formData.append('username', user.MEM_LID);
    formData.append('game_id', game);
    formData.append('mobile', '1');
    const response = await handleActionRunGame(formData);
    if (!response?.status) {
      toast.error('오류가 발생했습니다. 나중에 다시 시도해 주세요');
      setIsLoading(false);
      return;
    }
    if (response.status === '0') {
      openPopup(response.popupUrl);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    toast.error(response.message);
  };
  return (
    <>
      {/* <section
        style={{
          backgroundPosition: 'center top',
        }}
        className="gamezone bg-[url('/assets/image/game-zone/gamezone_bg.jpg')] pt-[165px] px-[10px] pb-[50px] relative w-full xl:block hidden"
      >
        <h2
          style={{
            textIndent: '-200%',
          }}
          className="bg-[url('/assets/image/game-zone/gamezone_light.png')] h-[170px] max-w-[1200px] overflow-hidden absolute mx-auto top-0 left-0 right-0 bg-no-repeat"
        >
          GAME MENU
        </h2>
        <ul className="max-w-[1200px] mx-auto relative overflow-auto grid grid-cols-12 xl:grid-cols-10">
          {listGames.map((game, inx) => {
            return (
              <li
                onClick={() => handleGameRun(game.value)}
                className={`cursor-pointer bg-[url('/assets/image/game-zone/gamezone_bg.png')] w-[234px] h-[280px] col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-2 relative z-10 border border-solid border-[#000] m-[2px] transition-all ease .2s ${game.title}`}
                key={inx}
              >
                <span>{game.title}</span>
              </li>
            );
          })}
        </ul>
      </section> */}
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

        <ul className="max-w-[1200px] mx-auto relative overflow-auto grid grid-cols-12 xl:grid-cols-10 gap-4">
          {listGames.map((game, inx) => {
            const index = inx + 2;
            return (
              <li
                onClick={() => handleGameRun(game.value)}
                key={inx}
                className="border relative border-solid border-[#000] hover:border-[#dbb676] cursor-pointer xl:col-span-2 lg:col-span-3 md:col-span-4 col-span-6  bg-[url('/assets/image/game-zone/gamezone_bg.png')]"
              >
                <span className="whitespace-nowrap font-bold md:text-xl text-sm py-2 md:px-5 px-2">
                  {game.title}
                </span>
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
      <LoadingGame
        isModalLoadingGame={isLoading}
        setIsModalLoadingGame={setIsLoading}
      />
    </>
  );
}
