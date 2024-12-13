import { BRAND_ID } from '@/lib/constants';
import { customFetch } from '@/lib/helper/customFetch';
import { IDepositProps, ISendPhoneSms } from '@/lib/type';

export const handleDeposit = async (data: IDepositProps) => {
  try {
    const deposit = await customFetch('/deposit', {
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        brand_id: BRAND_ID,
        amount: data.amount,
        deposit_name: data.deposit_name,
        game_id: data.game_id,
        user_remark: data.comment,
      }),
    });

    return deposit;
  } catch (error) {
    console.log('In ra ma loi error', error);
  }
};

export const handleWithdraw = async (data: IDepositProps) => {
  try {
    const deposit = await customFetch('/withdraw', {
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        brand_id: BRAND_ID,
        amount: data.amount,
        deposit_name: data.deposit_name,
        game_id: data.game_id,
        user_remark: data.comment,
      }),
    });

    return deposit;
  } catch (error) {
    console.log('In ra ma loi error', error);
  }
};

export const handleMoveGameMoney = async (data: ISendPhoneSms) => {
  try {
    const sendPhoneSms = await customFetch('/resend-bank-account-to-sms', {
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        brand_id: BRAND_ID,
        phone: data.phone,
      }),
    });

    return sendPhoneSms;
  } catch (error) {
    console.log('In ra ma loi error', error);
  }
};
