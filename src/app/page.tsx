import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import GameZone from '@/components/GameZone';
import Header from '@/components/Header';
import LoginForm from '@/components/Login/ModalLogin';
import Deposit from '@/components/ManageMoney/Deposit';
import ModalNoticeDeposit from '@/components/ManageMoney/Deposit/ModalNoticeDeposit';
import SendPhoneSms from '@/components/ManageMoney/SendPhoneSms';
import ModalWithDraw from '@/components/ManageMoney/Withdraw';
import ModalInfoMember from '@/components/ModalInfoMember';
import SidebarAuthMobile from '@/components/ModalSidebarAuth';
import Sidebar from '@/components/ModalSideBarMobile';
import MoneyMenu from '@/components/MoneyMenu';
import Notice from '@/components/Notice';

export default function Home() {
  return (
    <section className="relative">
      <Header />
      <Sidebar />
      <SidebarAuthMobile />
      <Banner />
      <MoneyMenu />
      <GameZone />
      <Notice />
      <Footer />
      <LoginForm />
      <Deposit />
      <ModalNoticeDeposit />
      <ModalWithDraw />
      <SendPhoneSms />
      <ModalInfoMember />
    </section>
  );
}
