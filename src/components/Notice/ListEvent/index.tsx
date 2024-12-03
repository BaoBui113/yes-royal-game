'use client';
import React, { useState } from 'react';
const listNotices = [
  {
    id: 'board_N',
    data: [
      {
        title: 'SA게임 점검안내 (9/9)',
        date: '2021-09-09',
      },
      {
        title: '일부게임 점검안내 (8/30)',
        date: '2024-08-29',
      },
      {
        title: '전체 시스템 서버 점검안내 (8/28)',
        date: '2024-08-28',
      },
      {
        title: 'SA게임 점검안내 (8/19)',
        date: '2024-08-19',
      },
      {
        title: '프라그마틱 게임 점검안내 (8/14)',
        date: '2024-08-13',
      },
      {
        title: 'M게임 점검안내 (8/6)',
        date: '2024-08-05',
      },
    ],
  },
  {
    id: 'board_E',
    data: [
      {
        title: '[한가위 이벤트] 풍성하게 즐기는 추',
        date: '2024-09-05',
      },
      {
        title: '[UNION 게임] 런칭기념 실시간 올인쿠폰 5% ...',
        date: '2024-05-14',
      },
      {
        title: '두근두근 전화데이트 EVENT',
        date: '2024-04-10',
      },
      {
        title: '[잭팟이벤트] 가즈아 JACKPOT EVENT! ',
        date: '2024-04-05',
      },
      {
        title: '[후기이벤트] 찐! 후기를 들려줘!',
        date: '2024-04-05',
      },
      {
        title: '[EVERY MONTH] 매달매달 출석 EVENT',
        date: '2024-04-04',
      },
    ],
  },
  {
    id: 'board_F',
    data: [
      {
        title: 'SA게임 점검안내 (9/9)',
        date: '2021-09-09',
      },
      {
        title: '일부게임 점검안내 (8/30)',
        date: '2024-08-29',
      },
      {
        title: '전체 시스템 서버 점검안내 (8/28)',
        date: '2024-08-28',
      },
      {
        title: 'SA게임 점검안내 (8/19)',
        date: '2024-08-19',
      },
      {
        title: '프라그마틱 게임 점검안내 (8/14)',
        date: '2024-08-13',
      },
      {
        title: 'M게임 점검안내 (8/6)',
        date: '2024-08-05',
      },
    ],
  },
];
export default function ListEvent() {
  const [isHovered, setIsHovered] = useState('board_N');
  return (
    <section>
      <div className="bg-[url('/assets/image/notice/board_box.png')] h-[270px] w-[590px] float-left relative">
        {listNotices.map((notice) => {
          return (
            <div id={notice.id} key={notice.id}>
              <h2
                onMouseLeave={() => setIsHovered(notice.id)}
                onMouseEnter={() => setIsHovered(notice.id)}
                className="w-[200px] h-[90px] relative"
              >
                <a
                  className={`absolute top-0 right-0 left-0 bottom-0 overflow-hidden ${
                    isHovered !== notice.id ? 'opacity-0' : 'opacity-100'
                  } bg-[url('/assets/image/notice/board_box_title.png')]`}
                  href=""
                ></a>
              </h2>
              {isHovered === notice.id && (
                <ul className="w-[380px] h-[250px] block">
                  {notice.data.map((item) => {
                    return (
                      <li
                        key={item.title}
                        className="px-[10px] leading-10 flex items-center"
                      >
                        <div className="w-[280px] h-[42px] float-left overflow-hidden">
                          <a
                            style={{
                              textIndent: '-200%',
                            }}
                            className="text-[#dec492]"
                            href=""
                          >
                            {item.title}
                          </a>
                        </div>
                        <div className="text-[#af8534] w-[80px] float-left text-xs text-right">
                          {item.date}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
