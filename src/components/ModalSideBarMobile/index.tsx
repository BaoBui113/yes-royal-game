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
  const { isModalSidebar, handleCloseModalSideBar } = useAuth();
  const [openGameRule, setOpenGameRule] = useState(false);
  const handleOpenGameRule = (
    e: MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>,
  ) => {
    e.stopPropagation();
    setOpenGameRule(!openGameRule);
  };
  console.log('isModalSidebar', isModalSidebar);

  return (
    <div className="flex items-center justify-center max-h-screen overflow-hidden">
      <div
        className={`fixed inset-0 z-[70] overflow-hidden transition-all ease-linear duration-300 ${
          isModalSidebar
            ? ' flex items-center justify-center bg-black bg-opacity-50'
            : ' opacity-0 h-0'
        }`}
      >
        <div
          onClick={handleCloseModalSideBar}
          className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"
        />
        <section className="absolute inset-y-0 left-0 flex max-w-full">
          <div
            className={`transform transition-transform duration-300 ${
              isModalSidebar ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex flex-col w-[250px] h-full bg-[#5e5037] shadow-xl relative overflow-auto pb-[60px] ">
              <h2 className="font-semibold text-center text-[#9c855c] py-[10px]">
                예스카지노
              </h2>

              {listMenuHeader.map((item, inx) => (
                <Link
                  className="bg-[#d4b072] rounded-[40px] text-[#413828] text-center py-[7px] my-1 mx-[10px]"
                  key={inx}
                  href={item.value}
                >
                  {item.label}
                </Link>
              ))}
              <p
                onClick={handleOpenGameRule}
                className="p-4 border-t-[2px] border-solid border-t-[#9e865e] text-center text-white mt-4 border-b-[2px] border-b-[#413828]"
              >
                Game Rule
              </p>
              {openGameRule && (
                <ul className="bg-[#4c4029]">
                  {listGameRules.map((item, inx) => (
                    <li
                      className="p-[10px] text-center text-[#d4b072] border-b border-[#413828] border-solid"
                      key={inx}
                    >
                      <Link href={item.value}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
              <ul className="m-[10px]">
                {listMenuHeader.map((item, inx) => (
                  <li
                    className="my-1 mx-[2px] text-[#9e865e] bg-[#413828] rounded-[5px] py-3 text-center"
                    key={inx}
                  >
                    <Link href={item.value}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
