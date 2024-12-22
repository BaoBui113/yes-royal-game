const Tables = ({
  headerTitle,
  subHeaders,
  contentHeader,
  data,
}: {
  headerTitle: string;
  subHeaders?: string[];
  contentHeader: { key: string; value: string; className?: string }[];
  data: Record<string, string>[];
}) => {
  return (
    <table className="w-full bg-[#4a3629] text-center border-collapse">
      <tbody>
        <tr className="bg-[#31231a] text-[#fdcc83] border border-solid border-[#4a3629] text-sm">
          <th className="p-[10px]" colSpan={4}>
            {headerTitle}
          </th>
        </tr>
        <tr className="bg-[#31231a] text-[#fdcc83] border border-solid border-[#4a3629] text-sm">
          {subHeaders &&
            subHeaders.map((subHeader, subHeaderIndex) => {
              return (
                <th
                  key={subHeaderIndex}
                  className="p-[10px] border border-solid border-[#4a3629] text-[#fdcc83]"
                  colSpan={2}
                >
                  {subHeader}
                </th>
              );
            })}
        </tr>

        <tr className="bg-[#31231a] text-[#fdcc83] border border-solid border-[#4a3629] text-sm">
          {contentHeader.map((header, headerIndex) => {
            return (
              <th
                key={headerIndex}
                className={`p-[10px] border border-solid border-[#4a3629] text-[#fdcc83] ${header.className}`}
              >
                {header.value}
              </th>
            );
          })}
        </tr>
        {data.map((row, rowIndex) => {
          return (
            <tr
              key={rowIndex}
              className="bg-[#000] text-[#90553e]  border-[#4a3629] text-center"
            >
              {contentHeader.map((header, cellIndex) => {
                if (!!row[header.key]) {
                  return (
                    <td
                      key={cellIndex}
                      className="border border-solid border-[#4a3629] p-1"
                    >
                      {row[header.key]}
                    </td>
                  );
                }
                return null;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default function BullFight() {
  return (
    <>
      <h3 className="my-4 font-semibold text-base">Bull Fight</h3>
      <p className="my-[14px]">
        우리나라에서 많이 유행하고 있는 도리짓고땡과 유사한 카지노게임의
        일종입니다. 우선, 유저는 바카라와 동일한 방식으로 플러이어 또는 뱅커에
        배팅을 하게 됩니다.
      </p>
      <p className="my-[14px]">{`배팅이 완료되면, 딜러는 플레이어와 뱅커에 각각 5장의 카드가 Dealing 하게되고,임의의 3장의 카드합을 이용하여 10의 배수(예 : 10 or 20 or 30)를 조합한 후 밑부분에 깔고, 남은 2장의 카드를 윗부분에 올려놓고 2장의 카드합을 서로 비교하여 높은숫자를 가진 쪽이 승리하게 됩니다. 이때, 임의의 3장의 카드합으로 10의 배수를 조합한 경우, 이 패를 <불(Bull) 또는 황소>라고 부릅니다.`}</p>
      <p className="my-[14px]">{`그러나, 임의의 3장의 카드합으로 10의 배수를 조합할 수 없다면, 이 패를 <노불(No Bull) 또는 무황소>라고 부르며, 최종적으로 이미 받은 5장의 카드 중 제일 큰카드의 크기를 서로 비교하여 승패를 결정하게 됩니다.`}</p>
      <p className="my-[14px]">{`Bullfight 게임은 유저가 뱅커 또는 플레이어에 배팅한 후 각각 어떠한 패로 이겼느냐? 또는 졌느냐?에 따라 배당금 또는 손실금이 1~3배까지 변동하게 됩니다.`}</p>
      <p className="my-[14px]">{`따라서, 이 게임의 경우 배당금과 손실금의 변동폭이 매우 크다는 것이 가장 큰 특징이라 할 수 있습니다.`}</p>
      <p className="my-[14px]">{`또한, 유저는 기본배팅 외에도 <뱅커투페어, 플레이어투페어, 뱅커트리플, 플레이어트리플>과 같은 옵션에 별도로 배팅할 수 있습니다.`}</p>
      <p className="my-4 text-base font-bold">{`(1) 카드크기(값)`}</p>
      <ul className="pl-12 space-y-1 list-decimal marker:text-[#948477] my-[14px]">
        <li>카드A는 1로 계산되며 모든 그림카드 J,Q,K는 10으로 계산됩니다.</li>
        <li>나머지 숫자카드는 실제 표시된 숫자대로 계산됩니다.</li>
        <li>
          {`플레이어와 뱅커 모두 임의의 3장의 합으로 <Bull>을 만든 경우,나머지 2장카드합의 서열은 10>9>8>7> … …>3>2>1이 됩니다.`}
        </li>
        <li>
          {`플레이어와 뱅커 모두 임의의 3장의 합으로 <No Bull>이 된 경우,이미 받은 5장의 카드 중 제일 큰 카드의 서열은 K>Q>J10>9>8> … … >3>2>1이 됩니다.`}
        </li>
      </ul>
      <p className="my-4 text-base font-bold">{`(2) 카드조합 및 서열`}</p>
      <ul className="pl-12 space-y-1 list-decimal marker:text-[#948477] my-[14px]">
        <li>{`뱅커 또는 플레이어중 어느 한쪽이 Bull(불)이고 다른 한쪽이 No Bull(노불)인 경우 무조건 Bull(불)쪽이 승리하게 된다.`}</li>
        <li>
          <span>{`뱅커와 플레이어 모두 Bull인 경우에는BullBull(불불) > Bull9(불9) > Bull8(불8) > …… > Bull2(불2) > Bul1(불1)순으로 결정한다.`}</span>
          <div className="mx-[40px]">
            <p className="my-4"> ※ BullBull(불불)이란?</p>
            <p className="my-[14px]">
              5장의 카드 중 임의의 3장의 카드합과 나머지2장의 카드합이 전부다
              10의 배수로 조합될 때, 이패를 BullBull(불불)이라고 하며 이
              게임에서 가장 높은 서열의 패가 됩니다.
            </p>
            <p className="my-[14px]">
              (예) K.8.2.10.Q인 경우 밑부분에 놓인 3장의 카드조합이
              K.8.2(총합20), 윗부분에 놓인 2장 카드의 조합이 10.Q(총합20)이라고
              가정하면, 모두 10의 배수이므로 BullBull 된다.
            </p>
          </div>
        </li>
        <li>
          {`뱅커와 플레이어 모두 No Bull인 경우에는 5개의 카드 중 제일 높은 점수의 카드로 승패를 결정하게 된다, 만약, 제일 큰 카드가 똑같을 경우에는 두 번째로 큰 카드를 가지고 서로 비교하게 되고, 이런 방법으로 승패가 결정되기까지 5개의 카드를 전부 비교하게 된다`}
        </li>
      </ul>
      <Tables
        headerTitle="◈ 카드조합별 배당율 ◈"
        subHeaders={['승리시', '패배시']}
        contentHeader={[
          {
            className: 'w-1/4',
            key: 'card1',
            value: '카드조합',
          },
          {
            className: 'w-1/4',
            key: 'rate1',
            value: '승리배당율',
          },
          {
            className: 'w-1/4',
            key: 'card2',
            value: '카드조합',
          },
          {
            className: 'w-1/4',
            key: 'rate2',
            value: '승리배당율',
          },
        ]}
        data={[
          {
            card1: 'No Bull ~ Bull6',
            rate1: '0.95배',
            card2: 'No Bull ~ Bull6',
            rate2: '1배',
          },
          {
            card1: 'Bull7 ~ Bull9',
            rate1: '1.9배',
            card2: 'Bull7 ~ Bull9',
            rate2: '2배',
          },
          {
            card1: 'BullBull',
            rate1: '2.85배',
            card2: 'BullBull',
            rate2: '3배',
          },
        ]}
      />
      <ul className="pl-12 space-y-1 list-decimal marker:text-[#948477] my-[14px]">
        <li>{`승리시에는 카지노수수료 5%를 떼기 때문에 배당률이 0.95 or 1.9 or 2.85배가 된다`}</li>
        <li>
          {`패배시에는 어떠한 카드조합으로 졌는냐에 따라 1~3배의 손실금이 발생할 수 있기 때문에 배팅시에 배팅금액의 2배에 해당되는 금액이 <배팅보증금>으로 잔액에서 같이 빠지게 됩니다.`}
        </li>
      </ul>
      <p className="my-[14px]">
        {`예를 들어, 잔액이 100만원 있는 상태에서 뱅커에 10만원을 배팅하게 되면, 20만원의 배팅보증금이 잔액에서 같이 빠지게 되어 배팅 후에 최종잔액은 70만원이 남게 됩니다.`}{' '}
        <br />
        {`이는 만약, 플레이어가 BullBull이 나와 뱅커에 건 배팅이 지는 경우 손실배당율이 3배가 되므로 총 30만원의 손실금을 물어내야 하기 때문에 최초에 배팅한 10만원과 별도로 20만원의 보증금을 반드시 내고 게임에 참여해야 합니다.`}
      </p>
      <p className="my-[14px]">{`따라서, Bullfight는 반드시 <배팅액×3>만큼이 잔액이 있어야만 게임에 참여할 수 있습니다.`}</p>
      <Tables
        headerTitle="◈ 옵션배팅 배당율 ◈"
        contentHeader={[
          {
            className: 'w-[40%]',
            key: 'card',
            value: '카드조합',
          },
          {
            className: 'w-[20%]',
            key: 'rate',
            value: '옵션배당율',
          },
          {
            className: 'w-[40%]',
            key: 'content',
            value: '특이사항',
          },
        ]}
        data={[
          {
            card: '뱅커투페어 or 플레이어투페어	',
            rate: '10배',
            content:
              '	만약, 게임결과 <포카드 or 풀하우스>로 나타나면, <투페어 or 쓰리카드>배팅은 이기는 것으로 간주됩니다.',
          },
        ]}
      />
    </>
  );
}
