'use client';
import ModalNotice from '@/components/ModalNotice';
import { useAuth } from '@/lib/context/AuthContext';
import Image from 'next/image';

export default function ModalNoticeDeposit() {
  const { isModalDepositNotice, setIsModalDepositNotice } = useAuth();
  const closeModal = () => setIsModalDepositNotice(false);
  return (
    <ModalNotice isOpen={isModalDepositNotice} onClose={closeModal}>
      <div className="bg-[url('/assets/image/deposit/popup_deposit.gif')] w-[600px] h-[300px] bg-no-repeat bg-center bg-contain relative">
        <div className="absolute top-4 right-4">
          <div className="relative w-6 h-6 cursor-pointer" onClick={closeModal}>
            <Image src={'/assets/icon/popup_close.png'} alt="close" fill />
          </div>
        </div>
      </div>
    </ModalNotice>
  );
}
