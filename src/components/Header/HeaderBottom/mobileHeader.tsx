'use client';
import Image from 'next/image';

export default function MobileHeader() {
  return (
    <div className="header-mobile xl:hidden block">
      <div className="w-[35%] relative aspect-[1.9882] mx-auto">
        <Image
          src={'/assets/image/header/logo_mobile.png'}
          alt="logo header"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
