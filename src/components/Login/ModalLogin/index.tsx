'use client';
import React, { useState } from 'react';

import Modal from '@/components/CommonModal';
import { useAuth } from '@/lib/context/AuthContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { EyeFilledIcon } from '@/components/EyeFIlledIcon';
import { EyeSlashFilledIcon } from '@/components/EyeSlashFilledIcon';
import { Button, Input, Spinner } from '@nextui-org/react';
import toast from 'react-hot-toast';
import { onLogin } from '../actionLogin';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

export type FormLoginType = yup.InferType<typeof schema>;

export default function LoginForm() {
  const { isModalLoginOpen, setIsModalLoginOpen, login } = useAuth();
  const closeModal = () => setIsModalLoginOpen(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: FormLoginType) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('password', data.password);
    const response = await onLogin(formData);
    if (!response.status) {
      toast.error('오류가 발생했습니다. 나중에 다시 시도해 주세요');
      setIsLoading(false);
      return;
    }
    if (response.status === '0') {
      toast.success('비밀번호가 일치하지 않습니다');
      login(JSON.stringify(response));
      closeModal();
      setIsLoading(false);
      return;
    }
    toast.error('비밀번호 또는 사용자 이름이 올바르지 않습니다');
    setIsLoading(false);
  };
  return (
    <Modal
      className=" flex justify-center items-center flex-col"
      title="Login"
      isOpen={isModalLoginOpen}
      onClose={closeModal}
    >
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          rules={{ required: 'Tên người dùng là bắt buộc' }}
          render={({ field }) => (
            <Input
              {...field}
              variant="flat"
              className="text-white rounded mb-4"
              placeholder="아이디"
              title="아이디"
              errorMessage={errors.username?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: 'Mật khẩu là bắt buộc' }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="비밀번호"
              title="비밀번호"
              className="text-white rounded"
              errorMessage={errors.password?.message}
              type={isVisible ? 'text' : 'password'}
              endContent={
                <button
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="toggle password visibility"
                  className="text-black"
                >
                  {isVisible ? <EyeSlashFilledIcon /> : <EyeFilledIcon />}
                </button>
              }
            />
          )}
        />
        {isLoading ? (
          <div className="flex justify-center mt-4">
            <Spinner color="primary" />
          </div>
        ) : (
          <Button
            className="bg-blue-600 w-[130px] rounded-lg mt-4"
            type="submit"
          >
            Login
          </Button>
        )}
      </form>
    </Modal>
  );
}
