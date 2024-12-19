export default function TableHistoryDeposit() {
  return (
    <div className="bg-[url('/assets/image/black75.png')] p-5 rounded-[5px] border border-solid border-[#4c3023] overflow-auto mt-4">
      <table className="w-full">
        <tbody>
          <tr className="text-white bg-[#4c3023] text-sm">
            <th className="h-7">No.</th>
            <th className="h-7 w-[20%]">신청일자</th>
            <th className="h-7 w-[20%]">신청브랜드</th>
            <th className="h-7 w-[15%]">신청금액</th>
            <th className="h-7 w-[15%]">진행결과</th>
            <th className="h-7 w-[20%]">처리일자</th>
          </tr>
        </tbody>
      </table>
      <div className="min-h-[250px]">
        <p className="text-[#fdcc83] h-8 border border-b border-solid border-[#2f271e] text-sm flex items-center">
          회원님의 입금내역이 존재하지 않습니다.
        </p>
      </div>
    </div>
  );
}
