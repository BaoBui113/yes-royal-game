'use client';

import { getEvent } from '@/app/services/bbs';
import ManageMoney from '@/components/ManageMoney';
import { useAuth } from '@/lib/context/AuthContext';
import { useEffect, useState } from 'react';
import ListBoardCommon from '../ListBoardCommon';

export default function ModalEvent() {
  const [data, setData] = useState({
    list: [],
    totalPages: 1,
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
      if (statusModal === 'event') {
        const response = await getEvent({ limit: '8', page: currentPage });
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
      className="bg-[url('/assets/image/my-page/title_event.png')]"
      isOpen={statusModal === 'event'}
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
