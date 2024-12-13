'use client';
import { useAuth } from '@/lib/context/AuthContext';

const HeaderTopNotAuthentication = () => {
  return (
    <div className="flex gap-5 items-center header-text">
      <span>ID/PW찾기</span>
      <span>로그인</span>
    </div>
  );
};

const HeaderWithAuthentication = () => {
  return (
    <div className="flex gap-5 items-center header-text">
      <span>계정정보</span>
      <span>로그아웃</span>
    </div>
  );
};

export default function HeaderTop() {
  const { user } = useAuth();

  return (
    <div className="bg-black xl:block hidden">
      <div className="flex justify-between px-5 text-[#a5a5a5] text-xs leading-[30px]">
        <span>예스카지노- YES CASINO</span>
        {user ? <HeaderWithAuthentication /> : <HeaderTopNotAuthentication />}
      </div>
    </div>
  );
}
