'use client';
import { useAuth } from '@/lib/context/AuthContext';
const listMoneyMenu = [
  {
    href: '/deposit',
    title: '입금신청',
  },
  {
    href: '/withdraw',
    title: '출금신청',
  },
  {
    href: '',
    title: '입출금내역',
  },
  {
    href: '',
    title: '충전내역',
  },
  {
    href: '',
    title: '환전내역',
  },
  {
    href: '/move-game-money',
    title: '환전신청',
  },
];
export default function MoneyMenu() {
  const {
    user,
    handleShowModalLogin,
    handleShowModalDeposit,
    handleShowModalDepositNotice,
    handleShowModalWithDraw,
    handleShowModalSendPhoneSms,
  } = useAuth();
  const handleOpenModalMoneyMenu = (item: { href: string; title: string }) => {
    if (!user) {
      handleShowModalLogin();
      return;
    }
    if (item.href === '/deposit') {
      handleShowModalDeposit();
      handleShowModalDepositNotice();
      return;
    }
    if (item.href === '/withdraw') {
      handleShowModalWithDraw();
      handleShowModalDepositNotice();
      return;
    }
    if (item.href === '/move-game-money') {
      handleShowModalSendPhoneSms();
      return;
    }
  };
  return (
    <section className="moneymenu h-[100px] overflow-hidden bg-[url('/assets/image/money/moneymenu_bg.jpg')] relative">
      <h2 className="hidden">SITE MENU</h2>
      <ul className="max-w-[1510px] mx-auto flex">
        {listMoneyMenu.map((item, inx) => {
          return (
            <li className="h-[100px] relative" key={inx}>
              <p
                onClick={() => handleOpenModalMoneyMenu(item)}
                className="bg-[url('/assets/image/money/moneymenu_icon.png')] cursor-pointer overflow-hidden block bg-[#000000] bg-no-repeat absolute top-0 left-0 right-0 bottom-0"
                style={{
                  textIndent: '-200%',
                }}
              >
                {item.title}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
