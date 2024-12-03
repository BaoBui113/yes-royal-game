import React from 'react';
import ListEvent from './ListEvent';
import RankRealTime from './RankRealtime';
import OtherMenu from './OtherMenu';

export default function Notice() {
  return (
    <section
      style={{
        backgroundPosition: 'center bottom',
      }}
      className="bottom bg-[url('/assets/image/notice/bottom_bg.png')] bg-[#362D26]"
    >
      <div className="max-w-[1200px] mx-auto py-[50px] relative">
        <div className="overflow-auto box">
          <ListEvent />
          <RankRealTime
            title="실시간 출금현황"
            props={{
              backgroundPosition: '0px 0px',
            }}
          />
          <RankRealTime
            title="금주출금랭킹"
            props={{
              backgroundPosition: '-140px 0px',
            }}
          />
        </div>
        <OtherMenu />
      </div>
    </section>
  );
}
