'use client';

import ManageMoney from '@/components/ManageMoney';
import { useAuth } from '@/lib/context/AuthContext';
import SecretAccount from './SecretAccount';

export default function ModalSecretAccrount() {
  const { statusModal, closeModal } = useAuth();
  return (
    <ManageMoney
      className="bg-[url('/assets/image/my-page/title_event.png')]"
      isOpen={statusModal === 'secretAccount'}
      onClose={closeModal}
    >
      <SecretAccount />
    </ManageMoney>
  );
}
