'use client';
import ManageMoney from '@/components/ManageMoney';
import { useAuth } from '@/lib/context/AuthContext';
import PCGuard from './PcGuard';

export default function ModalPcGuard() {
  const { statusModal, closeModal } = useAuth();
  return (
    <ManageMoney
      className="bg-[url('/assets/image/my-page/title_event.png')]"
      onClose={closeModal}
      isOpen={statusModal === 'pcGuard'}
    >
      <PCGuard />
    </ManageMoney>
  );
}
