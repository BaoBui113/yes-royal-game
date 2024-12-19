'use client';
import ManageMoney from '@/components/ManageMoney';
import { useAuth } from '@/lib/context/AuthContext';
import RemoteSupport from './RemoteSupport';

export default function ModalRemoteSupport() {
  const { statusModal, closeModal } = useAuth();
  return (
    <ManageMoney
      className="bg-[url('/assets/image/my-page/title_event.png')]"
      onClose={closeModal}
      isOpen={statusModal === 'remoteSupport'}
    >
      <RemoteSupport />
    </ManageMoney>
  );
}
