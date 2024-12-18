'use client';
import ManageMoney from '@/components/ManageMoney';
import { useAuth } from '@/lib/context/AuthContext';
import { useEffect, useState } from 'react';
import FormChangePhone from '../FormChangePhone';
import FormUserRegister from '../FormInfoUserRegister';
import FormManageAccount from '../FormManageAccount';
import { onMyPage } from './actionMyPage';

// const listBtn = ['회원가입정보', '휴대폰변경', '고객계좌관리'];
const lisBtn = [
  {
    value: 'infoUserRegister',
    label: '회원가입정보',
  },
  {
    value: 'changePhone',
    label: '휴대폰변경',
  },
  {
    value: 'manageAccount',
    label: '고객계좌관리',
  },
];
export default function MyPage() {
  const { isModalMyPage, setIsModalMyPage, user } = useAuth();
  const closeModal = () =>
    setIsModalMyPage({
      ...isModalMyPage,
      infoMember: false,
    });
  const [bankList, setBankList] = useState({});
  const [status, setStatus] = useState('infoUserRegister');
  const getMyPage = async () => {
    try {
      if (!user) return;
      const res = await onMyPage({ username: user.MEM_LID });
      console.log('res 22222', res);

      if (res.status === '0') {
        setBankList(res.BANK_LIST);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    getMyPage();
  }, []);
  console.log('bankList', bankList);

  return (
    <ManageMoney
      className="bg-[url('/assets/image/my-page/title_mypage.png')]"
      isOpen={isModalMyPage.infoMember}
      onClose={closeModal}
    >
      <div className="flex gap-1 items-center">
        {lisBtn.map((btn, inx) => {
          return (
            <button
              key={inx}
              className={`cursor-pointer px-6 py-2 rounded  ${
                status === btn.value ? 'information-active' : 'information'
              }`}
              onClick={() => setStatus(btn.value)}
            >
              {btn.label}
            </button>
          );
        })}
      </div>
      <div className="mt-6">
        {status === 'infoUserRegister' && <FormUserRegister />}
        {status === 'changePhone' && <FormChangePhone />}
        {status === 'manageAccount' && <FormManageAccount />}
      </div>
    </ManageMoney>
  );
}
