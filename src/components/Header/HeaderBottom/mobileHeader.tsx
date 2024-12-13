'use client';
import { useAuth } from '@/lib/context/AuthContext';
import { AlignJustify, CircleUserRound } from 'lucide-react';

export default function MobileHeader() {
  const { handleShowModalSideBar } = useAuth();
  return (
    <div className="xl:hidden flex justify-between bg-[#413828] items-center p-2 text-[#d4b072] text-sm">
      <AlignJustify onClick={handleShowModalSideBar} />
      <span className="font-bold">YES CASINO</span>
      <CircleUserRound />
    </div>
  );
}
