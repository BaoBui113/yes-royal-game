import Image from 'next/image';
const Tables = ({
  headers,
  data,
}: {
  headers: string[];
  data: { player1: string; player2: string }[];
}) => {
  return (
    <>
      <table className="w-full bg-[#4a3629]  text-center border-collapse">
        <tbody>
          <tr className="bg-[#31231a] text-[#fdcc83] border border-solid border-[#4a3629] text-sm">
            {headers.map((header, inx) => {
              return (
                <th
                  key={inx}
                  className="w-1/2 p-[10px] border border-solid border-[#4a3629]"
                >
                  {header}
                </th>
              );
            })}
          </tr>

          {data.map((item, index) => {
            return (
              <tr
                key={index}
                className="p-1 bg-[#000] text-[#90553e] border border-solid border-[#4a3629] text-center"
              >
                <td className="border border-solid border-[#4a3629]">
                  {item.player1}
                </td>
                <td className="border border-solid border-[#4a3629]">
                  {item.player2}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default function Baccarat() {
  return (
    <>
      <p>
        {' '}
        바카라는 8목의 카드를 섞어서 나오는 문양과 수의 변형을 조합한 카드
        게임입니다. <br /> 딜러에 의해서 각각 뱅커 와 플레이어에 두장씩 카드가
        나누어집니다. <br /> 딜러가 카드를 나누기 전에 뱅커, 플레이어, 타이 또는
        페어 에 베팅이 이루어져야합니다. <br /> 이긴 베팅 금액에 대해서는 뱅커와
        플페이어에 대해 1대1로 지불이 됩니다. 그러나 5%의 커미션이 뱅커로 이긴
        금액에 대해 적용이 됩니다. 그래서 뱅커로 이기신 금액에 대해 실제로는
        95%만 지불이 됩니다. <br /> 타이 베팅에 대해서는 플레이어와 뱅커가
        동점이 나올경우 베팅에대해 8배의 지불이 이루어집니다. 그리고 한번 베팅이
        되고 딜러에 의해 카드가 나누어지기 시작하면 베팅을 전혀 바꿀수 없읍니다.
        이것은 정해진 규칙으로서 뱅커와 플레이어에 각각 2장씩에 또는 3장씩에
        걸친 결과를 기다려야만 합니다. <br /> 처음에 나누어진 뱅커와 플레이어에
        각각의 2장씩 카드가 같은 숫자가 뱅커 또는 플레이어에 나왔을 경우에
        이것을 뱅커 페어 또는 플레이어 페어라고 합니다. 이럴경우 베팅
        금액의11배가 지불됩니다. 이런 경우에는 게임에 전혀 지장을 주지 않으며
        뱅커와 플레이어 또는 타이 베팅에 대한 게임은 계속 진행됩니다. <br />{' '}
        카드에 대한 점수계산은 더하기 방법으로 결정되는데, 0에서9까지입니다.
        10과 얼굴이 나오는 카드들은 0점으로 취급되며 어떠한 많은 점수가
        더해지더라도 끝의 한자리숫자만 점수로 취급됩니다. 그러므로 둘중에 한쪽이
        높은 점수가 이기게 되고 동점이 나오면 타이로 이기게 됩니다.
      </p>
      <h3 className="my-4">점수의예:</h3>

      <ul className="pl-10 space-y-3 list-disc marker:text-[#948477]">
        <li>예1: 6 + 0= 6, 이패의점수는6.</li>
        <div className="-ml-10 flex items-center">
          <div className="relative w-[101px] h-[128px]">
            <Image
              src={'/assets/image/game-rule/bakara_02.png'}
              alt="bakara 02"
              fill
            />
          </div>
          <span>+</span>
          <div className="relative w-[101px] h-[128px]">
            <Image
              src={'/assets/image/game-rule/bakara_05.png'}
              alt="bakara 05"
              fill
            />
          </div>
        </div>
        <li>예2: 4+ 0 +6=10, 이패의점수는 0.</li>
        <div className="-ml-10 flex items-center">
          <div className="relative w-[101px] h-[128px]">
            <Image
              src={'/assets/image/game-rule/bakara_03.png'}
              alt="bakara 03"
              fill
            />
          </div>
          <span>+</span>
          <div className="relative w-[101px] h-[128px]">
            <Image
              src={'/assets/image/game-rule/bakara_04.png'}
              alt="bakara 04"
              fill
            />
          </div>
          <div className="relative w-[101px] h-[128px]">
            <Image
              src={'/assets/image/game-rule/bakara_05.png'}
              alt="bakara 05"
              fill
            />
          </div>
        </div>
      </ul>
      <h3 className="my-[14px] text-base">플레이어 규칙</h3>
      <Tables
        headers={['PLAYER 처음 두 카드의 총합이', 'PLAYER 액션']}
        data={[
          { player1: '0, 1, 2, 3, 4, 5', player2: '패뽑기' },
          { player1: '6, 7', player2: '멈추기' },
          { player1: '8, 9', player2: '멈추기(자연)' },
        ]}
      />
      <p className="my-[14px]">
        처음에 받은 두장의 카드가 6점이상이면 한장 더 안받고 기다리거나 내츄랄로
        이기게 되고 5점 또는 이하인경우, 한장을 더 받아야합니다.
      </p>
      <h3 className="my-4">뱅커 규칙</h3>
      <Tables
        headers={['BANKER 처음 두 카드의 총합이', 'BANKER 액션']}
        data={[
          { player1: '0, 1, 2, 3, 4, 5', player2: '패뽑기' },
          { player1: '6, 7', player2: '멈추기' },
          { player1: '8, 9', player2: '멈추기(자연)' },
        ]}
      />
      <p className="my-[14px]">
        처음에받은 두장의 카드가 7점 이상이면 한장 더안받고 기다리거나 내츄랄로
        이기게되고 만약에 처음 두장의카드가 0, 1, 2점 이면 무조건 한장
        더받아야합니다. 그러나3, 4, 5, 6점일경우 플레이어에서 받는 세번째 카드의
        점수에 따라서 뱅커의 승패가 결정됩니다. 따라서 아래의 도표에서 보시는
        것처럼 플레이어의 승식이나옴니다
      </p>
      <h3 className="my-4">뱅커패와 플레이패</h3>
      <div className="relative max-w-[493px] h-[360px]">
        <Image
          src={'/assets/image/game-rule/bakara_06.jpg'}
          alt="bakara_06.jpg"
          fill
        />
      </div>
      <p className="my-[14px]">
        D=한장 더 받기, N=플레이어의한장 더안받고 끝내기.
      </p>
    </>
  );
}
