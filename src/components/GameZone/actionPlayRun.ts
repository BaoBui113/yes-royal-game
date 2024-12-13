'use server';

import { handleGameRun } from '@/app/services/game';

export const handleActionRunGame = async (formData: FormData) => {
  const username = formData.get('username') as string;
  const game_id = formData.get('game_id') as string;
  const mobile = formData.get('mobile') as string;
  const data = { username, game_id, mobile };
  try {
    const res = await handleGameRun(data);
    return res;
  } catch (error) {
    console.log('error', error);
    return { error: 'Play game failed' };
  }
};
