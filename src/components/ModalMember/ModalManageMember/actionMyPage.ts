'use server';

import { handleMyPage } from '@/app/services/mypage';

export const onMyPage = async (data: { username: string }) => {
  try {
    const res = await handleMyPage(data);
    console.log('res 313123', res);

    return res;
  } catch (error) {
    console.log('error', error);
    return { error: 'Login failed' };
  }
};
