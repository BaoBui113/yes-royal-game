'use server';
import { handleWithdraw } from '@/app/services/payment';
export const handleActionWithDraw = async (formData: FormData) => {
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

  try {
    const res = await handleWithdraw(data);
    return res;
  } catch (error) {
    console.log('error', error);
    return { error: 'Withdraw failed' };
  }
};
