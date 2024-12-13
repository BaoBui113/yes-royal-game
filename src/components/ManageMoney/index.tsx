import Image from 'next/image';
import React from 'react';
import Modal from '../CommonModal';

export default function ManageMoney({
  children,
  isOpen,
  onClose,
  className,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}) {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className="flex flex-col pl-[70px]">
        <div className="flex justify-between mb-5">
          <div className="flex gap-1 w-3/4 items-end">
            <div className="relative w-[200px] h-[80px]">
              <Image
                src={'/assets/image/deposit/logo.png'}
                alt="deposit"
                fill
                className="object-contain"
              />
            </div>

            {className && (
              <div
                style={{
                  textIndent: '-200%',
                }}
                className={`h-[60px] overflow-hidden bg-no-repeat flex-1 w-full ${className}`}
              >
                입금하기
              </div>
            )}
          </div>
          <div
            onClick={onClose}
            className="flex-1 w-full relative h-[30px] cursor-pointer"
          >
            <Image src={'/assets/icon/tclose.png'} alt="t-close" fill />
          </div>
        </div>
      </div>
      <div className="px-[70px]">{children}</div>
    </Modal>
  );
}
