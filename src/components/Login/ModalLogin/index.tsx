"use client"
import React, { useState } from 'react';


import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '@/lib/context/AuthContext';
import Modal from '@/components/CommonModal';

import { EyeSlashFilledIcon } from '@/components/EyeSlashFilledIcon';
import { EyeFilledIcon } from '@/components/EyeFIlledIcon';
import { Button, Input, Spinner } from '@nextui-org/react';
import { onLogin } from '../actionLogin';
import toast from 'react-hot-toast';

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
});

export type FormLoginType = yup.InferType<typeof schema>;

export default function LoginForm() {
    const { isModalLoginOpen, setIsModalLoginOpen, login } = useAuth();
    const closeModal = () => setIsModalLoginOpen(false);
    const [isVisible, setIsVisible] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = async (data: FormLoginType) => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('username', data.username);
        formData.append('password', data.password);
        const response = await onLogin(formData);
        if (response.status === "0") {
            toast.success("비밀번호가 일치하지 않습니다");
            login(JSON.stringify(response));
            closeModal();
            setIsLoading(false);
            return;
        }
        toast.error("비밀번호 또는 사용자 이름이 올바르지 않습니다");
        setIsLoading(false);
        // setIsLoading(true);
        // await handleLogin(data).then((res) => {
        //     if (res.status === '0') {
        //         const authUser = JSON.stringify({
        //             GAME_ALIAS: res.GAME_ALIAS,
        //             HP_NO: res.HP_NO,
        //             MEM_ID: res.MEM_ID,
        //             MEM_LID: res.MEM_LID,
        //         })
        //         login(authUser);
        //         toast.success('Login Success');
        //         onOpenChangeLogin();
        //     }
        //     else {
        //         toast.error(res.message);
        //     }
        //     setIsLoading(false);
        // }).catch((error) => {
        //     console.log("error", error);
        //     setIsLoading(false);
        // });

    };
    return (
        <Modal title='Login' isOpen={isModalLoginOpen} onClose={closeModal}>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="username"
                    control={control}
                    rules={{ required: "Tên người dùng là bắt buộc" }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            variant='flat'
                            className='border-solid border-black text-white rounded mb-4 border'
                            placeholder="아이디"
                            title='아이디'
                            errorMessage={errors.username?.message}

                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: "Mật khẩu là bắt buộc" }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            placeholder="비밀번호"
                            title='비밀번호'
                            className='text-white border-solid border-black rounded border'
                            errorMessage={errors.password?.message}
                            type={isVisible ? "text" : "password"}
                            endContent={
                                <button
                                    type="button"
                                    onClick={toggleVisibility}
                                    aria-label="toggle password visibility"
                                    className='text-black'

                                >
                                    {isVisible ? <EyeSlashFilledIcon /> : <EyeFilledIcon />}
                                </button>
                            }
                        />
                    )}
                />
                {isLoading ? <div className='flex justify-center'><Spinner /></div> : <Button className='bg-blue-600 w-[130px] rounded-lg mt-4' type="submit">Login</Button>}

            </form>
        </Modal>
    );
}