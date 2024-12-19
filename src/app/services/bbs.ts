'use server';
import { customFetch } from '@/lib/helper/customFetch';

export const getNotice = async ({
  limit,
  page,
}: { limit?: string; page?: string } = {}) => {
  return await customFetch('/bbs', {
    method: 'POST',
    body: JSON.stringify({
      type: 'notice',
      limit,
      page,
    }),
  });
};

export const getEvent = async ({
  limit,
  page,
}: { limit?: string; page?: string } = {}) => {
  return await customFetch('/bbs', {
    method: 'POST',
    body: JSON.stringify({
      type: 'event',
      limit,
      page,
    }),
  });
};

export const getFAQ = async ({
  limit,
  page,
}: { limit?: string; page?: string } = {}) => {
  return await customFetch('/bbs', {
    method: 'POST',
    body: JSON.stringify({
      type: 'faq',
      limit,
      page,
    }),
  });
};
