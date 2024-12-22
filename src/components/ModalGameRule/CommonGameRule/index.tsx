'use client';
import { useAuth } from '@/lib/context/AuthContext';
import Baccarat from '../Baccarat';
import BaccaratInsurance from '../Baccarat_Insurance';
import BlackJack from '../BlackJack';
import BullFight from '../BullFight';
import Caribbean from '../Caribbean';
import Crazy21 from '../Crazy21';
import Devil from '../Devil';
import DragonTiger from '../DragonTiger';
import Roulette from '../Roulette';
import SicBo from '../SicBo';
import TripleFaceCard from '../TripleFaceCard';

const listGameRule = [
  '바카라',
  '블랙잭',
  '룰렛',
  '식보',
  '드래곤타이거',
  '크레이지21',
  '바카라보험',
  '캐리비언스터드포커',
  'BullFight',
  '트리플 페이스카드',
  '마종',
];
export default function CommonGameRule() {
  const { setStatusGameRule, statusGameRule } = useAuth();
  return (
    <div className="bg-[url('/assets/image/black75.png')] rounded-[5px] border border-solid border-[#4c3023] overflow-auto p-5">
      <ul className="flex flex-wrap text-center justify-center text-sm">
        {listGameRule.map((item, inx) => {
          return (
            <li
              className={`relative h-6 flex items-center justify-center text-center cursor-pointer ${
                item === '마종'
                  ? ''
                  : "after:content-[''] after:h-4 after:w-[2px] after:bg-[#fdcc83] after:mx-2"
              } ${
                statusGameRule === inx + 1 ? 'text-[#fcffe0]' : 'text-[#fdcc83]'
              }`}
              onClick={() => setStatusGameRule(inx + 1)}
              key={inx}
            >
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
      <div className="bg-[#060708] border border-solid border-[#2f271e] p-2 overflow-auto my-[10px] mx-5 h-[320px] text-[#948477] text-sm custom-scroll-bar">
        {statusGameRule === 1 && <Baccarat />}
        {statusGameRule === 2 && <BlackJack />}
        {statusGameRule === 3 && <Roulette />}
        {statusGameRule === 4 && <SicBo />}
        {statusGameRule === 5 && <DragonTiger />}
        {statusGameRule === 6 && <Crazy21 />}
        {statusGameRule === 7 && <BaccaratInsurance />}
        {statusGameRule === 8 && <Caribbean />}
        {statusGameRule === 9 && <BullFight />}
        {statusGameRule === 10 && <TripleFaceCard />}
        {statusGameRule === 11 && <Devil />}
      </div>
    </div>
  );
}
