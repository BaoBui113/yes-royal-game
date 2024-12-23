'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  bank: yup.string().required('Bank is required'),
  holder: yup.string().required('Holder is required'),
  account_number: yup.string().required('Account is required'),
});
export type FormDepositType = yup.InferType<typeof schema>;
export default function FormManageAccount({
  bankList,
  holder,
}: {
  bankList: { BANK_CD: number; BANK_NM: string }[];
  holder: { BANK_CD?: number; ACC_NAME?: string };
}) {
  //   const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      bank: '',
      holder: `${holder?.ACC_NAME}${holder?.BANK_CD}` || '',
      account_number: '',
    },
  });
  const onSubmit = async (data: FormDepositType) => {
    console.log(data);

    // if (!user) {
    //   console.error('User is not authenticated');
    //   return;
    // }
    // setIsLoading(true);
    // const formData = new FormData();
    // formData.append('username', user.MEM_LID);
    // formData.append('game', data.game);
    // formData.append('amount', data.amount.toString());
    // formData.append('deposit_name', data.deposit_name);
    // formData.append('comment', data.comment);
    // const response = await handleActionDeposit(formData);
    // if (!response?.status) {
    //   toast.error('오류가 발생했습니다. 나중에 다시 시도해 주세요');
    //   setIsLoading(false);
    //   return;
    // }
    // if (response.status === '0') {
    //   toast.success(response.message);
    //   setIsLoading(false);
    //   setIsModalDepositOpen(false);
    //   return;
    // }
    // setIsLoading(false);
    // toast.error(response.message);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-[url('/assets/image/black75.png')] rounded-[5px] border border-solid border-[#4c3023] overflow-auto">
        {/* Password */}
        <div className="flex items-center px-[5px] py-2 border border-t border-dotted border-[#2f271e]">
          <p className="w-[150px] text-center text-[#fdcc83] text-xs font-bold">
            현재비밀번호
          </p>
          <Controller
            name="bank"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <select
                  {...field}
                  className="w-[120px] h-[26px] bg-[#060708] text-[#bd7a41] px-1 rounded cursor-pointer custom-select text-xs"
                >
                  <option className="text-center" value="">
                    --선택--
                  </option>
                  {bankList.length > 0 &&
                    bankList.map((bank) => (
                      <option
                        className="text-center"
                        key={bank.BANK_CD}
                        value={bank.BANK_CD}
                      >
                        {bank.BANK_NM}
                      </option>
                    ))}
                </select>
                {errors.bank && (
                  <p className="text-red-500 text-xs">{errors.bank.message}</p>
                )}
              </div>
            )}
          />
        </div>
        {/* Holder */}
        <div className="flex items-center px-[5px] py-2  border border-t border-dotted border-[#2f271e]">
          <p className="w-[150px] text-center text-[#fdcc83] text-xs font-bold">
            예금주
          </p>
          <Controller
            name="holder"
            control={control}
            render={({ field }) => (
              <>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      {...field}
                      className="h-[26px] w-[120px] bg-[#060708] text-[#bd7a41] px-1 rounded text-xs custom-select"
                    />
                    <span className="text-[#948477] text-sm">
                      {' '}
                      * 새로운 비밀번호를 입력하세요.
                    </span>
                  </div>
                  {errors.holder && (
                    <p className="text-red-500 text-xs">
                      {errors.holder.message}
                    </p>
                  )}
                </div>
              </>
            )}
          />
        </div>
        {/* Account number */}
        <div className="flex items-center px-[5px] py-2  border border-t border-dotted border-[#2f271e]">
          <p className="w-[150px] text-center text-[#fdcc83] text-xs font-bold">
            새로운비밀번호 확인
          </p>
          <Controller
            name="account_number"
            control={control}
            render={({ field }) => (
              <>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      {...field}
                      className="h-[26px] w-[120px] bg-[#060708] text-[#bd7a41] px-1 rounded text-xs custom-select"
                    />
                  </div>
                  {errors.account_number && (
                    <p className="text-red-500 text-xs">
                      {errors.account_number.message}
                    </p>
                  )}
                </div>
              </>
            )}
          />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button
          //   isLoading={isLoading}
          type="submit"
          className="px-4 py-2 bg-[#fdcc83] text-[#060708] rounded hover:bg-[#e0b567]"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
