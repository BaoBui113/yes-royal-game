import React from 'react'

const listHref = [
    { href: '#', title: '출금랭킹' },
    { href: '#', title: '카지노 소개', subHref: [{ href: '#', title: 'SA GAME' }, { href: '#', title: 'M GAME' }] },
    { href: '#', title: '이용가이드', subHref: [{ href: '#', title: 'H GAME' }, { href: '#', title: 'W GAME' }, { href: '#', title: 'S GAME' }, { href: '#', title: 'M GAME' }, { href: '#', title: 'M SLOT GAME' }] },
    { href: '#', title: '게임방법' },
    { href: '#', title: '자주묻는질문' },
    { href: '#', title: '이벤트' },
    { href: '#', title: '공지사항' },
]

export default function HeaderBottom() {
    return (
        <div className='bg-[#181818]'>
            <div className="container h-[120px] relative z-50">
                <div className="w-[500px] h-[120px] absolute top-0 -left-[80px] overflow-hidden bg-[url('/assets/image/header/header_logo.jpg')]">
                    <div className="w-[264px] h-[120px] top-1 left-20 absolute bg-[url('/assets/image/header/header_logo.gif')]"></div>
                </div>
                <ul className='absolute right-0 top-1/2 -translate-y-1/2 text-white sitemenu'>
                    {listHref.map((item, inx) => {
                        return (
                            <li className="bg-[url('/assets/image/header/sitemenu.png')] relative h-[60px] float-left" key={inx}>
                                <a style={{
                                    textIndent: '-200%',
                                }} className="block opacity-0 overflow-hidden absolute top-0 left-0 right-0 bottom-0 bg-[url('/assets/image/header/sitemenu.png')] transition-all ease-in .2s" href="">{item.title}
                                </a>
                                {item.subHref &&
                                    <ul style={{
                                        width: 'calc(100% + 40px)',
                                    }} className='flex flex-col opacity-0 transition-all ease-in .6s justify-center absolute opacity-1 left-1/2 -translate-x-1/2 -bottom-[80px] bg-black text-center rounded-[10px] min-h-[80px]'>
                                        {item.subHref.map((subItem, subIdx) => {
                                            return (
                                                <li key={subIdx}>
                                                    <a className='text-[#7a5a3d] block h-6 leading-6 overflow-hidden text-xs hover:bg-[#333] hover:text-[#e2c396] w-full' href="">{subItem.title}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>

                                }
                            </li>
                        )
                    })}
                </ul>

            </div>
        </div>

    )
}
