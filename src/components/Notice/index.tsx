import { getEvent, getFAQ, getNotice } from '@/app/services/bbs';
import NoticeDesktop from './NoticeDesktop';
import NoticeMobile from './NoticeMobile';

export default async function Notice() {
  const dataNotice = await getNotice({ limit: '6', page: '1' });
  const dataEvent = await getEvent({ limit: '6', page: '1' });
  const dataFAQ = await getFAQ({ limit: '6', page: '1' });
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
