'use client';
import { IBoard } from '@/lib/type';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';

const IBoardItem = ({ dataBoard }: { dataBoard: IBoard[] }) => {
  return (
    <ul className="absolute top-3 left-5  flex flex-col gap-4 w-full">
      {dataBoard &&
        dataBoard.length > 0 &&
        dataBoard.map((data: IBoard) => {
          return (
            <li
              className={`flex justify-between items-center`}
              key={data.NOTICE_SEQ}
            >
              <div className="flex gap-1 items-center text-base text-[#dec492]">
                <span>+</span>
                <span className="line-clamp-1 w-fit pr-8 ">
                  {data.NOTICE_TITLE}
                </span>
              </div>

              <span className="md:block hidden w-fit right-16 absolute text-[#af8534]">
                {new Date(data.RGST_DT).toLocaleDateString()}
              </span>
            </li>
          );
        })}
    </ul>
  );
};

const ChooseTypeBoard = ({
  setTypeBoard,
  typeBoard,
  isActive,
  titleTop,
  titleBottom,
}: {
  setTypeBoard: Dispatch<
    SetStateAction<{
      type: string;
      data: IBoard[];
    }>
  >;
  typeBoard: {
    type: string;
    data: IBoard[];
  };
  isActive: string;
  titleTop: string;
  titleBottom: string;
}) => {
  return (
    <div
      className="flex flex-col"
      onClick={() => setTypeBoard((prev) => ({ ...prev }))}
    >
      <span className={`${isActive === typeBoard.type ? 'text-active' : ''}`}>
        {titleTop}
      </span>
      <span
        className={`${isActive === typeBoard.type ? 'text-[#96723F]' : ''}`}
      >
        {titleBottom}
      </span>
    </div>
  );
};

export default function NoticeMobile({
  dataNotice,
  dataEvent,
  dataFAQ,
}: {
  dataNotice: IBoard[];
  dataEvent: IBoard[];
  dataFAQ: IBoard[];
}) {
  const [typeBoard, setTypeBoard] = useState({
    type: 'notice',
    data: dataNotice,
  });
  return (
    <div className="bg-[url('/assets/image/notice/body_bg.png')] overflow-auto xl:hidden block pb-6">
      <div className="px-4">
        <div className="bg-[#382E1E] rounded-tl-[6px] rounded-tr-[6px]">
          <div className="flex gap-7 items-center py-3 px-4">
            <ChooseTypeBoard
              setTypeBoard={() => {
                setTypeBoard({
                  type: 'notice',
                  data: dataNotice,
                });
              }}
              isActive="notice"
              typeBoard={typeBoard}
              titleTop="공지사항"
              titleBottom="NOTICE"
            />
            <ChooseTypeBoard
              setTypeBoard={() => {
                setTypeBoard({
                  type: 'event',
                  data: dataEvent,
                });
              }}
              isActive="event"
              typeBoard={typeBoard}
              titleTop="이벤트"
              titleBottom="EVENT"
            />
            <ChooseTypeBoard
              setTypeBoard={() => {
                setTypeBoard({
                  type: 'faq',
                  data: dataFAQ,
                });
              }}
              isActive="faq"
              typeBoard={typeBoard}
              titleTop="자주묻는질문"
              titleBottom="FQA"
            />
          </div>
        </div>
        <div className="relative w-full min-h-[243px]">
          <Image
            src={'/assets/image/notice/mobile_board.png'}
            alt="mobile board"
            fill
            className="object-fill"
          />
          <IBoardItem dataBoard={typeBoard.data} />
        </div>
      </div>
    </div>
  );
}
