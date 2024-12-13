'use client';

import { useAuth } from '@/lib/context/AuthContext';
import { Button } from '@nextui-org/react';
import React, { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { handleActionSendPhoneSms } from '../actionSendPhoneSms';

export default function FormSendPhoneSms() {
  const { watch, control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      input1: '',
      input2: '',
      input3: '',
    },
  });
  const { user, setIsModalSendPhoneSms } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);
  const input3Ref = useRef<HTMLInputElement>(null);

  const input1 = watch('input1');
  const input2 = watch('input2');

  const onsubmit = async (data: {
    input1: string;
    input2: string;
    input3: string;
  }) => {
    const { input1, input2, input3 } = data;
    const phone = `${input1}${input2}${input3}`;
    if (!user) {
      console.error('User is not authenticated');

      return;
    }
    setIsLoading(true);
    const formData = new FormData();
    formData.append('username', user.MEM_LID);
    formData.append('phone', phone);
    const response = await handleActionSendPhoneSms(formData);
    if (!response?.status) {
      toast.error('오류가 발생했습니다. 나중에 다시 시도해 주세요');
      setIsLoading(false);
      return;
    }
    if (response.status === '0') {
      toast.success(response.message);
      setIsLoading(false);
      setIsModalSendPhoneSms(false);
      return;
    }
    setIsLoading(false);
    toast.error(response.message);
  };

  React.useEffect(() => {
    if (input1 && input1.length === 3) {
      if (input2Ref.current) {
        input2Ref.current.focus();
      }
    }
    if (input2 && input2.length === 4) {
      if (input3Ref.current) {
        input3Ref.current.focus();
      }
    }
  }, [input1, input2]);
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <h2
        style={{
          color: 'yellow',
        }}
        className="mb-4"
      >
        인증번호가 오지 않을경우 받을수 있는 전화번호로 변경해서 받으세요.
      </h2>
      <div className="bg-[url('/assets/image/black75.png')] rounded-[5px] border border-solid border-[#4c3023] overflow-auto flex">
        <span className="w-[150px] text-[#fdcc83] flex justify-center items-center text-sm">
          핸드폰번호
        </span>
        <div className="flex gap-2 p-2">
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
                      maxLength={3}
                      className="h-[26px] w-[80px] bg-[#060708] text-[#bd7a41] px-1 rounded text-xs custom-select"
                    />
                  </div>
                </div>
              </>
            )}
          />
          <span className="text-white">-</span>
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
                      maxLength={4}
                      className="h-[26px] w-[80px] bg-[#060708] text-[#bd7a41] px-1 rounded text-xs custom-select"
                    />
                  </div>
                </div>
              </>
            )}
          />
          <span className="text-white">-</span>
          <Controller
            name="input3"
            control={control}
            render={({ field }) => (
              <>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    <input
                      type="text"
                      {...field}
                      ref={input3Ref}
                      maxLength={4}
                      className="h-[26px] w-[80px] bg-[#060708] text-[#bd7a41] px-1 rounded text-xs custom-select"
                    />
                    <span className="text-[#948477] text-xs flex items-center">
                      * 인증번호를 받으신 핸드폰번호를 입력하세요.
                    </span>
                  </div>
                </div>
              </>
            )}
          />
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
