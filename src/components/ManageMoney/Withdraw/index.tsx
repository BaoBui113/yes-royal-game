'use client';

import { useAuth } from '@/lib/context/AuthContext';

import ManageMoney from '..';
import FormWithDraw from './FormWithDraw';

export default function ModalWithDraw() {
  const { statusModal, closeModal } = useAuth();

  return (
    <ManageMoney
      isOpen={statusModal === 'withdraw'}
      onClose={closeModal}
      className="bg-[url('/assets/image/deposit/title_withdraw.png')]"
    >
      <FormWithDraw />
    </ManageMoney>
  );
}
