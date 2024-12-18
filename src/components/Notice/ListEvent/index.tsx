'use client';
import { IBoard } from '@/lib/type';
import { Dispatch, SetStateAction, useState } from 'react';

const ChooseTypeBoardDeskTop = ({
  typeBoard,
  isActived,
  setTypeBoard,
  id,
}: {
  setTypeBoard: Dispatch<
    SetStateAction<{
      type: string;
      data: IBoard[];
    }>
  >;
  id: string;
  isActived: string;
  typeBoard: {
    type: string;
    data: IBoard[];
  };
}) => {
  {
    return (
      <div id={id}>
        <h2
          onMouseLeave={() => setTypeBoard((prev) => ({ ...prev }))}
          onMouseEnter={() => setTypeBoard((prev) => ({ ...prev }))}
          className="w-[200px] h-[90px] relative"
        >
          <span
            className={`absolute top-0 right-0 left-0 bottom-0 overflow-hidden cursor-pointer ${
              isActived !== typeBoard.type ? 'opacity-0' : 'opacity-100'
            } bg-[url('/assets/image/notice/board_box_title.png')]`}
          ></span>
        </h2>
        {isActived === typeBoard.type && (
          <ul className="w-[380px] h-[250px] block">
            {typeBoard.data.map((data) => {
              return (
                <li
                  key={data.NOTICE_SEQ}
                  className="px-[10px] leading-10 flex items-center"
                >
                  <div className="w-[280px] h-[42px] float-left overflow-hidden">
                    <span
                      style={{
                        textIndent: '-200%',
                      }}
                      className="text-[#dec492]"
                    >
                      {data.NOTICE_TITLE}
                    </span>
                  </div>
                  <div className="text-[#af8534] w-[80px] float-left text-xs text-right">
                    {new Date(data.RGST_DT).toLocaleDateString()}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
};
export default function ListEvent({
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
    <section>
      <div className="bg-[url('/assets/image/notice/board_box.png')] h-[270px] w-[590px] float-left relative">
        <ChooseTypeBoardDeskTop
          id="board_N"
          setTypeBoard={() => {
            setTypeBoard({
              type: 'notice',
              data: dataNotice,
            });
          }}
          isActived="notice"
          typeBoard={typeBoard}
        />
        <ChooseTypeBoardDeskTop
          id="board_E"
          setTypeBoard={() => {
            setTypeBoard({
              type: 'event',
              data: dataEvent,
            });
          }}
          isActived="event"
          typeBoard={typeBoard}
        />
        <ChooseTypeBoardDeskTop
          id="board_F"
          setTypeBoard={() => {
            setTypeBoard({
              type: 'faq',
              data: dataFAQ,
            });
          }}
          isActived="faq"
          typeBoard={typeBoard}
        />
      </div>
    </section>
  );
}
