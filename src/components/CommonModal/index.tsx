import React from 'react';

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  className,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <div
      className={`z-40 transition-all ease-in-out duration-300 ${
        isOpen
          ? 'opacity-100 fixed inset-0 h-screen flex items-center justify-center bg-black bg-opacity-50'
          : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        style={{
          borderRadius: '500px / 30px',
          boxShadow: '0px 0px 50px #773d05',
          backgroundPosition: 'center',
        }}
        className={`max-w-[1000px] min-w-[900px] h-[600px] bg-[url('/assets/image/banner/subpage_bg.jpg')] bg-transparent bg-no-repeat border-solid border-[2px] border-[#fee188] bg-white  p-6 shadow-lg transition-transform duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        } ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
}
