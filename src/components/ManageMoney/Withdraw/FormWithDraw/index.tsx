'use client';
import { listAmount, listGames } from '@/lib/constants';
import { useAuth } from '@/lib/context/AuthContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { handleActionWithDraw } from '../actionWithDraw';

const schema = yup.object().shape({
  game: yup.string().required('Game is required'),
  deposit_name: yup.string().required('Deposit name is required'),
  comment: yup.string().required('Comment is required'),
  amount: yup
    .number()
    .typeError('Amount must be a number')
    .required('Amount is required')
    .min(50000, 'Amount must be at least 50,000')
    .max(10000000, 'Amount must be at most 10,000,000')
    .test(
      'is-multiple-of-10000',
      'Amount must be a multiple of 10,000',
      (value) => {
        return value % 10000 === 0;
      },
    ),
});
export type FormDepositType = yup.InferType<typeof schema>;
export default function FormWithDraw() {
  const { user, closeModal } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      amount: 50000,
      deposit_name: '',
    },
  });
  const onSubmit = async (data: FormDepositType) => {
    if (!user) {
      console.error('User is not authenticated');

      return;
    }
    setIsLoading(true);
    const formData = new FormData();
    formData.append('username', user.MEM_LID);
    formData.append('game', data.game);
    formData.append('amount', data.amount.toString());
    formData.append('deposit_name', data.deposit_name);
    formData.append('comment', data.comment);
    const response = await handleActionWithDraw(formData);
    if (!response?.status) {
      toast.error('오류가 발생했습니다. 나중에 다시 시도해 주세요');
      setIsLoading(false);
      return;
    }
    if (response.status === '0') {
      toast.success(response.message);
      setIsLoading(false);
      closeModal();
      return;
    }
    setIsLoading(false);
    toast.error(response.message);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-[url('/assets/image/black75.png')] rounded-[5px] border border-solid border-[#4c3023] overflow-auto">
        {/* Select game */}
        <div className="flex items-center p-[5px]">
          <p className="w-[150px] text-center text-[#fdcc83] text-xs font-bold">
            신청게임
          </p>
          <Controller
            name="game"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <select
                  {...field}
                  className="w-[150px] h-[26px] bg-[#060708] text-[#bd7a41] px-1 rounded cursor-pointer custom-select text-xs"
                >
                  {listGames.map((game) => (
                    <option key={game.key} value={game.key}>
                      {game.label}
                    </option>
                  ))}
                </select>
                {errors.game && (
                  <p className="text-red-500 text-xs">{errors.game.message}</p>
                )}
              </div>
            )}
          />
        </div>
        {/* Price number */}
        <div className="flex items-center p-[5px] border border-t border-dotted border-[#2f271e]">
          <p className="w-[150px] text-center text-[#fdcc83] text-xs font-bold">
            입금하실 금액
          </p>
          <Controller
            name="amount"
            control={control}
            render={({ field }) => (
              <>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    <input
                      type="text"
                      {...field}
                      className="h-[26px] w-[120px] bg-[#060708] text-[#bd7a41] px-1 rounded text-xs custom-select"
                    />
                    {listAmount.map((amount, inx) => {
                      return (
                        <button
                          type="button"
                          onClick={() => field.onChange(amount.value)}
                          className="bg-[#060708] text-[#bd7a41] px-1 rounded text-xs custom-select"
                          key={inx}
                        >
                          {amount.label}
                        </button>
                      );
                    })}
                  </div>
                  {errors.amount && (
                    <p className="text-red-500 text-xs">
                      {errors.amount.message}
                    </p>
                  )}
                  <span className="text-[#948477] text-xs">
                    * 입금 최소 금액은 3만원입니다.
                  </span>
                </div>
              </>
            )}
          />
        </div>
        {/* Deposit name */}
        <div className="flex items-center p-[5px] border border-t border-dotted border-[#2f271e]">
          <p className="w-[150px] text-center text-[#fdcc83] text-xs font-bold">
            입금자명
          </p>
          <Controller
            name="deposit_name"
            control={control}
            render={({ field }) => (
              <>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1 items-center">
                    <input
                      type="text"
                      {...field}
                      className="h-[26px] w-[120px] bg-[#060708] text-[#bd7a41] px-1 rounded text-xs custom-select"
                    />
                    <p className="text-[#948477] text-xs">
                      * 입,출금계좌{' '}
                      <span className="text-[#FFA500]">
                        동일하지 않은 경우에는
                      </span>{' '}
                      출금제한 있을수 있으니 꼭 동일하게 사용해주세요!
                    </p>
                  </div>
                  {errors.deposit_name && (
                    <p className="text-red-500 text-xs">
                      {errors.deposit_name.message}
                    </p>
                  )}
                </div>
              </>
            )}
          />
        </div>
        {/* Comment */}
        <div className="flex items-center p-[5px] border border-t border-dotted border-[#2f271e]">
          <p className="w-[150px] text-center text-[#fdcc83] text-xs font-bold">
            입금자명
          </p>
          <div className="flex-1">
            <Controller
              name="comment"
              control={control}
              render={({ field }) => (
                <>
                  <div className="flex flex-col gap-1">
                    <textarea
                      {...field}
                      className="h-[60px] w-full bg-[#060708] text-[#bd7a41] px-1 rounded text-xs custom-select"
                    />
                    <p className="text-[#948477] text-xs">
                      * 보편적으로 23:50 ~ 00:30, 휴일 다음 첫 영업일 새벽에는
                      계좌이체가 지원되지 않습니다. <br />* 위 시간 이외
                      씨티은행, 농협, 우체국은 추가적 점검시간이 따로 있으니
                      유념하시기 바랍니다
                    </p>

                    {errors.comment && (
                      <p className="text-red-500 text-xs">
                        {errors.comment.message}
                      </p>
                    )}
                  </div>
                </>
              )}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <Button
          isLoading={isLoading}
          type="submit"
          className="px-4 py-2 bg-[#fdcc83] text-[#060708] rounded hover:bg-[#e0b567]"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
