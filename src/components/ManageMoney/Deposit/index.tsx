'use client';
import { useAuth } from '@/lib/context/AuthContext';

import ManageMoney from '..';
import FormDeposit from './FormDeposit';

export default function Deposit() {
  const { statusModal, closeModal } = useAuth();
  return (
    <ManageMoney
      className="bg-[url('/assets/image/deposit/title_deposit.png')]"
      isOpen={statusModal === 'deposit'}
      onClose={closeModal}
    >
      <FormDeposit />
    </ManageMoney>
  );
}
