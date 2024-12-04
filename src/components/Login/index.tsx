import React from 'react'

export default function Login() {
    return (
        <section className="bg-[url('/assets/image/banner/member-logoff.png')] w-[430px] h-[400px] bg-no-repeat px-[30px] py-5">
            <input type="text" className='absolute top-[38px] left-[80px] w-[130px] bg-transparent h-[17px] text-white px-2 border border-solid border-white text-xs' />
            <input type="password" className='absolute top-[80px] left-[80px] w-[130px] bg-transparent h-[17px] text-white px-2 border border-solid border-white text-xs' />
            <input style={{
                textIndent: '-200%'
            }} type="submit" className="bg-[url('/assets/image/banner/login_btn.png')] w-[240px] h-10 absolute top-[110px] left-[30px] cursor-pointer overflow-hidden" />
            <div className='text-[#d4b072] text-xs absolute top-[80px] right-[150px] cursor-pointer'>ID/PW찾기</div>
        </section>
    )
}
