'use client';
import { useAuth } from '@/lib/context/AuthContext';
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
const SidebarAuthMobile = () => {
  const {
    isModalSidebarAuth,
    setIsModalSidebarAuth,
    handleCloseModalSidebarAuth,
  } = useAuth();
  const [openGameRule, setOpenGameRule] = useState(false);
  const handleOpenGameRule = (
    e: MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>,
  ) => {
    e.stopPropagation();
    setOpenGameRule(!openGameRule);
  };
  console.log('isModalSidebar', isModalSidebarAuth);

  return (
    <div className="flex items-center justify-center max-h-screen overflow-hidden">
      <div
        className={`fixed inset-0 z-[70] overflow-hidden transition-all ease-linear duration-300 ${
          isModalSidebarAuth
            ? ' flex items-center justify-center bg-black bg-opacity-50'
            : ' opacity-0 h-0'
        }`}
      >
        <div
          onClick={handleCloseModalSidebarAuth}
          className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"
        />
        <section className="absolute inset-y-0 right-0 flex max-w-full">
          <div
            className={`transform transition-transform duration-300 ${
              isModalSidebarAuth ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col w-[250px] h-full bg-[#5e5037] shadow-xl relative overflow-auto pb-[60px] ">
              <h2 className="font-semibold text-center text-[#9c855c] py-[10px]">
                MEMBER LOGIN
              </h2>
              <button
                style={{
                  textShadow: '1px 1px #e8c78e',
                  boxShadow: '0px 2px 0px #000',
                }}
                className="bg-[#d4b072] text-center text-[#413828] rounded-[40px] mx-5 h-10"
              >
                로그인
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SidebarAuthMobile;
