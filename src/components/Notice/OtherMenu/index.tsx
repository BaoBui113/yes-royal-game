import React from 'react';
const otherMenu = [
  {
    title: '1:1보안계좌',
    link: '',
  },
  {
    title: '1:1보안계좌',
    link: '',
  },
  {
    title: 'PC안전지킴이',
    link: '',
  },
  {
    title: '모바일서비스',
    link: '',
  },
];
export default function OtherMenu() {
  return (
    <section className="othermenu overflow-auto">
      <ul>
        {otherMenu.map((item, inx) => {
          return (
            <li
              className="bg-[url('/assets/image/rank/othermenu.png')] float-left w-[180px] h-[180px] relative"
              key={inx}
            >
              <a
                style={{
                  textIndent: '-200%',
                }}
                className="bg-[url('/assets/image/rank/othermenu.png')] block absolute top-0 left-0 right-0 bottom-0 overflow-hidden opacity-0"
                href={item.link}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
