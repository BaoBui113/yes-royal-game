'use client';

import { useAuth } from '@/lib/context/AuthContext';

import ManageMoney from '..';
import FormWithDraw from './FormWithDraw';

export default function ModalWithDraw() {
  const { setIsModalWithdrawOpen, isModalWithdrawOpen } = useAuth();
  const closeModal = () => setIsModalWithdrawOpen(false);
  return (
    <ManageMoney
      isOpen={isModalWithdrawOpen}
      onClose={closeModal}
      className="bg-[url('/assets/image/deposit/title_withdraw.png')]"
    >
      <FormWithDraw />
    </ManageMoney>
  );
}
