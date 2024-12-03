import Banner from '@/components/Banner';
import GameZone from '@/components/GameZone';
import Header from '@/components/Header';
import MoneyMenu from '@/components/MoneyMenu';
import Notice from '@/components/Notice';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <MoneyMenu />
      <GameZone />
      <Notice />
    </>
  );
}
