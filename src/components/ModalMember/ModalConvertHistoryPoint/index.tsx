'use client';
import ManageMoney from '@/components/ManageMoney';
import { useAuth } from '@/lib/context/AuthContext';
import FormConvertHistoryPoint from './FormConvertHistoryPoint';

export default function ModalConvertHistoryPoint() {
  const { statusModal, setStatusModal } = useAuth();
  const closeModal = () => {
    setStatusModal('');
  };
  return (
    <ManageMoney
      className="bg-[url('/assets/image/my-page/title_mypage.png')]"
      isOpen={statusModal === 'convertPoint'}
      onClose={closeModal}
    >
      <button className="bg-[#c4a067] text-[#2e2119] text-sm rounded py-2 px-6">
        포인트 사용내역
      </button>
      <FormConvertHistoryPoint />
    </ManageMoney>
  );
}
