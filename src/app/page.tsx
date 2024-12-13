import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Sidebar from '@/components/ModalSideBarMobile';
import MoneyMenu from '@/components/MoneyMenu';

export default function Home() {
  return (
    <section className="relative">
      <Header />
      <Sidebar />
      <Banner />
      <MoneyMenu />
      {/* <GameZone />
      <Notice />
      <Footer />
      <LoginForm />
      <Deposit />
      <ModalNoticeDeposit />
      <ModalWithDraw />
      <SendPhoneSms /> */}
    </section>
  );
}
