import React from 'react';

export default function RankRealTime({
  title,
  props,
}: {
  title: string;
  props: React.CSSProperties;
}) {
  return (
    <section className="bg-[url('/assets/image/rank/rank_bg.png')] h-[270px] w-[300px] float-left ml-1 relative">
      <h2>
        <a
          style={{
            textIndent: '-200%',
            ...props,
          }}
          className="bg-[url('/assets/image/rank/rank_title.png')] w-[140px] h-[30px] overflow-hidden block mt-[15px] ml-[70px] absolute"
          href=""
        >
          {title}
        </a>
      </h2>
      <div className="absolute top-[61px] left-[15px] right-[15px] bottom-[15px] overflow-hidden">
        <span className="border-b-[1px] border-solid border-[#2f2719] block p-[10px] w-fit">
          게시물이 없습니다.
        </span>
      </div>
    </section>
  );
}
