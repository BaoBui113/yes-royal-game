'use client';
import { useAuth } from '@/lib/context/AuthContext';
import Link from 'next/link';
import { MouseEvent, useState } from 'react';
const listMenuHeader = [
  {
    label: '출금랭킹',
    value: '',
  },
  {
    label: '공지사항',
    value: '',
  },
  {
    label: '이벤트',
    value: '',
  },
  {
    label: 'FQA',
    value: '',
  },
];
const listGameRules = [
  {
    label: '바카라',
    value: '',
  },
  {
    label: '블랙잭',
    value: '',
  },
  {
    label: '룰렛',
    value: '',
  },
  {
    label: '식보',
    value: '',
  },
  {
    label: '드래곤타이거',
    value: '',
  },
  {
    label: '드래곤타이거',
    value: '',
  },
  {
    label: '크레이지21',
    value: '',
  },
  {
    label: '바카라보험',
    value: '',
  },
  {
    label: '캐리비언스터드포커',
    value: '',
  },
  {
    label: 'BullFight',
    value: '',
  },
  {
    label: '트리플 페이스카드',
    value: '',
  },
  {
    label: '마종',
    value: '',
  },
];
const listOtherMenu = [];
const Sidebar = () => {
  const { isModalSidebar, setIsModalSideBar } = useAuth();
  const [openGameRule, setOpenGameRule] = useState(false);
  const handleOpenGameRule = (
    e: MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>,
  ) => {
    e.stopPropagation();
    setOpenGameRule(!openGameRule);
  };
  console.log('isModalSidebar', isModalSidebar);

  return (
    <div
      //   onClick={() => setIsModalSideBar(false)}
      className="flex items-center justify-center max-h-screen overflow-hidden"
    >
      {/* Sidebar Overlay */}
      {isModalSidebar && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-[100] overflow-hidden">
          <div className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          {/* Sidebar Content */}
          <section className="absolute inset-y-0 left-0 flex max-w-full">
            <div
              className={`w-screen max-w-md transform transition-transform duration-300 ${
                isModalSidebar ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="flex flex-col max-w-[250px] h-full py-6 bg-[#5e5037] shadow-xl relative">
                {/* Sidebar Header */}

                <h2 className="font-semibold text-center text-[#9c855c]">
                  예스카지노
                </h2>
                <button
                  onClick={() => setIsModalSideBar(false)}
                  className="absolute text-2xl font-bold top-2 right-4"
                >
                  X
                </button>
                {/* Sidebar Content */}
                {listMenuHeader.map((item, inx) => {
                  return (
                    <Link
                      className="bg-[#d4b072] rounded-[40px] text-[#413828] text-center py-[10px] my-1 mx-[2px]"
                      key={inx}
                      href={item.value}
                    >
                      {' '}
                      {item.label}
                    </Link>
                  );
                })}
                <p
                  onClick={(e) => handleOpenGameRule(e)}
                  className="p-4 border-t-[2px] border-solid border-t-[#9e865e] text-center text-white mt-4 border-b-[2px] border-b-[#413828]"
                >
                  Game Rule
                </p>
                {openGameRule && (
                  <ul className="bg-[#4c4029] overflow-auto">
                    {listGameRules.map((item, inx) => {
                      return (
                        <li
                          className="p-[10px] text-center text-[#d4b072]"
                          key={inx}
                        >
                          <Link href={item.value}>{item.label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                )}

                <ul className="m-[10px]">
                  {listMenuHeader.map((item, inx) => {
                    return (
                      <li
                        className="my-1 mx-[2px] text-[#9e865e] bg-[#413828] rounded-[5px] py-4 text-center"
                        key={inx}
                      >
                        <Link href={item.value}>{item.label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
