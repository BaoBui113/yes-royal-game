'use client';
import MoneyMenuDesktop from './MoneyMenuDesktop';
import MoneyMenuMobile from './MoneyMenuMobile';
export default function MoneyMenu() {
  return (
    <section>
      <MoneyMenuDesktop />
      <MoneyMenuMobile />
    </section>
  );
}
