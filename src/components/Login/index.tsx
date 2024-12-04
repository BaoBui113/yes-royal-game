import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { onLogin } from './actionLogin';
import toast from 'react-hot-toast';

const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
});

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: { username: string; password: string }) => {
        const formData = new FormData();
        formData.append('username', data.username);
        formData.append('password', data.password);
        const response = await onLogin(formData);
        if (response.status === "0") {
            toast.success("비밀번호가 일치하지 않습니다.");
        }
        toast.error("비밀번호 또는 사용자 이름이 올바르지 않습니다");


    };

    return (
        <section className="bg-[url('/assets/image/banner/member-logoff.png')] w-[430px] h-[400px] bg-no-repeat px-[30px] py-5">
            <form action={onLogin} onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                <input
                    {...register('username')}
                    name='username'
                    type="text"
                    className='absolute top-[38px] left-[80px] w-[130px] bg-transparent h-[17px] text-white px-2 border border-solid border-white text-xs'
                />
                {errors.username && <p className="text-red-500 absolute top-[60px] left-[80px]  text-xs">{errors.username.message}</p>}

                <input
                    {...register('password')}
                    name='password'
                    type="password"
                    className='absolute top-[80px] left-[80px] w-[130px] bg-transparent h-[17px] text-white px-2 border border-solid border-white text-xs'
                />
                {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}

                <input
                    style={{ textIndent: '-200%' }}
                    type="submit"
                    className="bg-[url('/assets/image/banner/login_btn.png')] w-[240px] h-10 absolute top-[110px] left-[30px] cursor-pointer overflow-hidden"
                />
            </form>

            <div className='text-[#d4b072] text-xs absolute top-[80px] right-[150px] cursor-pointer'>ID/PW찾기</div>
        </section>
    );
}