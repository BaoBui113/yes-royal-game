'use client';
import ManageMoney from '@/components/ManageMoney';
import { useAuth } from '@/lib/context/AuthContext';
import TableHistoryDeposit from './TableHistoryDeposit';

export default function ModalHistoryDeposit() {
  const { statusModal, closeModal } = useAuth();

  return (
    <ManageMoney
      className="bg-[url('/assets/image/my-page/title_history.png')]"
      isOpen={statusModal === 'historyDeposit'}
      onClose={closeModal}
    >
      <div className="flex justify-between items-center">
        <h3
          style={{
            color: 'yellow',
          }}
          className="text-sm"
        >
          2024-12-17 부터 현재까지의 입금 내역입니다.
        </h3>
        <select className="w-[200px] h-[26px] bg-[#060708] text-[#bd7a41] border-solid border-[1px] border-[#2f271e] custom-select px-4">
          <option value="I">입금</option>
          <option value="O">출금</option>
        </select>
      </div>
      <TableHistoryDeposit />
    </ManageMoney>
  );
}
