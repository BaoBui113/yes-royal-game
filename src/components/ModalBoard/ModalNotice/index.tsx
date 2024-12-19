'use client';

import { getNotice } from '@/app/services/bbs';
import ManageMoney from '@/components/ManageMoney';
import { useAuth } from '@/lib/context/AuthContext';
import { useEffect, useState } from 'react';
import ListBoardCommon from '../ListBoardCommon';

export default function ModalNotice() {
  const [data, setData] = useState({
    totalPages: 1,
    list: [],
  });

  const [currentPage, setCurrentPage] = useState('1');
  const { closeModal, statusModal } = useAuth();
  const handleSelectPage = async (page: string) => {
    try {
      setCurrentPage(page);
    } catch (error) {
      console.error('Failed to fetch data for page:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (statusModal === 'notice') {
        const response = await getNotice({ limit: '8', page: currentPage });
        setData({
          totalPages: response.totalPages,
          list: response.list,
        });
      }
    };
    fetchData();
  }, [statusModal, currentPage]);

  return (
    <ManageMoney
      className="bg-[url('/assets/image/my-page/title_notice.png')]"
      isOpen={statusModal === 'notice'}
      onClose={closeModal}
    >
      <ListBoardCommon
        currentPage={currentPage}
        totalPage={data.totalPages}
        data={data.list}
        handleSelectPage={handleSelectPage}
      />
    </ManageMoney>
  );
}
