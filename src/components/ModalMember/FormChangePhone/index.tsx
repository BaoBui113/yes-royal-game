'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@nextui-org/react';
import { useEffect, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

const listRegionCode = [
  {
    value: '',
    label: '선택',
  },
  {
    value: '010',
    label: '010',
  },
  {
    value: '011',
    label: '011',
  },
  {
    value: '016',
    label: '016',
  },
  {
    value: '017',
    label: '017',
  },
  {
    value: '018',
    label: '018',
  },
  {
    value: '019',
    label: '019',
  },
  {
    value: '070',
    label: '070',
  },
];

const schema = yup.object().shape({
  input1: yup.string().optional().default(''),
  input2: yup.string().optional().default(''),
  new_phone: yup.string().optional().default(''),
  region_code: yup.string().optional().default(''),
  input3: yup.string().optional().default(''),
  input4: yup.string().optional().default(''),
});
export type FormDepositType = yup.InferType<typeof schema>;
export default function FormChangePhone() {
  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);

  //   const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    // formState: {  },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      new_phone: '',
      input1: '',
      input2: '',
    },
  });
  const input1 = watch('input1');

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
  useEffect(() => {
    if (input1 && input1.length === 2) {
      if (input2Ref.current) {
        input2Ref.current.focus();
      }
    }
  }, [input1]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-[url('/assets/image/black75.png')] rounded-[5px] border border-solid border-[#4c3023] overflow-auto">
        {/* Current Phones */}
        <div className="flex items-center p-[5px] border border-t border-dotted border-[#2f271e]">
          <p className="w-[150px] text-center text-[#fdcc83] text-xs font-bold">
            현재 휴대폰
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center">
              <div className="flex gap-2 text-[#948477] text-sm">
                <span>010</span>
                <span>-</span>
                <span>13</span>
              </div>
              <div className="flex gap-2 p-2 items-center">
                <Controller
                  name="input1"
                  control={control}
                  render={({ field }) => (
                    <>
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1">
                          <input
                            type="text"
                            {...field}
                            ref={input1Ref}
                            maxLength={2}
                            className="h-[26px] w-[80px] bg-[#060708] text-[#bd7a41] px-1 rounded text-xs custom-select"
                          />
                        </div>
                      </div>
                    </>
                  )}
                />
                <span className="text-white text-sm">-</span>
                <Controller
                  name="input2"
                  control={control}
                  render={({ field }) => (
                    <>
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-1">
                          <input
                            type="text"
                            {...field}
                            ref={input2Ref}
                            maxLength={2}
                            className="h-[26px] w-[80px] bg-[#060708] text-[#bd7a41] px-1 rounded text-xs custom-select"
                          />
                        </div>
                      </div>
                    </>
                  )}
                />
                <span className="text-[#948477] text-sm">56</span>
              </div>
            </div>
          </div>
        </div>
        {/* New Current phone */}
        <div className="flex items-center p-[5px] border border-t border-dotted border-[#2f271e]">
          <p className="w-[150px] text-center text-[#fdcc83] text-xs font-bold">
            변경할 휴대폰
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 p-2 items-center">
              <Controller
                name="region_code"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <select
                      {...field}
                      className="w-[60px] h-[26px] bg-[#060708] text-[#bd7a41] px-1 rounded cursor-pointer custom-select text-xs"
                    >
                      {listRegionCode.map((region) => (
                        <option key={region.value} value={region.value}>
                          {region.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              />
              <Controller
                name="input1"
                control={control}
                render={({ field }) => (
                  <>
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-1">
                        <input
                          type="text"
                          {...field}
                          ref={input1Ref}
                          maxLength={2}
                          className="h-[26px] w-[80px] bg-[#060708] text-[#bd7a41] px-1 rounded text-xs custom-select"
                        />
                      </div>
                    </div>
                  </>
                )}
              />
              <span className="text-white text-sm">-</span>
              <Controller
                name="input2"
                control={control}
                render={({ field }) => (
                  <>
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-1">
                        <input
                          type="text"
                          {...field}
                          ref={input2Ref}
                          maxLength={2}
                          className="h-[26px] w-[80px] bg-[#060708] text-[#bd7a41] px-1 rounded text-xs custom-select"
                        />
                      </div>
                    </div>
                  </>
                )}
              />
              <span className="text-[#948477] text-sm">
                * 번호변경시 새로운 핸드폰번호를 입력하세요.
              </span>
            </div>
          </div>
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
