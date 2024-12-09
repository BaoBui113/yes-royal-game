'use server';

import { handleDeposit } from '@/app/services/payment';
export const handleActionDeposit = async (formData: FormData) => {
  const username = formData.get('username') as string;
  const amount = formData.get('amount') as string;
  const deposit_name = formData.get('deposit_name') as string;
  const game_id = formData.get('game') as string;
  const comment = formData.get('comment') as string;

  const data = {
    username,
    amount: Number(amount),
    deposit_name,
    game_id,
    comment,
  };
  console.log('data', data);

  try {
    const res = await handleDeposit(data);
    return res;
  } catch (error) {
    console.log('error', error);
    return { error: 'Deposit failed' };
  }
};
