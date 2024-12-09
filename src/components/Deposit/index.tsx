'use client';
import { useAuth } from '@/lib/context/AuthContext';
import Image from 'next/image';
import Modal from '../CommonModal';
import FormDeposit from './FormDeposit';

export default function Deposit() {
  const { isModalDepositOpen, setIsModalDepositOpen } = useAuth();
  const closeModal = () => setIsModalDepositOpen(false);
  return (
    <Modal isOpen={isModalDepositOpen} onClose={closeModal}>
      <div className="flex flex-col pl-[100px]">
        <div className="flex justify-between mb-5">
          <div className="flex gap-1 w-3/4 items-end">
            <div className="relative w-[200px] h-[80px]">
              <Image
                src={'/assets/image/deposit/logo.png'}
                alt="deposit"
                fill
                className="object-contain"
              />
            </div>

            <div
              style={{
                textIndent: '-200%',
              }}
              className="bg-[url('/assets/image/deposit/title_deposit.png')] h-[60px] overflow-hidden bg-no-repeat flex-1 w-full"
            >
              입금하기
            </div>
          </div>
          <div className="flex-1 w-full relative h-[30px] cursor-pointer">
            <Image src={'/assets/icon/tclose.png'} alt="t-close" fill />
          </div>
        </div>
      </div>
      <div className="px-[100px]">
        <FormDeposit />
      </div>
    </Modal>
  );
}
