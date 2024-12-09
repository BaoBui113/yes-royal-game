import { BRAND_ID } from '@/lib/constants';
import { customFetch } from '@/lib/helper/customFetch';
import { IDepositProps } from '@/lib/type';

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
    console.log('deposit', deposit);

    return deposit;
  } catch (error) {
    console.log('In ra ma loi error', error);
  }
};
