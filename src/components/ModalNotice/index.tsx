import React from 'react';

export default function ModalNotice({
  isOpen,
  onClose,
  children,
  className,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`z-50 transition-all ease-out duration-700 ${
        isOpen
          ? 'opacity-100 fixed inset-0 h-screen flex items-center justify-center bg-black bg-opacity-50'
          : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div className={`${className}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
