'use client';
import ManageMoney from '@/components/ManageMoney';
import { useAuth } from '@/lib/context/AuthContext';
import { useState } from 'react';
const listBtn = ['회원가입방법', '입금방법', '출금방법', '게임이용방법'];
export default function ModalMobileService() {
  const { statusModal, closeModal } = useAuth();
  const [statusBtn, setStatusBtn] = useState(1);
  return (
    <ManageMoney
      className="bg-[url('/assets/image/my-page/title_event.png')]"
      isOpen={statusModal === 'mobileService'}
      onClose={closeModal}
    >
      <>
        <div className="flex gap-2 items-center">
          {listBtn.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setStatusBtn(index + 1)}
                className={`rounded py-2 px-6 text-sm ${
                  statusBtn !== index + 1
                    ? 'bg-[#1d1918] text-[#6d493a]'
                    : 'bg-[#c4a067] text-[#2e2119]'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="min-h-[300px] flex items-center text-[#948477] text-sm">
          회원가입방법안내 준비중
        </div>
      </>
    </ManageMoney>
  );
}
