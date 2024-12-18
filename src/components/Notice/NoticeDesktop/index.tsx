import { IBoard } from '@/lib/type';
import ListEvent from '../ListEvent';
import OtherMenu from '../OtherMenu';
import RankRealTime from '../RankRealtime';

export default function NoticeDesktop({
  dataNotice,
  dataEvent,
  dataFAQ,
}: {
  dataNotice: IBoard[];
  dataEvent: IBoard[];
  dataFAQ: IBoard[];
}) {
  return (
    <section
      style={{
        backgroundPosition: 'center bottom',
      }}
      className="bottom bg-[url('/assets/image/notice/bottom_bg.png')] bg-[#362D26] xl:block hidden"
    >
      <div className="max-w-[1200px] mx-auto py-[50px] relative">
        <div className="overflow-auto box">
          <ListEvent
            dataNotice={dataNotice}
            dataEvent={dataEvent}
            dataFAQ={dataFAQ}
          />
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
