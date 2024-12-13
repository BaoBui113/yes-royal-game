'use client';
import { useAuth } from '@/lib/context/AuthContext';
import ManageMoney from '..';
import FormSendPhoneSms from './FormSendPhoneSms';

export default function SendPhoneSms() {
  const { setIsModalSendPhoneSms, isModalSendPhoneSms } = useAuth();
  const closeModal = () => setIsModalSendPhoneSms(false);
  return (
    <ManageMoney isOpen={isModalSendPhoneSms} onClose={closeModal}>
      <FormSendPhoneSms />
    </ManageMoney>
  );
}
