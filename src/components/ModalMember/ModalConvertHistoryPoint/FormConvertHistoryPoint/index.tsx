export default function FormConvertHistoryPoint() {
  return (
    <form>
      <div className="bg-[url('/assets/image/black75.png')] rounded-[5px] border border-solid border-[#4c3023] overflow-auto mt-2 p-5">
        <h3 className="text-[#948477] font-semibold text-xl my-4">
          포인트 전환 내역
        </h3>
        <div className="flex gap-2 items-center text-[#948477]">
          <span>보유 포인트 :</span>
          <span>85000</span>
          <span>전환 포인트 :</span>
          <input type="text" className="h-5 w-[170px] px-2" />
          <button
            style={{
              background: 'rgb(171, 123, 40)',
            }}
            className="text-sm text-center px-2 py-[2px] rounded text-black"
          >
            전환하기
          </button>
        </div>
        <table className="w-full mt-1">
          <tbody>
            <tr className="text-white">
              <th className="w-[30%] h-8 bg-[#4c3023]">전환일</th>
              <th className="w-[30%] h-8 bg-[#4c3023]">전환금액</th>
              <th className="w-[40%] h-8 bg-[#4c3023]">상세내역</th>
            </tr>
          </tbody>
        </table>
        <p className="text-[#fdcc83] h-8  border-b border-b-[#2f271e] text-sm">
          회원님께 전환한 포인트가 존재하지 않습니다.
        </p>
        <p className="text-[#948477] text-sm">
          회원님이 전환하는 포인트 내역입니다. 최근 10건만 표시됩니다.
        </p>
      </div>
    </form>
  );
}
