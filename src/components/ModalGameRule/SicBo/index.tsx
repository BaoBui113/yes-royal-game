import React from 'react';

const Tables = ({
  header,
  data,
}: {
  header: { key: string; value: string; classNameHeader?: string }[];
  data: {
    titleData?: string;
    data: { group?: Record<string, boolean> } & Record<string, string>[];
  }[];
}) => {
  return (
    <table className="w-full bg-[#4a3629] text-center border-collapse">
      <tbody>
        <tr className="bg-[#31231a] text-[#fdcc83] border border-solid border-[#4a3629] text-sm">
          {header.map((headerItem, index) => {
            return (
              <th
                key={index}
                className={`p-[10px] border border-solid border-[#4a3629] ${headerItem.classNameHeader}`}
              >
                {headerItem.value}
              </th>
            );
          })}
        </tr>
        {data.map((item, itemIndex) => {
          return (
            <React.Fragment key={itemIndex}>
              {item.titleData && (
                <tr className="bg-[#31231a]">
                  <th className="p-[10px] text-[#fdcc83]" colSpan={3}>
                    {item.titleData}
                  </th>
                </tr>
              )}
              {item.data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="p-1 bg-[#000] text-[#90553e] text-center"
                >
                  {header.map((headerItem, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`p-1 border-l border-r border-[#4a3629] ${
                        row.group === headerItem.key ? 'border-b-0' : 'border-b'
                      }`}
                    >
                      <span>{row[headerItem.key] || ''}</span>
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
export default function SicBo() {
  return (
    <>
      <ul className="pl-5 space-y-1 list-decimal marker:text-[#948477] my-[14px]">
        <li>
          식보 게임은 3개의 주사위로 하는 게임이며 카운트 다운 전에 플레이어가
          무엇을 배팅할지를 정하는 것입니다.
        </li>
        <li>
          카운트 다운이 끝나면 3개의 주사위는 잠시 흔들어지며 굴려진 후에 위로
          보여지는 면의 숫자 조합으로 결과를 정합니다.
        </li>
        <li>
          결과가 불분명하게 나왔을 때는 주사위를 다시 던집니다. 예를 들면
          주사위가 겹쳐져 윗면이 정확하게 나오지 않거나 게임결과가 부정확 할 때
          다시 던지게 됩니다.
        </li>
        <li>
          결과는 3개중 두 개의 주사위로 정해집니다. (크거나 작거나 혹은 짝수
          홀수)
        </li>
      </ul>

      <Tables
        header={[
          {
            key: 'type',
            value: 'Type of Bets',
            classNameHeader: 'w-[20%]',
          },
          {
            key: 'description',
            value: 'Description',
            classNameHeader: 'w-[60%]',
          },
          {
            key: 'payout',
            value: 'Payout',
            classNameHeader: 'w-[20%]',
          },
        ]}
        data={[
          {
            titleData: 'Specific total',
            data: [
              {
                type: 'Big',
                description: 'Sum of the numbers is from 11 to 17',
                payout: '1:1',
              },
              {
                type: 'Small',
                description: 'Sum of the numbers is from 4 to 10',
                payout: '1:1',
              },
              {
                type: 'Odd',
                description:
                  'Sum of the numbers is any of 5, 7, 9, 11, 13, 15, 17	',
                payout: '1:1',
              },
              {
                type: 'Even',
                description:
                  'Sum of the numbers is any of 4, 6, 8, 10, 12, 14, 16	',
                payout: '1:1',
              },
              {
                type: '4 or 17',
                description: 'Sum of the numbers is either 4 or 17',
                payout: '1:50',
              },
              {
                type: '5 or 16',
                description: 'Sum of the numbers is either 5 or 16',
                payout: '1:18',
              },
              {
                type: '6 or 15',
                description: 'Sum of the numbers is either 6 or 15',
                payout: '1:14',
              },
              {
                type: '7 or 14',
                description: 'Sum of the numbers is either 7 or 14',
                payout: '1:12',
              },
              {
                type: '8 or 13',
                description: 'Sum of the numbers is either 8 or 13',
                payout: '1:8',
              },
              {
                type: '9, 10, 11 or 12',
                description: 'Sum of the numbers is any of 9, 10, 11 or 12',
                payout: '1:6',
              },
            ],
          },
          {
            titleData: 'Combination bets',
            data: [
              {
                type: 'Specific Triple	',
                description:
                  'Three dice showing the same number which must be the specific number selected',
                payout: '1:150',
              },
              {
                type: 'Any Triple',
                description:
                  'Three dice showing the same number which can be any of six possible numbers',
                payout: '1:24',
              },
              {
                type: 'Specific Double',
                description:
                  'Two of the three dice must show the double selected',
                payout: '1:8',
              },
              {
                type: 'Pair Match',
                description:
                  'Two of the three dice must make the pair selected',
                payout: '1:5',
              },
              {
                type: 'Triple Match',
                description:
                  'Three dice must be the three of four numbers selected',
                payout: '1:7',
              },
              {
                type: '',
                description:
                  'One of three dice matches the number selected - Single',
                payout: '1:1',
                group: 'type',
              },
              {
                type: 'Number Match',
                description:
                  'Two of three dice match the number selected - Double',
                payout: '1:2',
                group: 'type',
              },
              {
                type: '',
                description:
                  'All three dice match the number selected - Triple',
                payout: '1:3',
              },
            ],
          },
        ]}
      />
    </>
  );
}
