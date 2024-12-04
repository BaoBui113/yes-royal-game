import Image from 'next/image'
import React from 'react'
const footers =
    [
        {
            title: 'MEMBER MENU',
            data:
                [
                    {
                        title: '로그인',
                        link: ''
                    }
                ]
        },
        {
            title: 'SITE MENU',
            data:
                [
                    {
                        title: '입금신청',
                        link: ''
                    },
                    {
                        title: '출금신청',
                        link: ''
                    },
                    {
                        title: '이벤트신청',
                        link: ''
                    },
                ]
        },
        {
            title: 'BOARD',
            data:
                [
                    {
                        title: '공지사항',
                        link: ''
                    },
                    {
                        title: '이벤트안내',
                        link: ''
                    },
                    {
                        title: '자주묻는질문',
                        link: ''
                    },
                    {
                        title: '랭킹',
                        link: ''
                    },
                ]
        },
        {
            title: 'OTHER MENU',
            data:
                [
                    {
                        title: '1인보안계좌',
                        link: ''
                    },
                    {
                        title: '1:1원격지원',
                        link: ''
                    },
                    {
                        title: 'PC안전지킴이',
                        link: ''
                    },
                    {
                        title: '모바일서비스',
                        link: ''
                    },
                    {
                        title: '파트너제휴',
                        link: ''
                    },
                ]
        },
        {
            title: 'HOW TO PLAY',
            data: [
                { title: '바카라', link: '' },
                { title: '블랙잭', link: '' },
                { title: '룰렛', link: '' },
                { title: '식보', link: '' },
                { title: '드래곤타이거', link: '' },
                { title: '크레이지21', link: '' },
                { title: '바카라보험', link: '' },
                { title: '캐리비언스터드포커', link: '' },
                { title: 'BullFight', link: '' },
                { title: '트리플페이스카드', link: '' },
                { title: '마종', link: '' },
            ],
        },
    ]
export default function Footer() {
    return (
        <section className="bg-black">
            <nav className="max-w-[1200px] mx-auto py-[30px]">
                <ul className="flex">
                    {footers.map((item, inx) => (
                        <li key={inx} className="mx-7">
                            <span className="text-[#bda179] font-bold mb-[10px] text-sm block">
                                {item.title}
                            </span>
                            {item.title === 'HOW TO PLAY' ? (
                                <ul className="grid grid-cols-2">
                                    {item.data.map((subItem, subInd) => (
                                        <li key={subInd}>
                                            <span className="text-[#67563E] text-xs">{subItem.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <ul>
                                    {item.data.map((subItem, subInd) => (
                                        <li key={subInd}>
                                            <span className="text-[#67563E] text-xs">{subItem.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    <div className='relative w-[300px] h-[150px] ml-7'>
                        <Image src={"/assets/image/footer/footer_logo.png"} alt='logo' fill className='object-cover' />
                    </div>
                </ul>
                <p className='text-[#67563E] mt-[60px] mb-[70px] text-center'>Copyright® YES CASINO. ALL RIGHT RESERVED.</p>
            </nav>
        </section>
    )
}
