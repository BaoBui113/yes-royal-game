'use client';
import { useAuth } from '@/lib/context/AuthContext';
import Image from 'next/image';

export default function FooterMobile() {
  const {
    handleShowModalSidebarAuth,
    handleShowModalSideBar,
    statusModal,
    closeModal,
  } = useAuth();
  const handleCloseOpenModalSideBar = () => {
    if (statusModal === 'sidebar') {
      closeModal();
      return;
    }
    handleShowModalSideBar();
  };
  const handleCloseModalAuth = () => {
    if (statusModal === 'sidebarAuth') {
      closeModal();
      return;
    }
    handleShowModalSidebarAuth();
  };
  return (
    <div className="xl:hidden block">
      <div className="bg-black text-[#B6A26F] text-center py-6 pb-[90px]">
        Copyright® YES CASINO. ALL RIGHT RESERVED.
      </div>
      <div
        style={{
          background:
            'linear-gradient(180deg, #1F1610 0%, #543B2B 80%, #855E45 100%)',
        }}
        className={`fixed bottom-0 w-full ${
          statusModal === 'sidebarAuth' ? 'right-[250px] bg-black' : ''
        } ${statusModal === 'sidebar' ? 'left-[250px] bg-black' : ''}  ${
          statusModal === 'sidebar' || statusModal === 'sidebarAuth'
            ? 'px-2'
            : 'px-9'
        } h-[60px] z-[100] flex items-center justify-between`}
      >
        <div
          onClick={handleCloseOpenModalSideBar}
          className="relative w-[36px] h-[36px]"
        >
          <Image src={'/assets/icon/icon-menu.svg'} alt="icon menu" fill />
        </div>
        <div className="relative w-[131px] h-[50px]">
          <Image
            src={'/assets/icon/logo.svg'}
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
        <div
          onClick={handleCloseModalAuth}
          className="relative w-[36px] h-[36px]"
        >
          <Image
            src={'/assets/icon/icon-personal.svg'}
            alt="icon personal"
            fill
          />
        </div>
      </div>
    </div>
  );
}
