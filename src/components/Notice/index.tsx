import { getEvent, getFAQ, getNotice } from '@/app/services/bbs';
import NoticeDesktop from './NoticeDesktop';
import NoticeMobile from './NoticeMobile';

export default async function Notice() {
  const dataNotice = await getNotice();
  const dataEvent = await getEvent();
  const dataFAQ = await getFAQ();
  return (
    <>
      <NoticeDesktop
        dataNotice={dataNotice.list}
        dataEvent={dataEvent.list}
        dataFAQ={dataFAQ.list}
      />
      <NoticeMobile
        dataNotice={dataNotice.list}
        dataEvent={dataEvent.list}
        dataFAQ={dataFAQ.list}
      />
    </>
  );
}
