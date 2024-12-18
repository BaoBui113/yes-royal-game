import { BRAND_ID } from '@/lib/constants';
import { customFetch } from '@/lib/helper/customFetch';

export const handleMyPage = async (data: { username: string }) => {
  try {
    const myPage = await customFetch('/mypage', {
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        brand_id: BRAND_ID,
      }),
    });
    return myPage;
  } catch (error) {
    console.log('In ra ma loi error', error);
  }
};
