import React from 'react';
const listMoneyMenu =
  [
    {
      href: '',
      title: '입금신청'
    },
    {
      href: '',
      title: '출금신청'
    },
    {
      href: '',
      title: '입출금내역'
    },
    {
      href: '',
      title: '충전내역'
    },
    {
      href: '',
      title: '환전내역'
    },
    {
      href: '',
      title: '환전신청'
    }
  ]
export default function MoneyMenu() {
  return (
    <section className="moneymenu h-[100px] overflow-hidden bg-[url('/assets/image/money/moneymenu_bg.jpg')] relative">
      <h2 className='hidden'>SITE MENU</h2>
      <ul className='max-w-[1510px] mx-auto flex'>
        {
          listMoneyMenu.map((item, inx) => {
            return (
              <li className='h-[100px] relative' key={inx}>
                <a className="bg-[url('/assets/image/money/moneymenu_icon.png')] overflow-hidden block bg-[#000000] bg-no-repeat absolute top-0 left-0 right-0 bottom-0" style={{
                  textIndent: '-200%',
                }} href="">
                  {item.title}
                </a>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}
