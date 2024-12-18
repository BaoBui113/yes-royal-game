'use client';

import Image from 'next/image';

const listMoneyMenu = [
  {
    href: '/deposit',
    title: '입금신청',
    subTitle: 'DEPOSIT',
  },
  {
    href: '/withdraw',
    title: '출금신청',
    subTitle: 'WITHDRAW',
  },
  {
    href: '',
    title: '게임머니이동',
    subTitle: 'VIRTUALMONEY',
  },
  {
    href: '',
    title: '쿠폰사용',
    subTitle: 'EVENT',
  },
  {
    href: '',
    title: '입금계좌 재전송',
    subTitle: 'MOVE GAME MONEY',
  },
];
export default function MoneyMenuMobile() {
  return (
    <section className="relative  xl:hidden block">
      <div className="bg-[url('/assets/image/banner/body_bg.png')]  pt-[18px] w-full overflow-auto  xl:p-[10px] xl:pb-[10px] pb-[50px] relative z-20 grid grid-cols-12 gap-2">
        {listMoneyMenu.map((item, inx) => {
          const icon = `icon${inx + 1}.svg`;
          return (
            <div
              key={inx}
              style={{
                background:
                  'linear-gradient(180deg, #3A291C 0%, #1E160F 53%, #0E0B08 81.5%, #251A12 100%)',
              }}
              className="w-full h-[73px] rounded-[10px] border border-solid border-[#D2AD6380] gap-2 flex items-center px-3  md:col-span-4 sm:col-span-6 col-span-12"
            >
              <div className="relative w-[60px] h-[60px] flex-shrink-0">
                <Image src={`/assets/icon/${icon}`} alt="icon1" fill />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-moneymenu font-black text-base leading-5 whitespace-nowrap">
                  {item.title}
                </span>
                <span className="text-[#96723F] text-xs font-medium leading-4 whitespace-nowrap">
                  {item.subTitle}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          backgroundPosition: 'center top',
        }}
        className="xl:hidden bg-[url('/assets/image/game-zone/gamezone_title.png')] w-full h-[60px] overflow-auto absolute -bottom-9 z-50 bg-no-repeat"
      ></div>
    </section>
  );
}
