import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import GameZone from '@/components/GameZone';
import Header from '@/components/Header';
import LoginForm from '@/components/Login/ModalLogin';
import MoneyMenu from '@/components/MoneyMenu';
import Notice from '@/components/Notice';

export default function Home() {
  return (
    <section className='relative'>

      <Header />
      <Banner />
      <MoneyMenu />
      <GameZone />
      <Notice />
      <Footer />
      <LoginForm />
    </section>
  );
}
