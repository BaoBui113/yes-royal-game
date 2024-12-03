"use client"
import React, { useState } from 'react'


export default function Notice() {
    const [isHovered, setIsHovered] = useState('N');
    return (
        <section style={{
            backgroundPosition: 'center bottom',
        }} className="bottom bg-[url('/assets/image/notice/bottom_bg.png')] bg-[#362D26]">
            <div className='max-w-[1200px] mx-auto py-[50px] relative'>
                <div className='overflow-auto'>
                    <div className="bg-[url('/assets/image/notice/board_box.png')] h-[270px] w-[590px] float-left relative">
                        {/* N */}
                        <div id='board_N'>
                            <h2 onMouseLeave={() => setIsHovered("N")} onMouseEnter={() => setIsHovered("N")} className='w-[200px] h-[90px] relative'>
                                <a className="absolute top-0 right-0 left-0 bottom-0 overflow-hidden opacity-0 hover:opacity-100 bg-[url('/assets/image/notice/board_box_title.png')]" href=""></a>
                            </h2>
                            {
                                isHovered === 'N' && (
                                    <ul className='w-[380px] h-[250px] block'>
                                        <li className='px-[10px] leading-10 flex items-center'>
                                            <div className='w-[280px] h-[42px] float-left overflow-hidden'>
                                                <a style={{
                                                    textIndent: '-200%',
                                                }} className="text-[#dec492]" href="">SA게임 점검안내</a>
                                            </div>
                                            <div className='text-[#af8534] w-[80px] float-left text-xs text-right'>
                                                2021-09-09
                                            </div>
                                        </li>
                                    </ul>
                                )
                            }

                        </div>
                        {/* E */}
                        <div id='board_E'>
                            <h2 onMouseLeave={() => setIsHovered("N")} onMouseEnter={() => setIsHovered("E")} className='w-[200px] h-[90px] relative'>
                                <a className="absolute top-0 right-0 left-0 bottom-0 overflow-hidden opacity-0 hover:opacity-100 bg-[url('/assets/image/notice/board_box_title.png')]" href=""></a>
                            </h2>
                            {
                                isHovered === 'E' && (
                                    <ul className='w-[380px] h-[250px] block'>
                                        <li className='px-[10px] leading-10 flex items-center'>
                                            <div className='w-[280px] h-[42px] float-left overflow-hidden'>
                                                <a style={{
                                                    textIndent: '-200%',
                                                }} className="text-[#dec492]" href="">SA게임 점검안내 2222</a>
                                            </div>
                                            <div className='text-[#af8534] w-[80px] float-left text-xs text-right'>
                                                2021-09-09
                                            </div>
                                        </li>
                                    </ul>
                                )
                            }
                        </div>
                        {/* F */}
                        <div id='board_F'>
                            <h2 onMouseLeave={() => setIsHovered("N")} onMouseEnter={() => setIsHovered("F")} className='w-[200px] h-[90px] relative'>
                                <a className="absolute top-0 right-0 left-0 bottom-0 overflow-hidden opacity-0 hover:opacity-100 bg-[url('/assets/image/notice/board_box_title.png')]" href=""></a>
                            </h2>
                            {
                                isHovered === 'F' && (
                                    <ul className='w-[380px] h-[250px] block'>
                                        <li className='px-[10px] leading-10 flex items-center'>
                                            <div className='w-[280px] h-[42px] float-left overflow-hidden'>
                                                <a style={{
                                                    textIndent: '-200%',
                                                }} className="text-[#dec492]" href="">SA게임 점검안내 33</a>
                                            </div>
                                            <div className='text-[#af8534] w-[80px] float-left text-xs text-right'>
                                                2021-09-09
                                            </div>
                                        </li>
                                    </ul>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}