'use server';
import { handleMoveGameMoney } from '@/app/services/payment';

export const handleActionSendPhoneSms = async (formData: FormData) => {
  const username = formData.get('username') as string;
  const phone = formData.get('phone') as string;
  const data = { username, phone };
  try {
    const res = await handleMoveGameMoney(data);
    return res;
  } catch (error) {
    console.log('error', error);
    return { error: 'Send phone sms failed' };
  }
};
