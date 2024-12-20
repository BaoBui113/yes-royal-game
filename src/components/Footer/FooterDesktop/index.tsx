'use client';
import { useAuth } from '@/lib/context/AuthContext';
import Image from 'next/image';
const footers = [
  {
    title: 'MEMBER MENU',
    data: [
      {
        title: '마이페이지',
        link: '/info-member',
      },
      {
        title: '쿠폰내역',
        link: '/convert-point',
      },
      {
        title: '입출금내역',
        link: '/history-deposit',
      },
    ],
  },
  {
    title: 'SITE MENU',
    data: [
      {
        title: '입금신청',
        link: '/deposit',
      },
      {
        title: '출금신청',
        link: '/withdraw',
      },
      {
        title: '이벤트신청',
        link: '',
      },
    ],
  },
  {
    title: 'BOARD',
    data: [
      {
        title: '공지사항',
        link: '/notice',
      },
      {
        title: '이벤트안내',
        link: '/event',
      },
      {
        title: '자주묻는질문',
        link: '/faq',
      },
      {
        title: '랭킹',
        link: '',
      },
    ],
  },
  {
    title: 'OTHER MENU',
    data: [
      {
        title: '1인보안계좌',
        link: '/secret-account',
      },
      {
        title: '1:1원격지원',
        link: '/remote-support',
      },
      {
        title: 'PC안전지킴이',
        link: '/pc-guard',
      },
      {
        title: '모바일서비스',
        link: '/mobile-service',
      },
      {
        title: '파트너제휴',
        link: '',
      },
    ],
  },
  {
    title: 'HOW TO PLAY',
    data: [
      { title: '바카라', link: '/baccarat' },
      { title: '블랙잭', link: '' },
      { title: '룰렛', link: '' },
      { title: '식보', link: '' },
      { title: '드래곤타이거', link: '' },
      { title: '크레이지21', link: '' },
      { title: '바카라보험', link: '' },
      { title: '캐리비언스터드포커', link: '' },
      { title: 'BullFight', link: '' },
      { title: '트리플페이스카드', link: '' },
      { title: '마종', link: '' },
    ],
  },
];
export default function FooterDesktop() {
  const {
    handleShowModalMyPageInfoMember,
    handleShowModalConvertPoint,
    handleShowModalHistoryDeposit,
    handleShowModalDeposit,
    handleShowModalWithDraw,
    handleShowModalNotice,
    handleShowModalEvent,
    handleShowModalFAQ,
    handleShowModalSecretAccount,
    handleShowModalRemoteSupport,
    handleShowModalPcGuard,
    handleShowModalMobileService,
    handleGameRule,
    setStatusGameRule,
  } = useAuth();
  const handleShowNodalFooter = (item: { title: string; link: string }) => {
    if (item.link === '/info-member') {
      handleShowModalMyPageInfoMember();
      return;
    }
    if (item.link === '/convert-point') {
      handleShowModalConvertPoint();
      return;
    }
    if (item.link === '/history-deposit') {
      handleShowModalHistoryDeposit();
      return;
    }
    if (item.link === '/deposit') {
      handleShowModalDeposit();
      return;
    }
    if (item.link === '/withdraw') {
      handleShowModalWithDraw();
      return;
    }
    if (item.link === '/notice') {
      handleShowModalNotice();
      return;
    }
    if (item.link === '/event') {
      handleShowModalEvent();
      return;
    }
    if (item.link === '/faq') {
      handleShowModalFAQ();
      return;
    }
    if (item.link === '/secret-account') {
      handleShowModalSecretAccount();
      return;
    }
    if (item.link === '/remote-support') {
      handleShowModalRemoteSupport();
      return;
    }
    if (item.link === '/pc-guard') {
      handleShowModalPcGuard();
      return;
    }
    if (item.link === '/mobile-service') {
      handleShowModalMobileService();
      return;
    }
    if (item.link === '/baccarat') {
      handleGameRule();
      setStatusGameRule(1);
      return;
    }
  };

  return (
    <section className="bg-black xl:block hidden">
      <nav className="max-w-[1200px] mx-auto py-[30px]">
        <ul className="flex">
          {footers.map((item, inx) => (
            <li key={inx} className="mx-7">
              <span className="text-[#bda179] font-bold mb-[10px] text-sm block">
                {item.title}
              </span>
              {item.title === 'HOW TO PLAY' ? (
                <ul className="grid grid-cols-2">
                  {item.data.map((subItem, subInd) => (
                    <li
                      onClick={() => handleShowNodalFooter(subItem)}
                      key={subInd}
                    >
                      <span className="text-[#67563E] text-xs cursor-pointer hover:text-[#e2c396] duration-100 transition-all ease-linear">
                        {subItem.title}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul>
                  {item.data.map((subItem, subInd) => (
                    <li
                      onClick={() => handleShowNodalFooter(subItem)}
                      key={subInd}
                    >
                      <span className="text-[#67563E] text-xs cursor-pointer hover:text-[#e2c396] duration-100 transition-all ease-linear">
                        {subItem.title}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <div className="relative w-[300px] h-[150px] ml-7">
            <Image
              src={'/assets/image/footer/footer_logo.png'}
              alt="logo"
              fill
              className="object-cover"
            />
          </div>
        </ul>
        <p className="text-[#67563E] mt-[60px] mb-[70px] text-center">
          Copyright® YES CASINO. ALL RIGHT RESERVED.
        </p>
      </nav>
    </section>
  );
}
