'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  password: yup.string().required('Password is required'),
  new_password: yup.string().required('New password is required'),
  confirm_password: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('new_password'), ''], 'Passwords must match'),
});
export type FormDepositType = yup.InferType<typeof schema>;
export default function FormUserRegister() {
  //   const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      password: '',
      new_password: '',
      confirm_password: '',
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
            name="password"
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
                      * 현재 사용하고 계시는 비밀번호를 입력하세요.
                    </span>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </>
            )}
          />
        </div>
        {/* New password */}
        <div className="flex items-center px-[5px] py-2  border border-t border-dotted border-[#2f271e]">
          <p className="w-[150px] text-center text-[#fdcc83] text-xs font-bold">
            새로운 비밀번호
          </p>
          <Controller
            name="new_password"
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
                  {errors.new_password && (
                    <p className="text-red-500 text-xs">
                      {errors.new_password.message}
                    </p>
                  )}
                </div>
              </>
            )}
          />
        </div>
        {/* Confirm Password */}
        <div className="flex items-center px-[5px] py-2  border border-t border-dotted border-[#2f271e]">
          <p className="w-[150px] text-center text-[#fdcc83] text-xs font-bold">
            새로운비밀번호 확인
          </p>
          <Controller
            name="confirm_password"
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
                    <span className="text-[#948477] text-sm">
                      * 새로운 비밀번호를 다시 한번 입력하세요.
                    </span>
                  </div>
                  {errors.confirm_password && (
                    <p className="text-red-500 text-xs">
                      {errors.confirm_password.message}
                    </p>
                  )}
                </div>
              </>
            )}
          />
        </div>
        <div className="flex items-center px-[5px] py-2">
          <p className="w-[150px] text-center text-[#fdcc83] text-xs font-bold">
            추천인 아이디
          </p>
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
