export default function SicBo() {
  return (
    <>
      <ul className="pl-5 space-y-1 list-decimal marker:text-[#948477]">
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
    </>
  );
}
