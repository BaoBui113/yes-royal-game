'use client';

import { useAuth } from '@/lib/context/AuthContext';
import ManageMoney from '../ManageMoney';
import CommonGameRule from './CommonGameRule';

export default function ModalGameRule() {
  const { statusModal, closeModal } = useAuth();
  return (
    <ManageMoney
      className="bg-[url('/assets/image/my-page/title_event.png')]"
      isOpen={statusModal === 'gameRule'}
      onClose={closeModal}
    >
      <CommonGameRule />
    </ManageMoney>
  );
}
