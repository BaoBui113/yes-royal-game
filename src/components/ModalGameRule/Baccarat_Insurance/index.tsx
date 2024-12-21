import React from 'react';

const listBaccaratInsurance1 = [
  {
    title: 'A. 조건',
    data: [
      '뱅커에 배팅한 손님',
      '뱅커가 받은 처음 2장의 카드합 > 플레이어가 받은 처음 2장의 카드합',
      '뱅커 2장카드의 합이 4이상이며, 플레이어가 반드시 3번째 카드를 받아야만 하는 경우',
    ],
  },
  {
    title: 'B. 배팅방법',
    data: [
      '위의 3가지 조건을 모두 만족하는 경우 <뱅커인슈어런스배팅>을 할 수 있으며,',
      '인슈어런스배팅금액은 처음 뱅커에 배팅한 금액을 초과할 수 없습니다.승패규칙',
      ' <뱅커인슈어런스배팅>은 뱅커에 배팅한 사람이 자신의 배팅이 진 경우에도 그 손실을 상쇄하기 위한 목적이므로 최종결과가 <플레이어 승 = 뱅커 패> 또는 이에 준하는 경우에 한해서만 배당금을 받을 수 있습니다. 또한, <뱅커 인슈어런스 배팅>에 대한 배당률은 최초 2장의 카드를 각각 비교하였을 때 뱅커가 이길 확률이 높을수록 그 배당률도 높게 책정됩니다. 왜냐햐면, 최초 2장의 카드에서 뱅커합이 높아 이길 확률이 높다면 일반적으로 <뱅커 인슈어런스 배팅>을 할 이유가 없기 때문입니다.',
    ],
  },
];
const listBaccaratInsurance2 = [
  {
    title: 'A. 조건',
    data: [
      '뱅커에 배팅한 손님',
      '뱅커가 받은 처음 2장의 카드합 > 플레이어가 받은 최종카드 합',
      '뱅커가 반드시 3번째 카드를 받아야만 하는 경우',
    ],
  },
  {
    title: 'B. 배팅방법',
    data: [
      '위의 3가지 조건을 모두 만족하는 경우 <뱅커인슈어런스배팅>을 할 수 있으며,',
      '인슈어런스배팅금액은 처음 뱅커에 배팅한 금액을 초과할 수 없습니다.',
    ],
  },
  {
    title: 'C. 승패규칙',
    data: [
      `<뱅커인슈어런스배팅B>도 A와 마친가지로 뱅커에 배팅한 사람이 자신의 배팅이 진 경우에도 그 손실을 상쇄하기 위한 목적이므로 최종결과가 <플레이어 승 = 뱅커 패> 또는 이에 준하는 경우에 한해서만 배당금을 받을 수 있습니다.`,
    ],
  },
];
const listBaccaratInsurance3 = [
  {
    title: 'A. 조건',
    data: [
      '플레이어에 배팅한 손님',
      '플레이어가 받은 최종카드합 > 뱅커가 받은 처음 2장의 카드합',
      '플레이어 최종카드합이 4이상이며, 뱅커가 반드시 3번째 카드를 받아야만 하는 경우',
    ],
  },
  {
    title: 'B. 배팅방법',
    data: [
      '위의 3가지 조건을 모두 만족하는 경우 <플레이어 인슈어런스 배팅>을 할 수 있으며,',
      '인슈어런스배팅금액은 처음 플레이어에 배팅한 금액을 초과할 수 없습니다.',
    ],
  },
  {
    title: 'C. 승패규칙',
    data: [
      `<플레이어인슈어런스배팅>은 플레이어에 배팅한 사람이 자신의 배팅이 진 경우에도 그 손실을 상쇄하기 위한 목적이므로 최종결과가 <뱅커 승 = 플레이어 패> 또는 이에 준하는 경우에 한해서만 배당금을 받을 수 있습니다. 또한, <플레이어인슈어런스배팅>에 대한 배당률은 최종적으로 받은 플레이어의 총합과 최초 2장카드의 뱅커 총합을 각각 비교 하였을 때 플레이어가 이길 확률이 높을수록 그 배당률도 높게 책정됩니다. 왜냐햐면, 플레이어의 최종카드합이 높아 이길 확률이 높다면 일반적으로 <플레이어인슈어런스배팅> 을 이유가 없기 때문입니다.`,
    ],
  },
];
const Tables = ({
  data,
}: {
  data: {
    header: string;
    subHeader: { key: string; value: string }[];
    data: Record<string, string>[];
  }[];
}) => {
  return (
    <table className="w-full bg-[#4a3629] text-center border-collapse">
      <tbody>
        {data.map((table, tableIndex) => {
          return (
            <React.Fragment key={tableIndex}>
              <tr className="bg-[#31231a] text-[#fdcc83] border border-solid border-[#4a3629] text-sm">
                <th colSpan={4} className="p-[10px] text-[#fdcc83]">
                  {table.header}
                </th>
              </tr>
              <tr className="bg-[#31231a] text-[#fdcc83] border border-solid border-[#4a3629] text-sm">
                {table.subHeader.map((subHeader, subHeaderIndex) => (
                  <th
                    colSpan={table.subHeader.length === 2 ? 2 : 1}
                    key={subHeaderIndex}
                    className="p-[10px] border border-solid border-[#4a3629] text-[#fdcc83]"
                  >
                    {subHeader.value}
                  </th>
                ))}
              </tr>

              {table.data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="bg-[#000] text-[#90553e] border border-solid border-[#4a3629] text-center"
                >
                  {table.subHeader.map((subHeader, cellIndex) => (
                    <td
                      colSpan={table.subHeader.length === 2 ? 2 : 1}
                      key={cellIndex}
                      className="border border-solid border-[#4a3629] p-1"
                    >
                      {row[subHeader.key] || ''}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};
export default function BaccaratInsurance() {
  return (
    <>
      <p className="my-[14px]">
        {`바카라보험은 전통바카라와 동일한 게임룰을 갖고 있으면서 <인슈어런스 배팅>이라는 옵션을 추가하여, 손님이 자신이 건 배팅이 지더라도 <인슈어런스 배팅>이 맞는 경우 초기배팅손실을 어느 정도 상쇄할 수 있도록 고안된 바카라의 일종입니다.`}
        <br />
        {`<예를 들어, 블랙잭게임에서 Dealer가 블랙잭이 나올 것을 예상하여 핸디들이 인슈어런스에 배팅하는 것과 동일한 원리에서 유래했다고 이해하시면 됩니다.>`}
      </p>
      <p className="my-[14px]">
        {`우선, 전통바카라처럼 처음에는 각각, 두장의 카드를 플레이어와 뱅커에 딜링합니다.`}
        <br />
        {`이후, 손님은 <인슈어런스 배팅>을 할 수 있는 조건에 만족한 경우 <뱅커인슈어런스> 또는 <플레이어 인슈어런스>배팅을 할 수 있습니다. 만약, <인슈어런스 배팅>을 할 수 있는 조건에 부합되지 않는다면, <다른 플레이어가 배팅중입니다>라는 메시지가 나타나며, 해당 판에서는 <인슈어런스 배팅>을 할 수 없게 됩니다.`}
      </p>
      <p className="my-[14px]">{`따라서, <인슈어런스 배팅> 매판 배팅을 할 수 있는 것이 아니고 해당 판에서 플레이어와 뱅커가 2장의 카드를 각각 딜링 받은 후 일정조건에 부합하는 경우에만 배팅을 할 수 있는 옵션배팅입니다.`}</p>
      <p className="my-4 text-base font-bold">{`(1) 뱅커 인슈어런스 배팅 A (플레이어가 3번째 카드를 받는 경우)`}</p>
      {listBaccaratInsurance1.map((item, index) => {
        return (
          <div key={index}>
            <h3 className="my-[18px]">{item.title}</h3>
            <ul className="my-[14px]">
              {item.data.map((subItem, subIndex) => {
                return (
                  <li key={subIndex} className="marker:content-['-']">
                    {subItem}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <Tables
        data={[
          {
            header: '◈ 승패규칙 ◈',
            subHeader: [
              {
                key: 'result_game',
                value: '◈ 승패규칙 ◈',
              },
              {
                key: 'player_insurance',
                value: '플레이어 인슈어런스 배팅결과',
              },
            ],
            data: [
              {
                result_game: '뱅커 승',
                player_insurance: '승',
              },
              {
                result_game: '플레이어승',
                player_insurance: '패',
              },
              {
                result_game: '9타이',
                player_insurance: '승',
              },
              {
                result_game: '1~8타이',
                player_insurance: '타이',
              },
            ],
          },
          {
            header: '◈ 배당율 ◈',
            subHeader: [
              {
                key: 'player',
                value: '플레이어 (최종 카드합)',
              },
              {
                key: 'banker',
                value: '뱅커 (최초2장의 카드합)',
              },
              {
                key: 'rate',
                value: '배당율',
              },
            ],
            data: [
              {
                player: '4',
                banker: '0, 1, 2, 3',
                rate: '1배',
              },
              {
                player: '5',
                banker: '0, 1, 2, 3, 4',
                rate: '2배',
              },
              {
                player: '6',
                banker: '0, 1, 2, 3, 4, 5',
                rate: '2.5배',
              },
              {
                player: '7',
                banker: '0, 1, 2, 3, 4, 5, 6',
                rate: '4배',
              },
            ],
          },
        ]}
      />
      <p className="my-4 text-base font-bold">{`(2) 뱅커 인슈어런스 배팅 B (뱅커가 3번째 카드를 받는 경우)`}</p>
      {listBaccaratInsurance2.map((item, index) => {
        return (
          <div key={index}>
            <h3 className="my-[18px]">{item.title}</h3>
            <ul className="my-[14px]">
              {item.data.map((subItem, subIndex) => {
                return (
                  <li key={subIndex} className="marker:content-['-']">
                    {subItem}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <Tables
        data={[
          {
            header: '◈ 승패규칙 ◈',
            subHeader: [
              {
                key: 'result_game',
                value: '게임최종결과',
              },
              {
                key: 'player_insurance',
                value: '플레이어 인슈어런스 배팅결과',
              },
            ],
            data: [
              {
                result_game: '플레이어 승',
                player_insurance: '승',
              },
              {
                result_game: '뱅커 승',
                player_insurance: '패',
              },
              {
                result_game: '0타이',
                player_insurance: '승',
              },
              {
                result_game: '1~8타이',
                player_insurance: '타이',
              },
            ],
          },
          {
            header: '◈ 배당율 ◈',
            subHeader: [
              {
                key: 'player',
                value: '플레이어 (최종 카드합)',
              },
              {
                key: 'banker',
                value: '뱅커 (최초2장의 카드합)',
              },
              {
                key: 'rate',
                value: '배당율',
              },
            ],
            data: [
              {
                player: '0',
                banker: '1, 2, 3, 4, 5 ,6',
                rate: '8배',
              },
              {
                player: '1',
                banker: '2, 3, 4, 5 ,6',
                rate: '7배',
              },
              {
                player: '2',
                banker: '3, 4, 5 ,6',
                rate: '4배',
              },
              {
                player: '3',
                banker: '4',
                rate: '2.5배',
              },
              {
                player: '4',
                banker: '5',
                rate: '2배',
              },
            ],
          },
        ]}
      />
      <p className="my-4 text-base font-bold">{`(3) 플레이어 인슈어런스 배팅`}</p>
      {listBaccaratInsurance3.map((item, index) => {
        return (
          <div key={index}>
            <h3 className="my-[18px]">{item.title}</h3>
            <ul className="my-[14px]">
              {item.data.map((subItem, subIndex) => {
                return (
                  <li key={subIndex} className="marker:content-['-']">
                    {subItem}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <Tables
        data={[
          {
            header: '◈ 승패규칙 ◈',
            subHeader: [
              {
                key: 'result_game',
                value: '게임최종결과',
              },
              {
                key: 'player_insurance',
                value: '플레이어 인슈어런스 배팅결과',
              },
            ],
            data: [
              {
                result_game: '플레이어 승',
                player_insurance: '승',
              },
              {
                result_game: '뱅커 승',
                player_insurance: '패',
              },
              {
                result_game: '0타이',
                player_insurance: '승',
              },
              {
                result_game: '1~8타이',
                player_insurance: '타이',
              },
            ],
          },
          {
            header: '◈ 배당율 ◈',
            subHeader: [
              {
                key: 'player',
                value: '플레이어 (최종 카드합)',
              },
              {
                key: 'banker',
                value: '뱅커 (최초2장의 카드합)',
              },
              {
                key: 'rate',
                value: '배당율',
              },
            ],
            data: [
              {
                player: '4',
                banker: '0, 1, 2, 3',
                rate: '1배',
              },
              {
                player: '5',
                banker: '0, 1, 2, 3, 4',
                rate: '2배',
              },
              {
                player: '6',
                banker: '0, 1, 2, 3, 4, 5',
                rate: '2.5배',
              },
              {
                player: '7',
                banker: '0, 1, 2, 3, 4, 5, 6',
                rate: '4배',
              },
              {
                player: '8',
                banker: '0, 1, 2, 3, 4, 5, 6',
                rate: '7배',
              },
              {
                player: '9',
                banker: '0, 1, 2, 3, 4, 5, 6',
                rate: '8배',
              },
            ],
          },
        ]}
      />
    </>
  );
}
