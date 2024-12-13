'use client';
import { useAuth } from '@/lib/context/AuthContext';

import ManageMoney from '..';
import FormDeposit from './FormDeposit';

export default function Deposit() {
  const { isModalDepositOpen, setIsModalDepositOpen } = useAuth();
  const closeModal = () => setIsModalDepositOpen(false);
  return (
    <ManageMoney
      className="bg-[url('/assets/image/deposit/title_deposit.png')]"
      isOpen={isModalDepositOpen}
      onClose={closeModal}
    >
      <FormDeposit />
    </ManageMoney>
  );
}
