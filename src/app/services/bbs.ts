import { customFetch } from '@/lib/helper/customFetch';

export const getNotice = async () => {
  return await customFetch('/bbs', {
    method: 'POST',
    body: JSON.stringify({
      type: 'notice',
      limit: '6',
    }),
  });
};

export const getEvent = async () => {
  return await customFetch('/bbs', {
    method: 'POST',
    body: JSON.stringify({
      type: 'event',
      limit: '6',
    }),
  });
};

export const getFAQ = async () => {
  return await customFetch('/bbs', {
    method: 'POST',
    body: JSON.stringify({
      type: 'faq',
      limit: '6',
    }),
  });
};
