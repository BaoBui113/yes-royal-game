import Image from 'next/image';
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
      className={`z-40 transition-all ease duration-300 ${
        isOpen
          ? 'scale-100 opacity-100 fixed inset-0 h-screen flex items-center justify-center bg-black bg-opacity-50'
          : 'scale-95 opacity-0'
      }`}
      onClick={onClose}
    >
      {isOpen && (
        <div
          style={{
            borderRadius: '500px / 30px',
            boxShadow: '0px 0px 50px #773d05',
            backgroundPosition: 'center',
          }}
          className={`w-[1000px] relative border-solid border-[2px] border-[#fee188] py-6 shadow-lg transition-transform duration-300 transform ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-30'
          } ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-0 left-0 bottom-0 z-[-1] w-full h-auto">
            <Image
              style={{
                borderRadius: '500px / 30px',
              }}
              src={'/assets/image/banner/subpage_bg.jpg'}
              alt="banner"
              fill
            />
          </div>
          {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
          <div className="h-[600px] overflow-auto custom-scroll-bar">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
